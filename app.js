// ===== Constants =====
const STORAGE_KEY = 'health-app-v1';
const LIMITS = {
  recentExercise: 30,
  recentDiet: 50,
  recentWeight: 10,
  recentSleep: 10,
  recentInbody: 20,
  chartDays: 14,
  waterGoal: 8,
  waterMax: 99,
  medPollMs: 30 * 1000,
};

// ===== Storage =====
const defaultState = {
  exercise: [],
  diet: [],
  weight: [],
  sleep: [],
  meds: [],        // {id, name, time, notify}
  medLog: {},      // { 'YYYY-MM-DD': { medId: true } }
  water: {},       // { 'YYYY-MM-DD': count }
  inbody: [],      // {id, at, weight, smm, bfm, bfp, bmi, bmr, note, source}
  schemaVersion: 2,
};

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return { ...structuredClone(defaultState), ...parsed };
  } catch (e) {
    console.error('Failed to load state', e);
    return structuredClone(defaultState);
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (err) {
    const isQuota = err && (err.name === 'QuotaExceededError' || err.code === 22 || /quota/i.test(err.message));
    toast(isQuota ? '저장 공간이 가득 찼어요. 오래된 기록을 삭제해주세요.' : `저장 실패: ${err.message}`, 'error');
    return false;
  }
}

let state = load();

// ===== DOM helpers =====
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// ===== Date helpers (local timezone) =====
function localDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
const todayKey = () => localDateKey();
const yesterdayKey = () => {
  const d = new Date(); d.setDate(d.getDate() - 1);
  return localDateKey(d);
};
const fmtTime = (iso) => new Date(iso).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
const fmtDate = (iso) => new Date(iso).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2, 12) + Date.now().toString(36));

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// ===== Toast / Modal =====
let toastTimer = null;
function toast(message, kind = 'info') {
  const el = $('#toast');
  el.textContent = message;
  el.className = `toast${kind === 'error' ? ' error' : ''}`;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 3000);
}

function confirmDialog(title, body) {
  return new Promise((resolve) => {
    const modal = $('#modal');
    $('#modal-title').textContent = title;
    $('#modal-body').textContent = body;
    modal.hidden = false;
    const cleanup = (result) => {
      modal.hidden = true;
      $('#modal-confirm').removeEventListener('click', onConfirm);
      $('#modal-cancel').removeEventListener('click', onCancel);
      modal.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onKey);
      resolve(result);
    };
    const onConfirm = () => cleanup(true);
    const onCancel = () => cleanup(false);
    const onBackdrop = (e) => { if (e.target === modal) cleanup(false); };
    const onKey = (e) => { if (e.key === 'Escape') cleanup(false); };
    $('#modal-confirm').addEventListener('click', onConfirm);
    $('#modal-cancel').addEventListener('click', onCancel);
    modal.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onKey);
    setTimeout(() => $('#modal-confirm').focus(), 0);
  });
}

// ===== Tabs =====
const titleMap = { home: '홈', exercise: '운동', diet: '식단', body: '몸 관리', meds: '복약' };
$$('.tab').forEach(t => {
  t.addEventListener('click', () => switchTab(t.dataset.tab));
});

