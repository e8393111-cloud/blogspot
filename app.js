// ===== Storage =====
const KEY = 'health-app-v1';

const defaultState = {
  exercise: [],
  diet: [],
  weight: [],
  sleep: [],
  meds: [],        // {id, name, time, notify}
  medLog: {},      // { 'YYYY-MM-DD': { medId: true } }
  water: {},       // { 'YYYY-MM-DD': count }
};

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(defaultState);
    return { ...structuredClone(defaultState), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultState);
  }
}
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

let state = load();

// ===== Utils =====
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const localDateKey = (d = new Date()) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};
const todayKey = () => localDateKey();
const yesterdayKey = () => {
  const d = new Date(); d.setDate(d.getDate() - 1);
  return localDateKey(d);
};
const fmtTime = (iso) => new Date(iso).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
const fmtDate = (iso) => new Date(iso).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
const uid = () => Math.random().toString(36).slice(2, 10);

// ===== Tabs =====
const titleMap = { home: '홈', exercise: '운동', diet: '식단', body: '몸 관리', meds: '복약' };
$$('.tab').forEach(t => {
  t.addEventListener('click', () => switchTab(t.dataset.tab));
});
function switchTab(name) {
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  $$('.view').forEach(v => v.classList.toggle('active', v.dataset.view === name));
  $('#page-title').textContent = titleMap[name] || '';
  window.scrollTo(0, 0);
  renderAll();
}

// ===== Exercise =====
$('#form-exercise').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  state.exercise.unshift({
    id: uid(),
    type: fd.get('type'),
    minutes: +fd.get('minutes'),
    kcal: +fd.get('kcal') || 0,
    note: fd.get('note') || '',
    at: new Date().toISOString(),
  });
  save(); e.target.reset(); renderAll();
});

function renderExercise() {
  const ul = $('#list-exercise');
  const items = state.exercise.slice(0, 30);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${it.type} · ${it.minutes}분</span>
        <span class="meta">${fmtDate(it.at)} ${fmtTime(it.at)} · ${it.kcal} kcal${it.note ? ' · ' + escapeHtml(it.note) : ''}</span>
      </div>
      <button class="delete-btn" data-del="exercise" data-id="${it.id}">×</button>
    </li>
  `).join('') : '<li class="empty">아직 운동 기록이 없어요</li>';
}

// ===== Diet =====
$('#form-diet').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  state.diet.unshift({
    id: uid(),
    meal: fd.get('meal'),
    food: fd.get('food'),
    kcal: +fd.get('kcal') || 0,
    at: new Date().toISOString(),
  });
  save(); e.target.reset(); renderAll();
});

function renderDiet() {
  const ul = $('#list-diet');
  const today = todayKey();
  const items = state.diet.filter(d => localDateKey(new Date(d.at)) === today);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${it.meal} · ${escapeHtml(it.food)}</span>
        <span class="meta">${fmtTime(it.at)} · ${it.kcal} kcal</span>
      </div>
      <button class="delete-btn" data-del="diet" data-id="${it.id}">×</button>
    </li>
  `).join('') : '<li class="empty">오늘 식사 기록이 없어요</li>';
}

// ===== Weight =====
$('#form-weight').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  state.weight.unshift({
    id: uid(),
    kg: +fd.get('kg'),
    at: new Date().toISOString(),
  });
  save(); e.target.reset(); renderAll();
});

function renderWeight() {
  const ul = $('#list-weight');
  const items = state.weight.slice(0, 10);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${it.kg} kg</span>
        <span class="meta">${fmtDate(it.at)} ${fmtTime(it.at)}</span>
      </div>
      <button class="delete-btn" data-del="weight" data-id="${it.id}">×</button>
    </li>
  `).join('') : '<li class="empty">아직 체중 기록이 없어요</li>';
  drawWeightChart();
}

function drawWeightChart() {
  const canvas = $('#weight-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth, h = 180;
  canvas.width = w * dpr; canvas.height = h * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const data = state.weight.slice(0, 14).slice().reverse();
  if (data.length < 1) {
    ctx.fillStyle = '#9ca3af';
    ctx.font = '13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('체중 기록이 쌓이면 그래프가 표시돼요', w / 2, h / 2);
    return;
  }
  const vals = data.map(d => d.kg);
  const min = Math.min(...vals) - 0.5, max = Math.max(...vals) + 0.5;
  const pad = 24;
  const xStep = (w - pad * 2) / Math.max(data.length - 1, 1);
  const yScale = (h - pad * 2) / Math.max(max - min, 0.1);

  ctx.strokeStyle = '#e5e7eb';
  ctx.beginPath(); ctx.moveTo(pad, h - pad); ctx.lineTo(w - pad, h - pad); ctx.stroke();

  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = pad + i * xStep;
    const y = h - pad - (d.kg - min) * yScale;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.fillStyle = '#10b981';
  data.forEach((d, i) => {
    const x = pad + i * xStep;
    const y = h - pad - (d.kg - min) * yScale;
    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
  });
}

// ===== Sleep =====
$('#form-sleep').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const start = fd.get('sleepStart'), end = fd.get('sleepEnd');
  state.sleep.unshift({
    id: uid(),
    start, end,
    at: new Date().toISOString(),
  });
  save(); e.target.reset(); renderAll();
});

function sleepHours(start, end) {
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  let mins = (eh * 60 + em) - (sh * 60 + sm);
  if (mins < 0) mins += 24 * 60;
  return (mins / 60).toFixed(1);
}

function renderSleep() {
  const ul = $('#list-sleep');
  const items = state.sleep.slice(0, 10);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${sleepHours(it.start, it.end)}시간</span>
        <span class="meta">${fmtDate(it.at)} · ${it.start} ~ ${it.end}</span>
      </div>
      <button class="delete-btn" data-del="sleep" data-id="${it.id}">×</button>
    </li>
  `).join('') : '<li class="empty">아직 수면 기록이 없어요</li>';
}

