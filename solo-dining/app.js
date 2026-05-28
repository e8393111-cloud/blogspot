/* 혼밥 가능 식당 찾기
 * - 카카오 로컬 키워드 검색 (FD6 음식점) + 카카오 지도 SDK
 * - 사용자 평점/메모/즐겨찾기/방문기록은 localStorage 저장
 */

const STORAGE = {
  KAKAO_KEY: 'soloDining.kakaoKey',
  RATINGS: 'soloDining.ratings',     // { [placeId]: { rating, memo } }
  FAVORITES: 'soloDining.favorites', // { [placeId]: place }
  VISITS: 'soloDining.visits',       // [{ id, placeId, place, when, note }]
};

const state = {
  kakaoKey: localStorage.getItem(STORAGE.KAKAO_KEY) || '',
  results: [],
  currentPlace: null,
  userLocation: null,
  map: null,
  markers: [],
  kakaoReady: false,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---------- 저장소 헬퍼 ----------
function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function writeJSON(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
function getRatings() { return readJSON(STORAGE.RATINGS, {}); }
function getFavorites() { return readJSON(STORAGE.FAVORITES, {}); }
function getVisits() { return readJSON(STORAGE.VISITS, []); }

function getRating(placeId) {
  return getRatings()[placeId] || { rating: 0, memo: '' };
}
function setRating(placeId, patch) {
  const ratings = getRatings();
  ratings[placeId] = { ...getRating(placeId), ...patch };
  writeJSON(STORAGE.RATINGS, ratings);
}

function isFavorite(placeId) {
  return !!getFavorites()[placeId];
}
function toggleFavorite(place) {
  const favs = getFavorites();
  if (favs[place.id]) delete favs[place.id];
  else favs[place.id] = place;
  writeJSON(STORAGE.FAVORITES, favs);
}

function addVisit(placeId, place, note) {
  const visits = getVisits();
  visits.unshift({
    id: 'v' + Date.now() + Math.random().toString(36).slice(2, 6),
    placeId,
    place,
    when: Date.now(),
    note: note || '',
  });
  writeJSON(STORAGE.VISITS, visits);
}
function deleteVisit(visitId) {
  writeJSON(STORAGE.VISITS, getVisits().filter((v) => v.id !== visitId));
}

// ---------- 카카오 SDK 로드 ----------
function loadKakaoSDK() {
  if (!state.kakaoKey) return Promise.reject(new Error('NO_KEY'));
  if (state.kakaoReady) return Promise.resolve();

  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        state.kakaoReady = true;
        resolve();
      });
      return;
    }
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(
      state.kakaoKey
    )}&libraries=services&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        state.kakaoReady = true;
        resolve();
      });
    };
    script.onerror = () => reject(new Error('SDK_LOAD_FAIL'));
    document.head.appendChild(script);
  });
}

// ---------- 검색 ----------
async function searchPlaces(query) {
  await loadKakaoSDK();
  const ps = new window.kakao.maps.services.Places();

  return new Promise((resolve, reject) => {
    const options = { size: 15, category_group_code: 'FD6' };
    if (state.userLocation && $('#filter-nearby').checked) {
      options.location = new window.kakao.maps.LatLng(
        state.userLocation.lat,
        state.userLocation.lng
      );
      options.radius = 1500;
      options.sort = window.kakao.maps.services.SortBy.DISTANCE;
    }
    ps.keywordSearch(
      query,
      (data, status, _pagination) => {
        const OK = window.kakao.maps.services.Status.OK;
        const ZERO = window.kakao.maps.services.Status.ZERO_RESULT;
        if (status === OK) resolve(data);
        else if (status === ZERO) resolve([]);
        else reject(new Error('SEARCH_FAIL'));
      },
      options
    );
  });
}

function categoryMatches(place, filter) {
  if (!filter) return true;
  const name = place.category_name || '';
  return name.includes(filter);
}

function applyFilters(results) {
  const cat = $('#filter-category').value;
  const minRating = parseInt($('#filter-min-rating').value, 10) || 0;
  return results.filter((p) => {
    if (!categoryMatches(p, cat)) return false;
    if (minRating > 0) {
      const r = getRating(p.id).rating;
      if (r < minRating) return false;
    }
    return true;
  });
}