function switchTab(name, opts = {}) {
  $$('.tab').forEach(t => {
    const active = t.dataset.tab === name;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  $$('.view').forEach(v => v.classList.toggle('active', v.dataset.view === name));
  $('#page-title').textContent = titleMap[name] || '';
  window.scrollTo(0, 0);
  // 탭별로 표시되는 뷰만 갱신
  renderViewFor(name);
  if (opts.scrollTo) {
    setTimeout(() => {
      const el = document.getElementById(opts.scrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}

function renderViewFor(name) {
  // 홈은 모든 데이터 요약이라 항상 다시 그림
  if (name === 'home') return renderHome();
  if (name === 'exercise') { renderHome(); renderExercise(); return; }
  if (name === 'diet') { renderHome(); renderDiet(); return; }
  if (name === 'body') { renderHome(); renderWeight(); renderSleep(); renderBody(); renderInbody(); return; }
  if (name === 'meds') { renderHome(); renderMeds(); checkNotifyBanner(); return; }
}

// ===== Form validation helper =====
function validNumber(v, { min, max } = {}) {
  const n = +v;
  if (!Number.isFinite(n)) return null;
  if (min != null && n < min) return null;
  if (max != null && n > max) return null;
  return n;
}

// ===== Exercise =====
$('#form-exercise').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const minutes = validNumber(fd.get('minutes'), { min: 1, max: 1440 });
  if (minutes == null) { toast('시간을 1~1440분 사이로 입력해주세요', 'error'); return; }
  const kcal = validNumber(fd.get('kcal'), { min: 0, max: 10000 }) ?? 0;
  state.exercise.unshift({
    id: uid(),
    type: fd.get('type'),
    minutes,
    kcal,
    note: (fd.get('note') || '').slice(0, 200),
    at: new Date().toISOString(),
  });
  if (!save()) return;
  e.target.reset();
  renderHome(); renderExercise();
  toast('운동 기록을 저장했어요');
});

function renderExercise() {
  const ul = $('#list-exercise');
  const items = state.exercise.slice(0, LIMITS.recentExercise);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${escapeHtml(it.type)} · ${it.minutes}분</span>
        <span class="meta">${fmtDate(it.at)} ${fmtTime(it.at)} · ${it.kcal} kcal${it.note ? ' · ' + escapeHtml(it.note) : ''}</span>
      </div>
      <button class="delete-btn" data-del="exercise" data-id="${it.id}" aria-label="삭제">×</button>
    </li>
  `).join('') : '<li class="empty">아직 운동 기록이 없어요</li>';
}

// ===== Diet =====
$('#form-diet').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const food = (fd.get('food') || '').trim().slice(0, 100);
  if (!food) { toast('음식 이름을 입력해주세요', 'error'); return; }
  const kcal = validNumber(fd.get('kcal'), { min: 1, max: 10000 });
  if (kcal == null) { toast('칼로리를 1~10000 사이로 입력해주세요', 'error'); return; }
  state.diet.unshift({
    id: uid(),
    meal: fd.get('meal'),
    food,
    kcal,
    at: new Date().toISOString(),
  });
  if (!save()) return;
  e.target.reset();
  renderHome(); renderDiet();
  toast('식사를 기록했어요');
});

function renderDiet() {
  const ul = $('#list-diet');
  const today = todayKey();
  const items = state.diet.filter(d => localDateKey(new Date(d.at)) === today);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${escapeHtml(it.meal)} · ${escapeHtml(it.food)}</span>
        <span class="meta">${fmtTime(it.at)} · ${it.kcal} kcal</span>
      </div>
      <button class="delete-btn" data-del="diet" data-id="${it.id}" aria-label="삭제">×</button>
    </li>
  `).join('') : '<li class="empty">오늘 식사 기록이 없어요</li>';
}

// ===== Weight =====
$('#form-weight').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const kg = validNumber(fd.get('kg'), { min: 20, max: 400 });
  if (kg == null) { toast('체중을 20~400kg 사이로 입력해주세요', 'error'); return; }
  state.weight.unshift({ id: uid(), kg, at: new Date().toISOString() });
  if (!save()) return;
  e.target.reset();
  renderHome(); renderWeight();
  toast('체중을 기록했어요');
});

function renderWeight() {
  const ul = $('#list-weight');
  const items = state.weight.slice(0, LIMITS.recentWeight);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${it.kg} kg</span>
        <span class="meta">${fmtDate(it.at)} ${fmtTime(it.at)}</span>
      </div>
      <button class="delete-btn" data-del="weight" data-id="${it.id}" aria-label="삭제">×</button>
    </li>
  `).join('') : '<li class="empty">아직 체중 기록이 없어요</li>';
  drawWeightChart();
}

function drawWeightChart() {
  const canvas = $('#weight-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth || 320, h = 180;
  canvas.width = w * dpr; canvas.height = h * dpr;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const axisColor = isDark ? '#334155' : '#e5e7eb';
  const labelColor = isDark ? '#cbd5e1' : '#4b5563';

  const data = state.weight.slice(0, LIMITS.chartDays).slice().reverse();
  if (data.length < 1) {
    ctx.fillStyle = labelColor;
    ctx.font = '13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('체중 기록이 쌓이면 그래프가 표시돼요', w / 2, h / 2);
    return;
  }

  const vals = data.map(d => d.kg);
  const min = Math.min(...vals) - 0.5, max = Math.max(...vals) + 0.5;
  const pad = 28;
  const range = Math.max(max - min, 0.1);
  const xStep = data.length > 1 ? (w - pad * 2) / (data.length - 1) : 0;
  const yScale = (h - pad * 2) / range;

  // baseline
  ctx.strokeStyle = axisColor;
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pad, h - pad); ctx.lineTo(w - pad, h - pad); ctx.stroke();

  // y-axis labels (min/max)
  ctx.fillStyle = labelColor;
  ctx.font = '11px sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(`${max.toFixed(1)}kg`, pad - 4, pad + 4);
  ctx.fillText(`${min.toFixed(1)}kg`, pad - 4, h - pad + 4);

  // line
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = data.length === 1 ? w / 2 : pad + i * xStep;
    const y = h - pad - (d.kg - min) * yScale;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // points + last value label
  ctx.fillStyle = '#10b981';
  data.forEach((d, i) => {
    const x = data.length === 1 ? w / 2 : pad + i * xStep;
    const y = h - pad - (d.kg - min) * yScale;
    ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI * 2); ctx.fill();
  });
  const last = data[data.length - 1];
  const lx = data.length === 1 ? w / 2 : pad + (data.length - 1) * xStep;
  const ly = h - pad - (last.kg - min) * yScale;
  ctx.textAlign = 'right';
  ctx.fillStyle = labelColor;
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText(`${last.kg}kg`, lx - 8, ly - 6);
}

// ===== Sleep =====
$('#form-sleep').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const start = fd.get('sleepStart'), end = fd.get('sleepEnd');
  if (!start || !end) { toast('잠든 시각과 일어난 시각을 모두 입력해주세요', 'error'); return; }
  state.sleep.unshift({ id: uid(), start, end, at: new Date().toISOString() });
  if (!save()) return;
  e.target.reset();
  renderHome(); renderSleep();
  toast('수면을 기록했어요');
});

function sleepHours(start, end) {
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  let mins = (eh * 60 + em) - (sh * 60 + sm);
  if (mins <= 0) mins += 24 * 60;
  return (mins / 60).toFixed(1);
}

function renderSleep() {
  const ul = $('#list-sleep');
  const items = state.sleep.slice(0, LIMITS.recentSleep);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${sleepHours(it.start, it.end)}시간</span>
        <span class="meta">${fmtDate(it.at)} · ${it.start} ~ ${it.end}</span>
      </div>
      <button class="delete-btn" data-del="sleep" data-id="${it.id}" aria-label="삭제">×</button>
    </li>
  `).join('') : '<li class="empty">아직 수면 기록이 없어요</li>';
}