// ===== Water =====
$('#water-plus').addEventListener('click', () => addWater(1));
$('#water-minus').addEventListener('click', () => addWater(-1));
function addWater(delta) {
  const k = todayKey();
  state.water[k] = Math.max(0, (state.water[k] || 0) + delta);
  save(); renderAll();
}

// ===== Medications =====
$('#form-med').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  state.meds.push({
    id: uid(),
    name: fd.get('name'),
    time: fd.get('time'),
    notify: fd.get('notify') === 'on',
  });
  state.meds.sort((a, b) => a.time.localeCompare(b.time));
  save(); e.target.reset(); renderAll();
});

function renderMeds() {
  const ul = $('#list-meds');
  const k = todayKey();
  const log = state.medLog[k] || {};
  ul.innerHTML = state.meds.length ? state.meds.map(m => `
    <li class="med-item">
      <div class="item-main">
        <span class="item-title">${escapeHtml(m.name)}</span>
        <span class="meta">⏰ ${m.time}${m.notify ? ' · 알림' : ''}</span>
      </div>
      <button class="check ${log[m.id] ? 'done' : ''}" data-check="${m.id}">${log[m.id] ? '✓' : ''}</button>
      <button class="delete-btn" data-del="meds" data-id="${m.id}">×</button>
    </li>
  `).join('') : '<li class="empty">등록된 약이 없어요</li>';
}

$('#enable-notify').addEventListener('click', async () => {
  if (!('Notification' in window)) {
    alert('이 브라우저는 알림을 지원하지 않아요');
    return;
  }
  const perm = await Notification.requestPermission();
  alert(perm === 'granted' ? '알림이 활성화됐어요 ✅' : '알림 권한이 거부되었어요');
});

// 매 30초 체크: 복약 시각 도달 시 알림 (약별로 하루 1회만 발송)
const notifiedTags = new Set();
setInterval(checkMedReminders, 30 * 1000);
function checkMedReminders() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const now = new Date();
  const hhmm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const k = todayKey();
  state.meds.forEach(m => {
    if (!m.notify || m.time !== hhmm) return;
    if (state.medLog[k]?.[m.id]) return;
    const tag = `${k}-${m.id}`;
    if (notifiedTags.has(tag)) return;
    notifiedTags.add(tag);
    new Notification('💊 복약 알림', { body: `${m.name} 복용 시간이에요` });
  });
}

// ===== Home =====
function renderHome() {
  const k = todayKey();
  const yk = yesterdayKey();

  $('#today-date').textContent = new Date().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'short' });

  const todayDiet = state.diet.filter(d => localDateKey(new Date(d.at)) === k);
  const caloriesIn = todayDiet.reduce((a, b) => a + (b.kcal || 0), 0);
  const todayExercise = state.exercise.filter(d => localDateKey(new Date(d.at)) === k);
  const caloriesOut = todayExercise.reduce((a, b) => a + (b.kcal || 0), 0);
  const water = state.water[k] || 0;

  $('#stat-calories-in').textContent = caloriesIn;
  $('#stat-calories-out').textContent = caloriesOut;
  $('#stat-water').textContent = water;

  $('#summary-exercise').textContent = `${todayExercise.length}회`;
  $('#summary-meals').textContent = `${todayDiet.length}회`;
  $('#summary-weight').textContent = state.weight[0] ? `${state.weight[0].kg} kg` : '기록 없음';
  const ySleep = state.sleep.find(s => localDateKey(new Date(s.at)) === yk) || state.sleep[0];
  $('#summary-sleep').textContent = ySleep ? `${sleepHours(ySleep.start, ySleep.end)}시간` : '기록 없음';

  const log = state.medLog[k] || {};
  const taken = state.meds.filter(m => log[m.id]).length;
  $('#summary-meds').textContent = `${taken}/${state.meds.length}`;
}

function renderBody() {
  $('#water-count').textContent = state.water[todayKey()] || 0;
}

// ===== Render all =====
function renderAll() {
  renderHome();
  renderExercise();
  renderDiet();
  renderWeight();
  renderSleep();
  renderBody();
  renderMeds();
}

// ===== Event delegation =====
document.addEventListener('click', (e) => {
  const delBtn = e.target.closest('[data-del]');
  if (delBtn) {
    const list = delBtn.dataset.del;
    const id = delBtn.dataset.id;
    if (confirm('삭제할까요?')) {
      state[list] = state[list].filter(x => x.id !== id);
      save(); renderAll();
    }
    return;
  }
  const check = e.target.closest('[data-check]');
  if (check) {
    const id = check.dataset.check;
    const k = todayKey();
    state.medLog[k] = state.medLog[k] || {};
    state.medLog[k][id] = !state.medLog[k][id];
    save(); renderAll();
    return;
  }
  const quick = e.target.closest('[data-quick]');
  if (quick) {
    const action = quick.dataset.quick;
    if (action === 'water') addWater(1);
    else if (action === 'exercise') switchTab('exercise');
    else if (action === 'meal') switchTab('diet');
    else if (action === 'weight') switchTab('body');
  }
});

// ===== Utils =====
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// ===== PWA install prompt =====
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  $('#install-btn').hidden = false;
});
$('#install-btn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $('#install-btn').hidden = true;
});

// ===== Service worker =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ===== Init =====
renderAll();
window.addEventListener('resize', drawWeightChart);