function formatDistance(meters) {
  const m = Number(meters);
  if (!m && m !== 0) return '';
  if (m < 1000) return `${m}m`;
  return `${(m / 1000).toFixed(1)}km`;
}

function renderResults(places) {
  const ul = $('#results');
  ul.innerHTML = '';
  const status = $('#search-status');

  if (places.length === 0) {
    status.textContent = '조건에 맞는 식당이 없어요. 검색어나 필터를 바꿔보세요.';
    status.className = 'status info';
    return;
  }
  status.className = 'status hidden';

  for (const p of places) {
    ul.appendChild(renderPlaceItem(p));
  }
}

function renderPlaceItem(place) {
  const li = document.createElement('li');
  const cat = (place.category_name || '').split('>').pop().trim();
  const fav = isFavorite(place.id);
  const r = getRating(place.id).rating;

  const dist = place.distance ? formatDistance(place.distance) : '';

  li.innerHTML = `
    <div class="info">
      <h3 class="name">
        ${escapeHtml(place.place_name)}
        ${r >= 4 ? '<span class="badge">혼밥 추천</span>' : ''}
      </h3>
      <p class="category">${escapeHtml(cat)}</p>
      <p class="addr">${escapeHtml(place.road_address_name || place.address_name || '')}</p>
      <div class="meta">
        ${r > 0 ? `<span class="rating">★ ${r}</span>` : '<span>아직 평가 없음</span>'}
        ${dist ? `<span class="distance">📍 ${dist}</span>` : ''}
      </div>
    </div>
    <button class="fav-btn ${fav ? 'on' : ''}" aria-label="즐겨찾기 토글">⭐</button>
  `;

  li.querySelector('.info').addEventListener('click', () => openDetail(place));
  li.querySelector('.fav-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavorite(place);
    e.currentTarget.classList.toggle('on');
    renderFavorites();
  });

  return li;
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// ---------- 상세 모달 ----------
function openDetail(place) {
  state.currentPlace = place;
  $('#detail-name').textContent = place.place_name;
  $('#detail-category').textContent = place.category_name || '';
  $('#detail-address').textContent =
    place.road_address_name || place.address_name || '';
  $('#detail-phone').textContent = place.phone || '';
  $('#detail-link').href = place.place_url || '#';

  const r = getRating(place.id);
  paintStars(r.rating);
  $('#rating-text').textContent = r.rating > 0 ? `${r.rating}점` : '미평가';
  $('#detail-memo').value = r.memo || '';

  const favBtn = $('#btn-fav-toggle');
  favBtn.textContent = isFavorite(place.id) ? '⭐ 즐겨찾기 해제' : '⭐ 즐겨찾기';

  renderDetailVisits(place.id);
  $('#detail-modal').classList.remove('hidden');
}
function closeDetail() {
  $('#detail-modal').classList.add('hidden');
  // 메모 변경 저장
  if (state.currentPlace) {
    setRating(state.currentPlace.id, { memo: $('#detail-memo').value });
  }
  state.currentPlace = null;
  refreshAllLists();
}

function paintStars(value) {
  $$('#rating-stars button').forEach((b, i) => {
    const v = i + 1;
    b.classList.toggle('on', v <= value);
    b.textContent = v <= value ? '★' : '☆';
  });
}