// ===== InBody =====
$('#form-inbody').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const weight = validNumber(fd.get('weight'), { min: 20, max: 400 });
  if (weight == null) { toast('체중을 20~400kg 사이로 입력해주세요', 'error'); return; }
  const atRaw = fd.get('at');
  if (!atRaw) { toast('측정 일시를 선택해주세요', 'error'); return; }
  const atDate = new Date(atRaw);
  if (isNaN(atDate.getTime())) { toast('측정 일시가 올바르지 않아요', 'error'); return; }
  const at = atDate.toISOString();
  state.inbody.unshift({
    id: uid(), at, weight,
    bmi: validNumber(fd.get('bmi'), { min: 5, max: 80 }),
    smm: validNumber(fd.get('smm'), { min: 0, max: 100 }),
    bfm: validNumber(fd.get('bfm'), { min: 0, max: 200 }),
    bfp: validNumber(fd.get('bfp'), { min: 1, max: 80 }),
    bmr: validNumber(fd.get('bmr'), { min: 500, max: 5000 }),
    note: (fd.get('note') || '').slice(0, 200),
    source: 'manual',
  });
  state.inbody.sort((a, b) => b.at.localeCompare(a.at));
  state.weight.unshift({ id: uid(), kg: weight, at });
  state.weight.sort((a, b) => b.at.localeCompare(a.at));
  if (!save()) return;
  e.target.reset();
  renderHome(); renderWeight(); renderInbody();
  toast('InBody 기록을 저장했어요');
});

const INBODY_COLUMN_MAP = {
  at: ['측정일시', '측정일자', '측정일', 'date', 'datetime', 'test date', 'measurement date', '날짜'],
  weight: ['체중', 'weight', 'wt'],
  bmi: ['bmi', '체질량지수'],
  smm: ['골격근량', 'smm', 'skeletal muscle', 'skeletal muscle mass'],
  bfm: ['체지방량', 'bfm', 'body fat mass'],
  bfp: ['체지방률', 'pbf', 'percent body fat', 'body fat %', 'bf%', '체지방율'],
  bmr: ['기초대사량', 'bmr', 'basal metabolic rate'],
};

function parseCSV(text) {
  const rows = [];
  let cur = '', row = [], inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++; }
        else inQuotes = false;
      } else cur += ch;
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ',') { row.push(cur); cur = ''; }
      else if (ch === '\n') { row.push(cur); rows.push(row); cur = ''; row = []; }
      else if (ch !== '\r') cur += ch;
    }
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  return rows.filter(r => r.some(c => c && c.trim() !== ''));
}

function mapInbodyHeader(headers) {
  const idx = {};
  headers.forEach((h, i) => {
    const norm = String(h || '').trim().toLowerCase();
    for (const [field, keys] of Object.entries(INBODY_COLUMN_MAP)) {
      if (idx[field] != null) continue;
      if (keys.some(k => norm === k.toLowerCase() || norm.includes(k.toLowerCase()))) {
        idx[field] = i;
      }
    }
  });
  return idx;
}

function parseInbodyDate(s) {
  if (!s) return null;
  const trimmed = String(s).trim();
  const d = new Date(trimmed);
  if (!isNaN(d.getTime())) return d.toISOString();
  const m = trimmed.match(/(\d{4})[.\-\/](\d{1,2})[.\-\/](\d{1,2})(?:[ T](\d{1,2}):(\d{2}))?/);
  if (m) {
    const [, y, mo, dy, hh = '0', mi = '0'] = m;
    const d2 = new Date(+y, +mo - 1, +dy, +hh, +mi);
    return isNaN(d2.getTime()) ? null : d2.toISOString();
  }
  return null;
}

function importInbodyCSV(text) {
  const rows = parseCSV(text);
  if (rows.length < 2) return { imported: 0, error: 'CSV에 데이터 행이 없어요' };
  const headers = rows[0];
  const idx = mapInbodyHeader(headers);
  if (idx.at == null && idx.weight == null) {
    return { imported: 0, error: '체중 또는 측정일 컬럼을 찾을 수 없어요' };
  }
  let imported = 0, skipped = 0;
  const seen = new Set(state.inbody.map(r => r.at + '|' + r.weight));
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const at = parseInbodyDate(idx.at != null ? row[idx.at] : null) || new Date().toISOString();
    const weight = idx.weight != null && row[idx.weight] !== '' ? +row[idx.weight] : null;
    if (weight == null || !Number.isFinite(weight) || weight < 20 || weight > 400) { skipped++; continue; }
    const key = at + '|' + weight;
    if (seen.has(key)) { skipped++; continue; }
    seen.add(key);
    const pick = (f) => {
      if (idx[f] == null) return null;
      const v = row[idx[f]];
      if (v === '' || v == null) return null;
      const n = +String(v).replace(/[^\d.\-]/g, '');
      return Number.isFinite(n) ? n : null;
    };
    state.inbody.push({
      id: uid(), at, weight,
      bmi: pick('bmi'), smm: pick('smm'), bfm: pick('bfm'),
      bfp: pick('bfp'), bmr: pick('bmr'),
      note: '', source: 'inbody-csv',
    });
    state.weight.push({ id: uid(), kg: weight, at });
    imported++;
  }
  state.inbody.sort((a, b) => b.at.localeCompare(a.at));
  state.weight.sort((a, b) => b.at.localeCompare(a.at));
  if (!save()) return { imported: 0, error: '저장 실패' };
  return { imported, skipped };
}

$('#inbody-file').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { toast('파일이 너무 큽니다 (최대 5MB)', 'error'); return; }
  try {
    const text = await file.text();
    $('#inbody-csv').value = text;
  } catch (err) {
    toast('파일을 읽지 못했어요', 'error');
  }
});

$('#inbody-import').addEventListener('click', () => {
  const text = $('#inbody-csv').value.trim();
  const out = $('#inbody-import-result');
  if (!text) { out.textContent = 'CSV를 붙여넣거나 파일을 선택해주세요'; return; }
  try {
    const r = importInbodyCSV(text);
    if (r.error) {
      out.textContent = `❌ ${r.error}`;
    } else {
      out.textContent = `✅ ${r.imported}건 가져옴${r.skipped ? `, ${r.skipped}건 건너뜀(중복/오류)` : ''}`;
      $('#inbody-csv').value = '';
      $('#inbody-file').value = '';
      renderHome(); renderWeight(); renderInbody();
    }
  } catch (err) {
    out.textContent = `❌ 파싱 오류: ${err.message}`;
  }
});