function renderDetailVisits(placeId) {
  const ul = $('#detail-visits');
  ul.innerHTML = '';
  const list = getVisits().filter((v) => v.placeId === placeId);
  if (list.length === 0) {
    ul.innerHTML = '<li class="muted" style="background:transparent;border:none;">아직 기록 없음</li>';
    return;
  }
  for (const v of list) {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <div class="when">${new Date(v.when).toLocaleString('ko-KR')}</div>
        <div>${escapeHtml(v.note) || '<span class="muted">메모 없음</span>'}</div>
      </div>
      <button class="del" aria-label="삭제">✕</button>
    `;
    li.querySelector('.del').addEventListener('click', () => {
      deleteVisit(v.id);
      renderDetailVisits(placeId);
      renderVisits();
    });
    ul.appendChild(li);
  }
}

// ---------- 즐겨찾기 / 방문기록 ----------
function renderFavorites() {
  const ul = $('#favorites-list');
  const empty = $('#favorites-empty');
  const favs = Object.values(getFavorites());
  ul.innerHTML = '';
  empty.style.display = favs.length === 0 ? '' : 'none';
  for (const p of favs) ul.appendChild(renderPlaceItem(p));
}

function renderVisits() {
  const ul = $('#visits-list');
  const empty = $('#visits-empty');
  const visits = getVisits();
  ul.innerHTML = '';
  empty.style.display = visits.length === 0 ? '' : 'none';
  for (const v of visits) {
    const li = document.createElement('li');
    const cat = (v.place.category_name || '').split('>').pop().trim();
    li.innerHTML = `
      <div class="info">
        <h3 class="name">${escapeHtml(v.place.place_name)}</h3>
        <p class="category">${escapeHtml(cat)}</p>
        <div class="meta">
          <span>${new Date(v.when).toLocaleDateString('ko-KR')}</span>
          ${v.note ? `<span>· ${escapeHtml(v.note).slice(0, 30)}</span>` : ''}
        </div>
      </div>
    `;
    li.addEventListener('click', () => openDetail(v.place));
    ul.appendChild(li);
  }
}

function refreshAllLists() {
  // 검색 결과 다시 그려서 별점/즐겨찾기 상태 반영
  if (state.results.length > 0) renderResults(applyFilters(state.results));
  renderFavorites();
  renderVisits();
}

// ---------- 지도 ----------
async function showMap() {
  if (!state.kakaoKey) {
    $('#map-empty').textContent = '먼저 설정에서 카카오 키를 입력해 주세요.';
    $('#map-empty').style.display = '';
    return;
  }
  try {
    await loadKakaoSDK();
  } catch {
    $('#map-empty').textContent = '지도를 불러올 수 없어요. 키와 도메인 설정을 확인해 주세요.';
    $('#map-empty').style.display = '';
    return;
  }

  const places = state.results.length > 0 ? applyFilters(state.results) : [];
  if (places.length === 0) {
    $('#map-empty').style.display = '';
    $('#map').style.display = 'none';
    return;
  }
  $('#map-empty').style.display = 'none';
  $('#map').style.display = '';

  const container = $('#map');
  const first = places[0];
  const center = new window.kakao.maps.LatLng(Number(first.y), Number(first.x));

  if (!state.map) {
    state.map = new window.kakao.maps.Map(container, { center, level: 4 });
  } else {
    state.map.setCenter(center);
    state.map.relayout();
  }

  state.markers.forEach((m) => m.setMap(null));
  state.markers = [];

  const bounds = new window.kakao.maps.LatLngBounds();
  for (const p of places) {
    const pos = new window.kakao.maps.LatLng(Number(p.y), Number(p.x));
    bounds.extend(pos);
    const marker = new window.kakao.maps.Marker({ position: pos, map: state.map });
    const iw = new window.kakao.maps.InfoWindow({
      content: `<div style="padding:6px 8px;font-size:13px;font-weight:600;">${escapeHtml(
        p.place_name
      )}</div>`,
    });
    window.kakao.maps.event.addListener(marker, 'click', () => {
      iw.open(state.map, marker);
      openDetail(p);
    });
    state.markers.push(marker);
  }
  if (places.length > 1) state.map.setBounds(bounds);
}

// ---------- 위치 ----------
function getCurrentLocation() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      state.userLocation = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
    },
    () => { /* 거부됨: 무시 */ },
    { timeout: 5000, maximumAge: 60000 }
  );
}

// ---------- 이벤트 ----------
function switchTab(name) {
  $$('.tab').forEach((t) => t.classList.toggle('active', t.dataset.tab === name));
  $$('.panel').forEach((p) =>
    p.classList.toggle('active', p.id === `tab-${name}`)
  );
  if (name === 'map') showMap();
  if (name === 'favorites') renderFavorites();
  if (name === 'visits') renderVisits();
}

async function runSearch() {
  const q = $('#search-query').value.trim();
  if (!q) {
    $('#search-status').className = 'status info';
    $('#search-status').textContent = '검색어를 입력해 주세요.';
    return;
  }
  if (!state.kakaoKey) {
    $('#onboarding').classList.remove('hidden');
    return;
  }
  $('#search-status').className = 'status info';
  $('#search-status').textContent = '검색 중…';

  try {
    const places = await searchPlaces(q);
    state.results = places;
    renderResults(applyFilters(places));
  } catch (e) {
    $('#search-status').className = 'status error';
    $('#search-status').textContent =
      '검색에 실패했어요. 카카오 키와 도메인 등록 상태를 확인해 주세요.';
  }
}

function bindEvents() {
  $$('.tab').forEach((t) =>
    t.addEventListener('click', () => switchTab(t.dataset.tab))
  );

  $('#btn-search').addEventListener('click', runSearch);
  $('#search-query').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runSearch();
  });
  $('#filter-category').addEventListener('change', () =>
    renderResults(applyFilters(state.results))
  );
  $('#filter-min-rating').addEventListener('change', () =>
    renderResults(applyFilters(state.results))
  );
  $('#filter-nearby').addEventListener('change', () => {
    if ($('#filter-nearby').checked && !state.userLocation) {
      getCurrentLocation();
    }
  });

  // 상세 모달
  $('#detail-close').addEventListener('click', closeDetail);
  $('#detail-modal').addEventListener('click', (e) => {
    if (e.target.id === 'detail-modal') closeDetail();
  });
  $$('#rating-stars button').forEach((b) =>
    b.addEventListener('click', () => {
      const v = Number(b.dataset.v);
      if (!state.currentPlace) return;
      setRating(state.currentPlace.id, { rating: v });
      paintStars(v);
      $('#rating-text').textContent = `${v}점`;
    })
  );
  $('#btn-fav-toggle').addEventListener('click', () => {
    if (!state.currentPlace) return;
    toggleFavorite(state.currentPlace);
    $('#btn-fav-toggle').textContent = isFavorite(state.currentPlace.id)
      ? '⭐ 즐겨찾기 해제'
      : '⭐ 즐겨찾기';
  });
  $('#btn-visit').addEventListener('click', () => {
    if (!state.currentPlace) return;
    const note = $('#detail-memo').value.trim();
    addVisit(state.currentPlace.id, state.currentPlace, note);
    renderDetailVisits(state.currentPlace.id);
    renderVisits();
  });

  // 설정 모달
  $('#btn-settings').addEventListener('click', openSettings);
  $('#settings-close').addEventListener('click', closeSettings);
  $('#settings-modal').addEventListener('click', (e) => {
    if (e.target.id === 'settings-modal') closeSettings();
  });
  $('#btn-save-key').addEventListener('click', () => {
    const key = $('#kakao-key').value.trim();
    if (!key) return;
    localStorage.setItem(STORAGE.KAKAO_KEY, key);
    state.kakaoKey = key;
    state.kakaoReady = false; // 다음 호출에서 다시 로드
    closeSettings();
    $('#onboarding').classList.add('hidden');
  });
  $('#btn-clear-data').addEventListener('click', () => {
    if (!confirm('평가, 즐겨찾기, 방문기록을 모두 지웁니다. 계속할까요?')) return;
    localStorage.removeItem(STORAGE.RATINGS);
    localStorage.removeItem(STORAGE.FAVORITES);
    localStorage.removeItem(STORAGE.VISITS);
    refreshAllLists();
    alert('초기화 완료');
  });

  $('#btn-open-settings').addEventListener('click', () => {
    $('#onboarding').classList.add('hidden');
    openSettings();
  });
}

function openSettings() {
  $('#kakao-key').value = state.kakaoKey;
  $('#settings-modal').classList.remove('hidden');
}
function closeSettings() {
  $('#settings-modal').classList.add('hidden');
}

// ---------- 부트 ----------
function boot() {
  bindEvents();
  renderFavorites();
  renderVisits();
  if (!state.kakaoKey) {
    $('#onboarding').classList.remove('hidden');
  } else {
    getCurrentLocation();
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

document.addEventListener('DOMContentLoaded', boot);