function renderInbody() {
  const ul = $('#list-inbody');
  const items = state.inbody.slice(0, LIMITS.recentInbody);
  ul.innerHTML = items.length ? items.map(it => `
    <li>
      <div class="item-main">
        <span class="item-title">${it.weight ?? '-'} kg ${it.bmi != null ? `· BMI ${it.bmi}` : ''}</span>
        <span class="meta">${fmtDate(it.at)} ${fmtTime(it.at)}${it.source === 'inbody-csv' ? ' · InBody' : ''}</span>
        <div class="inbody-stats">
          ${it.smm != null ? `<span>골격근 <strong>${it.smm}kg</strong></span>` : ''}
          ${it.bfm != null ? `<span>체지방 <strong>${it.bfm}kg</strong></span>` : ''}
          ${it.bfp != null ? `<span>체지방률 <strong>${it.bfp}%</strong></span>` : ''}
          ${it.bmr != null ? `<span>기초대사 <strong>${it.bmr}kcal</strong></span>` : ''}
        </div>
      </div>
      <button class="delete-btn" data-del="inbody" data-id="${it.id}" aria-label="삭제">×</button>
    </li>
  `).join('') : '<li class="empty">InBody 기록이 없어요. 수동 입력하거나 CSV를 가져와보세요</li>';
}

// ===== Water =====
$('#water-plus').addEventListener('click', () => addWater(1));
$('#water-minus').addEventListener('click', () => addWater(-1));
function addWater(delta) {
  const k = todayKey();
  const next = Math.max(0, Math.min(LIMITS.waterMax, (state.water[k] || 0) + delta));
  if (next === (state.water[k] || 0)) return;
  state.water[k] = next;
  if (!save()) return;
  renderHome(); renderBody();
}

// ===== Medications =====
$('#form-med').addEventListener('submit', async (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = (fd.get('name') || '').trim().slice(0, 50);
  const time = fd.get('time');
  if (!name) { toast('약 이름을 입력해주세요', 'error'); return; }
  if (!time || !/^\d{2}:\d{2}$/.test(time)) { toast('복용 시각을 입력해주세요', 'error'); return; }
  if (state.meds.some(m => m.name === name && m.time === time)) {
    toast('같은 이름·시각의 약이 이미 등록되어 있어요', 'error');
    return;
  }
  const notify = fd.get('notify') === 'on';
  state.meds.push({ id: uid(), name, time, notify });
  state.meds.sort((a, b) => a.time.localeCompare(b.time));
  if (!save()) return;
  e.target.reset();
  $('#m-notify').checked = true;
  renderHome(); renderMeds();
  // 알림 켜기 선택했는데 권한 없으면 즉시 요청
  if (notify && 'Notification' in window && Notification.permission === 'default') {
    const p = await Notification.requestPermission();
    if (p !== 'granted') toast('알림 권한이 거부됐어요. 시각이 되어도 알림이 오지 않아요.', 'error');
  }
  checkNotifyBanner();
  toast('복약을 등록했어요');
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
      <button class="check ${log[m.id] ? 'done' : ''}" data-check="${m.id}" aria-label="${log[m.id] ? '복용함' : '복용 안함'}" aria-pressed="${!!log[m.id]}">${log[m.id] ? '✓' : ''}</button>
      <button class="delete-btn" data-del="meds" data-id="${m.id}" aria-label="삭제">×</button>
    </li>
  `).join('') : '<li class="empty">등록된 약이 없어요</li>';
}

function checkNotifyBanner() {
  const banner = $('#notify-banner');
  const anyNotify = state.meds.some(m => m.notify);
  const shouldShow = anyNotify && ('Notification' in window) && Notification.permission !== 'granted';
  banner.hidden = !shouldShow;
}

$('#enable-notify').addEventListener('click', async () => {
  if (!('Notification' in window)) {
    toast('이 브라우저는 알림을 지원하지 않아요', 'error');
    return;
  }
  const perm = await Notification.requestPermission();
  toast(perm === 'granted' ? '알림이 활성화됐어요' : '알림 권한이 거부됐어요', perm === 'granted' ? 'info' : 'error');
  checkNotifyBanner();
});

// 매 30초 체크: 약별로 하루 한 번만 알림
const notifiedTags = new Set();
setInterval(checkMedReminders, LIMITS.medPollMs);
function checkMedReminders() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const now = new Date();
  const k = todayKey();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  state.meds.forEach(m => {
    if (!m.notify) return;
    const [hh, mi] = m.time.split(':').map(Number);
    if (!Number.isFinite(hh) || !Number.isFinite(mi)) return;
    const medMin = hh * 60 + mi;
    if (nowMin < medMin) return;
    if (nowMin - medMin > 10) return; // 10분 이상 지난 건 알림 스킵
    if (state.medLog[k]?.[m.id]) return;
    const tag = `${k}-${m.id}`;
    if (notifiedTags.has(tag)) return;
    notifiedTags.add(tag);
    try {
      new Notification('💊 복약 알림', { body: `${m.name} 복용 시간이에요`, tag, renotify: false });
    } catch (e) { /* ignore */ }
  });
}

// 자정에 알림 태그 리셋
setInterval(() => {
  const k = todayKey();
  for (const tag of [...notifiedTags]) {
    if (!tag.startsWith(k + '-')) notifiedTags.delete(tag);
  }
}, 60 * 60 * 1000);

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
  $('#water-goal').textContent = LIMITS.waterGoal;

  $('#summary-exercise').textContent = `${todayExercise.length}회`;
  $('#summary-meals').textContent = `${todayDiet.length}회`;
  $('#summary-weight').textContent = state.weight[0] ? `${state.weight[0].kg} kg` : '기록 없음';
  const ySleep = state.sleep.find(s => localDateKey(new Date(s.at)) === yk);
  $('#summary-sleep').textContent = ySleep ? `${sleepHours(ySleep.start, ySleep.end)}시간` : '기록 없음';

  const log = state.medLog[k] || {};
  const taken = state.meds.filter(m => log[m.id]).length;
  $('#summary-meds').textContent = `${taken}/${state.meds.length}`;
}

function renderBody() {
  $('#water-count').textContent = state.water[todayKey()] || 0;
  // datetime-local 기본값을 현재로 (InBody 폼)
  const ibAt = $('#ib-at');
  if (ibAt && !ibAt.value) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    ibAt.value = now.toISOString().slice(0, 16);
  }
}

// ===== Event delegation =====
document.addEventListener('click', async (e) => {
  const delBtn = e.target.closest('[data-del]');
  if (delBtn) {
    const list = delBtn.dataset.del;
    const id = delBtn.dataset.id;
    const ok = await confirmDialog('삭제할까요?', '이 기록을 영구적으로 삭제합니다.');
    if (!ok) return;
    state[list] = state[list].filter(x => x.id !== id);
    if (!save()) return;
    renderViewFor(getCurrentTab());
    toast('삭제했어요');
    return;
  }
  const check = e.target.closest('[data-check]');
  if (check) {
    const id = check.dataset.check;
    const k = todayKey();
    state.medLog[k] = state.medLog[k] || {};
    state.medLog[k][id] = !state.medLog[k][id];
    if (!save()) return;
    renderHome(); renderMeds();
    return;
  }
  const quick = e.target.closest('[data-quick]');
  if (quick) {
    const action = quick.dataset.quick;
    if (action === 'water') { addWater(1); }
    else if (action === 'exercise') switchTab('exercise');
    else if (action === 'meal') switchTab('diet');
    else if (action === 'weight') switchTab('body', { scrollTo: 'form-weight' });
  }
});

function getCurrentTab() {
  const active = $$('.tab').find(t => t.classList.contains('active'));
  return active ? active.dataset.tab : 'home';
}

// ===== PWA install =====
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
window.addEventListener('appinstalled', () => {
  $('#install-btn').hidden = true;
  toast('앱이 설치됐어요 🎉');
});

// ===== Service worker + update detection =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            toast('새 버전이 준비됐어요. 새로고침하면 적용됩니다.');
          }
        });
      });
    } catch (e) { /* ignore */ }
  });
}

// ===== Resize debounce =====
window.addEventListener('resize', debounce(drawWeightChart, 150));

// ===== Init =====
renderHome();
renderViewFor(getCurrentTab());
checkNotifyBanner();
