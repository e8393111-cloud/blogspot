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
  steps: {},       // { 'YYYY-MM-DD': stepCount }
  inbody: [],      // {id, at, weight, smm, bfm, bfp, bmi, bmr, note, source}
  profile: {},     // {sex, age, heightCm, activityLevel}
  goal: {},        // {targetKg, targetDate}
  gemini: { apiKey: '', chatHistory: [] },
  // Bump and add a migration block in load() when making breaking schema changes.
  schemaVersion: 3,
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
    const appRoot = $('#app');
    const previouslyFocused = document.activeElement;
    $('#modal-title').textContent = title;
    $('#modal-body').textContent = body;
    modal.hidden = false;
    appRoot.setAttribute('aria-hidden', 'true');
    const focusables = [$('#modal-cancel'), $('#modal-confirm')];
    const cleanup = (result) => {
      modal.hidden = true;
      appRoot.removeAttribute('aria-hidden');
      $('#modal-confirm').removeEventListener('click', onConfirm);
      $('#modal-cancel').removeEventListener('click', onCancel);
      modal.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onKey);
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        try { previouslyFocused.focus(); } catch {}
      }
      resolve(result);
    };
    const onConfirm = () => cleanup(true);
    const onCancel = () => cleanup(false);
    const onBackdrop = (e) => { if (e.target === modal) cleanup(false); };
    const onKey = (e) => {
      if (e.key === 'Escape') { cleanup(false); return; }
      if (e.key !== 'Tab') return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
      else if (!modal.contains(active)) { e.preventDefault(); first.focus(); }
    };
    $('#modal-confirm').addEventListener('click', onConfirm);
    $('#modal-cancel').addEventListener('click', onCancel);
    modal.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onKey);
    setTimeout(() => $('#modal-confirm').focus(), 0);
  });
}

// ===== Tabs =====
const titleMap = { home: '홈', exercise: '운동', diet: '식단', body: '몸 관리', meds: '복약', ai: 'AI 코치' };
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
  if (name === 'body') { renderHome(); renderWeight(); renderSleep(); renderBody(); renderInbody(); renderSteps(); renderProfile(); return; }
  if (name === 'meds') { renderHome(); renderMeds(); checkNotifyBanner(); return; }
  if (name === 'ai') { renderAI(); return; }
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

// Exercise AI calorie estimation
let exAiPending = false;
let exKcalIsAI = false; // tracks whether #ex-kcal was last set by AI vs user
$('#ex-kcal').addEventListener('input', () => { exKcalIsAI = false; });
$('#form-exercise').addEventListener('reset', () => { exKcalIsAI = false; });
$('#ex-ai-estimate').addEventListener('click', async () => {
  if (exAiPending) { toast('이미 추정 중이에요', 'error'); return; }
  const type = $('#ex-type').value;
  const minutes = +$('#ex-minutes').value;
  if (!minutes || minutes < 1) { toast('먼저 시간을 입력해주세요', 'error'); return; }
  if (!getApiKey()) {
    toast('AI 탭에서 Gemini API 키를 먼저 설정해주세요', 'error');
    switchTab('ai');
    return;
  }
  const btn = $('#ex-ai-estimate');
  exAiPending = true;
  btn.disabled = true;
  const origText = btn.textContent;
  btn.textContent = '⏳ 추정 중...';
  const recentWeight = state.weight[0]?.kg;
  try {
    const prompt = `한국 성인 기준 다음 운동의 소모 칼로리를 추정해줘.
운동: ${type}
시간: ${minutes}분
${recentWeight ? `체중: ${recentWeight}kg` : '체중: 모름 (평균 70kg 가정)'}
다음 JSON 형식으로만 답변 (다른 설명/마크다운 금지):
{"kcal":추정칼로리숫자,"intensity":"light|moderate|vigorous","note":"한 줄 근거 (MET 등)"}`;
    const text = await geminiGenerate({ prompt, json: true });
    const obj = safeJSONParse(text);
    if (!obj || obj.kcal == null) throw new Error('응답을 해석하지 못했어요');
    const kcalRounded = Math.round(obj.kcal);
    // Race guard: user may have typed kcal during the await — don't overwrite.
    if ($('#ex-kcal').value) {
      toast(`(AI 추정값 ${kcalRounded}kcal은 무시됐어요)`);
    } else {
      $('#ex-kcal').value = kcalRounded;
      exKcalIsAI = true;
      const intensityLabel = { light: '가벼움', moderate: '보통', vigorous: '격렬' }[obj.intensity] || '';
      toast(`${type} ${minutes}분: ${kcalRounded}kcal${intensityLabel ? ` (${intensityLabel})` : ''}`);
    }
  } catch (err) {
    toast(`추정 실패: ${err.message}`, 'error');
  } finally {
    exAiPending = false;
    btn.disabled = false;
    btn.textContent = origText;
  }
});

// Exercise: auto-estimate when type+minutes are set and field is blurred
let lastEstimatedExercise = '';
function tryAutoExercise() {
  if (exAiPending) return;
  const type = $('#ex-type').value;
  const minutes = +$('#ex-minutes').value;
  if (!minutes || minutes < 1) return;
  const key = `${type}-${minutes}`;
  if (key === lastEstimatedExercise) return;
  if (!getApiKey()) return; // silent: no key configured
  // If kcal is filled by user, preserve it. If filled by previous AI run, replace it.
  if ($('#ex-kcal').value) {
    if (!exKcalIsAI) return;
    $('#ex-kcal').value = '';
    exKcalIsAI = false;
  }
  lastEstimatedExercise = key;
  $('#ex-ai-estimate').click();
}
$('#ex-minutes').addEventListener('blur', tryAutoExercise);
$('#ex-type').addEventListener('change', () => {
  lastEstimatedExercise = ''; // invalidate cache when user changes type
  tryAutoExercise();
});

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

// ===== Diet goal math =====
const ACTIVITY_MULT = {
  sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9,
};
const KCAL_PER_KG_FAT = 7700;

function calculateBMR(sex, weightKg, heightCm, age) {
  // Mifflin-St Jeor
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return sex === 'female' ? base - 161 : base + 5;
}

function dietContext() {
  // Returns { profile, goal, currentWeight, bmr, tdee, dailyDeficit, dailyTarget, daysToTarget }
  // or null if profile/weight insufficient.
  const p = state.profile || {};
  const g = state.goal || {};
  const currentWeight = state.weight[0]?.kg;
  if (!p.sex || !p.age || !p.heightCm || !currentWeight) return null;
  const bmr = calculateBMR(p.sex, currentWeight, p.heightCm, +p.age);
  const tdee = bmr * (ACTIVITY_MULT[p.activityLevel] || ACTIVITY_MULT.moderate);
  let dailyDeficit = null, dailyTarget = null, daysToTarget = null;
  if (g.targetKg && g.targetDate) {
    const kgToLose = currentWeight - +g.targetKg;
    const today = new Date(todayKey()).getTime();
    const target = new Date(g.targetDate).getTime();
    daysToTarget = Math.max(1, Math.round((target - today) / 86400000));
    if (kgToLose > 0) {
      dailyDeficit = (kgToLose * KCAL_PER_KG_FAT) / daysToTarget;
      dailyTarget = Math.round(tdee - dailyDeficit);
    }
  }
  return { profile: p, goal: g, currentWeight, bmr: Math.round(bmr), tdee: Math.round(tdee), dailyDeficit, dailyTarget, daysToTarget };
}

function todayDeficit(caloriesIn, caloriesOut, tdee) {
  // Positive = burned more than ate today (good for losing).
  return (tdee + caloriesOut) - caloriesIn;
}

// ----- Profile / Goal form -----
$('#form-profile').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const sex = fd.get('sex');
  const age = +fd.get('age');
  const heightCm = +fd.get('heightCm');
  const activityLevel = fd.get('activityLevel') || 'moderate';
  if (!sex || !(age >= 10 && age <= 120) || !(heightCm >= 100 && heightCm <= 250)) {
    toast('성별, 나이(10~120), 키(100~250) 모두 입력해주세요', 'error');
    return;
  }
  state.profile = { sex, age, heightCm, activityLevel };
  const targetKg = +fd.get('targetKg');
  const targetDate = fd.get('targetDate');
  if (targetKg && targetDate) {
    if (!(targetKg >= 20 && targetKg <= 400)) { toast('목표 체중을 20~400 사이로', 'error'); return; }
    state.goal = { targetKg, targetDate };
  } else {
    state.goal = {};
  }
  if (!save()) return;
  renderProfile();
  renderHome();
  drawWeightChart();
  toast('저장됐어요');
});

function renderProfile() {
  const p = state.profile || {}, g = state.goal || {};
  if (p.sex) $('#pf-sex').value = p.sex;
  if (p.age) $('#pf-age').value = p.age;
  if (p.heightCm) $('#pf-height').value = p.heightCm;
  if (p.activityLevel) $('#pf-activity').value = p.activityLevel;
  if (g.targetKg) $('#pf-target-kg').value = g.targetKg;
  if (g.targetDate) $('#pf-target-date').value = g.targetDate;

  const out = $('#pf-summary');
  const ctx = dietContext();
  if (!ctx) {
    out.innerHTML = '<span class="hint">프로필을 모두 입력하고 체중을 한 번 기록하면 일일 칼로리 목표가 계산돼요.</span>';
    return;
  }
  const lines = [];
  lines.push(`<div><strong>기초대사량(BMR):</strong> ${ctx.bmr} kcal</div>`);
  lines.push(`<div><strong>총 소비량(TDEE):</strong> ${ctx.tdee} kcal/일</div>`);
  if (ctx.dailyTarget != null) {
    const dd = Math.round(ctx.dailyDeficit);
    let safety = '';
    if (dd > 1000) safety = ' <span class="warn">⚠️ 너무 공격적이에요 (하루 1000kcal 초과). 기한을 늘리세요.</span>';
    else if (dd > 750) safety = ' <span class="warn">⚠️ 다소 공격적 (주 0.7kg 이상)</span>';
    lines.push(`<div><strong>일일 섭취 목표:</strong> ${ctx.dailyTarget} kcal (적자 ${dd}/일)${safety}</div>`);
    lines.push(`<div><strong>예상 페이스:</strong> 주 -${((ctx.dailyDeficit * 7) / KCAL_PER_KG_FAT).toFixed(2)} kg</div>`);
    lines.push(`<div><strong>D-${ctx.daysToTarget}일</strong> 까지 ${ctx.currentWeight}kg → ${ctx.goal.targetKg}kg</div>`);
  } else if (ctx.goal?.targetKg && ctx.goal?.targetDate) {
    lines.push('<div class="warn">목표 체중이 현재 체중 이상이에요. 감량 도구입니다.</div>');
  } else {
    lines.push('<div class="hint">목표 체중·날짜도 입력하면 일일 칼로리 목표가 자동 계산돼요.</div>');
  }
  out.innerHTML = lines.join('');
}

// ===== Steps =====
function estimateStepsKcal(steps, weightKg) {
  // Rough: 60kg basis ~30 kcal per 1000 steps. Scale linearly by weight.
  const w = weightKg && weightKg > 30 ? weightKg : 60;
  return Math.round(steps * 0.03 * (w / 60));
}
function estimateStepsKm(steps) {
  // Average stride ~0.76 m
  return +(steps * 0.00076).toFixed(2);
}

$('#form-steps').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const date = fd.get('date');
  const count = validNumber(fd.get('count'), { min: 1, max: 200000 });
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) { toast('날짜를 선택해주세요', 'error'); return; }
  if (count == null) { toast('걸음수를 1~200000 사이로 입력해주세요', 'error'); return; }
  const overwriting = date in state.steps;
  state.steps[date] = count;
  if (!save()) return;
  e.target.reset();
  $('#st-date').value = todayKey();
  renderHome(); renderSteps();
  toast(overwriting ? `${date} 걸음수 덮어썼어요` : `${date} 걸음수 저장됨`);
});

function renderSteps() {
  const dateInput = $('#st-date');
  if (dateInput && !dateInput.value) dateInput.value = todayKey();
  const ul = $('#list-steps');
  const entries = Object.entries(state.steps)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .slice(0, 14);
  const recentWeight = state.weight[0]?.kg;
  ul.innerHTML = entries.length ? entries.map(([date, count]) => {
    const km = estimateStepsKm(count);
    const kcal = estimateStepsKcal(count, recentWeight);
    return `
      <li>
        <div class="item-main">
          <span class="item-title">${count.toLocaleString()}걸음</span>
          <span class="meta">${escapeHtml(date)} · ${km}km · 약 ${kcal}kcal${recentWeight ? ' (현재 체중 기준)' : ' (체중 미설정, 70kg 기준)'}</span>
        </div>
        <button class="delete-btn" data-del-steps="${escapeHtml(date)}" aria-label="삭제">×</button>
      </li>
    `;
  }).join('') : '<li class="empty">아직 걸음수 기록이 없어요</li>';
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

  const goalKg = state.goal?.targetKg;
  const vals = data.map(d => d.kg);
  if (goalKg) vals.push(goalKg);
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

  // Goal line + ETA overlay
  if (goalKg && goalKg >= min && goalKg <= max) {
    const gy = h - pad - (goalKg - min) * yScale;
    ctx.strokeStyle = '#ef4444';
    ctx.setLineDash([6, 4]);
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(pad, gy); ctx.lineTo(w - pad, gy); ctx.stroke();
    ctx.setLineDash([]);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(`목표 ${goalKg}kg`, pad + 4, gy - 4);
  }

  // ETA from linear regression of recent points
  if (goalKg && data.length >= 3) {
    const start = new Date(data[0].at).getTime();
    const pts = data.map(d => ({ x: (new Date(d.at).getTime() - start) / 86400000, y: d.kg }));
    const n = pts.length;
    const sx = pts.reduce((a, p) => a + p.x, 0);
    const sy = pts.reduce((a, p) => a + p.y, 0);
    const sxy = pts.reduce((a, p) => a + p.x * p.y, 0);
    const sxx = pts.reduce((a, p) => a + p.x * p.x, 0);
    const denom = (n * sxx - sx * sx);
    if (denom !== 0) {
      const slope = (n * sxy - sx * sy) / denom;
      const intercept = (sy - slope * sx) / n;
      const todayX = (Date.now() - start) / 86400000;
      const currentTrend = slope * todayX + intercept;
      ctx.textAlign = 'right';
      ctx.fillStyle = labelColor;
      ctx.font = '10px sans-serif';
      if (slope >= -0.001) {
        ctx.fillText('현 페이스: 정체/증가', w - pad, h - pad + 16);
      } else {
        const daysToTarget = (currentTrend - goalKg) / -slope;
        if (daysToTarget > 0 && daysToTarget < 3650) {
          const etaDate = new Date(Date.now() + daysToTarget * 86400000);
          const etaStr = etaDate.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
          ctx.fillText(`현 페이스 → ${etaStr} 도달 예상`, w - pad, h - pad + 16);
        }
      }
    }
  }
}

// ===== Sleep =====
$('#form-sleep').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const start = fd.get('sleepStart'), end = fd.get('sleepEnd');
  if (!start || !end) { toast('잠든 시각과 일어난 시각을 모두 입력해주세요', 'error'); return; }
  if (start === end) { toast('잠든 시각과 일어난 시각이 같아요', 'error'); return; }
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

  // Diet deficit card
  const ctx = dietContext();
  const heroDeficit = $('#hero-deficit');
  if (ctx && ctx.dailyDeficit != null) {
    const actualDeficit = todayDeficit(caloriesIn, caloriesOut, ctx.tdee);
    const targetDeficit = ctx.dailyDeficit;
    $('#hero-deficit-value').textContent = `${actualDeficit >= 0 ? '−' : '+'}${Math.abs(Math.round(actualDeficit))}`;
    const pct = Math.max(0, Math.min(100, (actualDeficit / targetDeficit) * 100));
    $('#hero-deficit-bar').style.width = `${pct}%`;
    const remaining = Math.round(targetDeficit - actualDeficit);
    let targetText;
    if (actualDeficit >= targetDeficit) {
      targetText = `🎉 목표 달성! (목표 −${Math.round(targetDeficit)})`;
    } else if (actualDeficit > 0) {
      targetText = `목표 −${Math.round(targetDeficit)} · ${remaining}kcal 부족`;
    } else {
      targetText = `목표 −${Math.round(targetDeficit)} · ${Math.abs(remaining)}kcal 초과 섭취 중`;
    }
    $('#hero-deficit-target').textContent = targetText;
    heroDeficit.hidden = false;
    heroDeficit.classList.toggle('positive', actualDeficit >= 0);
    heroDeficit.classList.toggle('hit', actualDeficit >= targetDeficit);
  } else {
    heroDeficit.hidden = true;
  }

  $('#summary-exercise').textContent = `${todayExercise.length}회`;
  $('#summary-meals').textContent = `${todayDiet.length}회`;
  const todaySteps = state.steps[k];
  $('#summary-steps').textContent = todaySteps != null ? `${todaySteps.toLocaleString()}걸음` : '기록 없음';
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
  const delSteps = e.target.closest('[data-del-steps]');
  if (delSteps) {
    const date = delSteps.dataset.delSteps;
    const ok = await confirmDialog('삭제할까요?', `${date} 걸음수 기록을 삭제합니다.`);
    if (!ok) return;
    delete state.steps[date];
    if (!save()) return;
    renderHome(); renderSteps();
    toast('삭제했어요');
    return;
  }
  const delBtn = e.target.closest('[data-del]');
  if (delBtn) {
    const list = delBtn.dataset.del;
    const id = delBtn.dataset.id;
    const ok = await confirmDialog('삭제할까요?', '이 기록을 영구적으로 삭제합니다.');
    if (!ok) return;
    if (list === 'inbody') {
      const ib = state.inbody.find(x => x.id === id);
      if (ib) {
        state.weight = state.weight.filter(w => !(w.at === ib.at && w.kg === ib.weight));
      }
    }
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

// ===== AI: Gemini =====
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const GEMINI_TIMEOUT_MS = 30000;
const CHAT_HISTORY_MAX = 20;
let chatHistory = (state.gemini?.chatHistory || []).slice(-CHAT_HISTORY_MAX);
let chatPending = false;
let photoPending = false;

function getApiKey() {
  return (state.gemini?.apiKey || '').trim();
}

function persistChatHistory() {
  state.gemini.chatHistory = chatHistory.slice(-CHAT_HISTORY_MAX);
  save();
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = () => reject(new Error('파일을 읽지 못했어요'));
    r.readAsDataURL(file);
  });
}

async function geminiGenerate({ prompt, imageDataUrl, history = [], systemInstruction, json = false }) {
  const key = getApiKey();
  if (!key) throw new Error('Gemini API 키를 먼저 설정해주세요 (AI 탭)');

  const userParts = [];
  if (imageDataUrl) {
    const m = imageDataUrl.match(/^data:(.+?);base64,(.+)$/);
    if (!m) throw new Error('이미지 형식을 처리할 수 없어요');
    userParts.push({ inlineData: { mimeType: m[1], data: m[2] } });
  }
  if (prompt) userParts.push({ text: prompt });

  const body = {
    contents: [...history, { role: 'user', parts: userParts }],
    generationConfig: json ? { responseMimeType: 'application/json', temperature: 0.2 } : { temperature: 0.6 },
  };
  if (systemInstruction) body.systemInstruction = { parts: [{ text: systemInstruction }] };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);
  let res;
  try {
    res = await fetch(`${GEMINI_ENDPOINT}?key=${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('응답이 너무 오래 걸려요 (30초 초과). 잠시 후 다시 시도해주세요.');
    throw new Error(`네트워크 오류: ${err.message}`);
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) {
    if (res.status === 429) throw new Error('요청이 너무 많아요. 무료 한도를 초과했을 수 있어요. 잠시 후 다시 시도해주세요.');
    if (res.status === 400) throw new Error('API 키가 올바르지 않거나 요청 형식 오류예요.');
    if (res.status === 403) throw new Error('API 키 권한이 없거나 사용량이 차단됐어요.');
    const errText = await res.text().catch(() => '');
    let msg = `API 오류 (${res.status})`;
    try {
      const errJson = JSON.parse(errText);
      if (errJson?.error?.message) msg = errJson.error.message;
    } catch { msg = errText.slice(0, 200) || msg; }
    throw new Error(msg);
  }
  const data = await res.json();
  const candidate = data?.candidates?.[0];
  if (!candidate) throw new Error('AI 응답이 비어있어요');
  if (candidate.finishReason === 'SAFETY') throw new Error('안전 필터에 의해 차단됐어요');
  const text = (candidate.content?.parts || []).map(p => p.text).filter(Boolean).join('');
  if (!text) throw new Error('AI가 빈 응답을 반환했어요');
  return text;
}

function safeJSONParse(text) {
  try { return JSON.parse(text); } catch {}
  const m = text.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch {} }
  return null;
}

// ----- AI: API key UI -----
function renderAI() {
  const input = $('#ai-key');
  if (!getApiKey()) {
    input.value = '';
    $('#ai-key-status').textContent = '아직 키가 설정되지 않았어요.';
  } else {
    input.value = getApiKey();
    $('#ai-key-status').textContent = '✅ 키가 저장되어 있어요.';
  }
  renderChatLog();
}

$('#ai-key-save').addEventListener('click', () => {
  const v = $('#ai-key').value.trim();
  if (!v) { toast('API 키를 입력해주세요', 'error'); return; }
  if (!/^AIza[\w-]{20,}$/.test(v)) {
    toast('Gemini 키 형식이 아닌 것 같아요 (AIza... 로 시작)', 'error');
    return;
  }
  state.gemini.apiKey = v;
  if (!save()) return;
  $('#ai-key-status').textContent = '✅ 저장됐어요.';
  toast('API 키를 저장했어요');
});

$('#ai-key-clear').addEventListener('click', async () => {
  if (!getApiKey()) return;
  const ok = await confirmDialog('API 키 삭제', '저장된 Gemini API 키를 삭제할까요? AI 기능이 작동하지 않게 됩니다.');
  if (!ok) return;
  state.gemini.apiKey = '';
  if (!save()) return;
  $('#ai-key').value = '';
  $('#ai-key-status').textContent = '키가 삭제됐어요.';
  toast('키를 삭제했어요');
});

// ----- AI: Food photo analysis -----
$('#d-photo').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  if (photoPending) { toast('이미 분석 중이에요', 'error'); return; }
  if (file.size > 8 * 1024 * 1024) { toast('이미지가 너무 커요 (최대 8MB)', 'error'); return; }
  if (!getApiKey()) {
    toast('AI 탭에서 Gemini API 키를 먼저 설정해주세요', 'error');
    switchTab('ai');
    return;
  }
  const status = $('#d-photo-status');
  const label = $('#d-photo-label');
  status.textContent = '⏳ 사진 분석 중...';
  photoPending = true;
  label.setAttribute('aria-disabled', 'true');
  label.style.pointerEvents = 'none';
  label.style.opacity = '0.6';
  try {
    const dataUrl = await readFileAsDataURL(file);
    const prompt = `이 사진의 음식을 한국 식품 영양 기준으로 분석해줘.
다음 JSON 형식으로만 답변 (다른 설명/마크다운 금지):
{"food":"음식 이름(한글, 가장 대표적인 것 1개)","portion":"추정 분량 (예: 1인분, 200g)","kcal":추정칼로리숫자,"confidence":"high|medium|low","note":"추가 메모 또는 추정 근거 (한 문장)"}`;
    const text = await geminiGenerate({ prompt, imageDataUrl: dataUrl, json: true });
    const obj = safeJSONParse(text);
    if (!obj || !obj.food || !obj.kcal) {
      throw new Error('응답을 해석하지 못했어요');
    }
    $('#d-food').value = obj.food;
    $('#d-kcal').value = Math.round(obj.kcal);
    const conf = { high: '✅ 신뢰도 높음', medium: '⚠️ 신뢰도 보통', low: '⚠️ 신뢰도 낮음' }[obj.confidence] || '';
    status.textContent = `${obj.food} · ${obj.kcal}kcal (${obj.portion || '-'}) ${conf}${obj.note ? '\n💡 ' + obj.note : ''}`;
  } catch (err) {
    status.textContent = `❌ ${err.message}`;
    toast(err.message, 'error');
  } finally {
    photoPending = false;
    label.removeAttribute('aria-disabled');
    label.style.pointerEvents = '';
    label.style.opacity = '';
  }
});

// ----- AI: Food text calorie estimation -----
let foodAiPending = false;
let foodKcalIsAI = false; // tracks whether #d-kcal was last set by AI vs user
$('#d-kcal').addEventListener('input', () => { foodKcalIsAI = false; });
$('#form-diet').addEventListener('reset', () => { foodKcalIsAI = false; });
$('#d-ai-estimate').addEventListener('click', async () => {
  if (foodAiPending) { toast('이미 추정 중이에요', 'error'); return; }
  const food = $('#d-food').value.trim();
  if (!food) { toast('먼저 음식 이름을 입력해주세요', 'error'); return; }
  if (!getApiKey()) {
    toast('AI 탭에서 Gemini API 키를 먼저 설정해주세요', 'error');
    switchTab('ai');
    return;
  }
  const btn = $('#d-ai-estimate');
  foodAiPending = true;
  btn.disabled = true;
  const origText = btn.textContent;
  btn.textContent = '⏳ 추정 중...';
  try {
    const prompt = `다음 한국 음식의 1인분 기준 칼로리를 추정해줘.
음식: "${food}"
다음 JSON 형식으로만 답변 (다른 설명/마크다운 금지):
{"food":"정규화된 한글 이름","kcal":추정칼로리숫자,"portion":"기준 분량","confidence":"high|medium|low"}`;
    const text = await geminiGenerate({ prompt, json: true });
    const obj = safeJSONParse(text);
    if (!obj || !obj.kcal) throw new Error('응답을 해석하지 못했어요');
    const kcalRounded = Math.round(obj.kcal);
    // Race guard: user may have typed kcal during the await — don't overwrite.
    if ($('#d-kcal').value) {
      toast(`(AI 추정값 ${kcalRounded}kcal은 무시됐어요)`);
    } else {
      if (obj.food && obj.food !== food) $('#d-food').value = obj.food;
      $('#d-kcal').value = kcalRounded;
      foodKcalIsAI = true;
      toast(`${obj.food || food}: ${kcalRounded}kcal (${obj.portion || '1인분'})`);
    }
  } catch (err) {
    toast(`추정 실패: ${err.message}`, 'error');
  } finally {
    foodAiPending = false;
    btn.disabled = false;
    btn.textContent = origText;
  }
});

// Food: auto-estimate on blur if conditions met
let lastEstimatedFood = '';
$('#d-food').addEventListener('input', () => {
  if (!$('#d-food').value.trim()) lastEstimatedFood = '';
});
$('#d-food').addEventListener('blur', () => {
  if (foodAiPending) return;
  const food = $('#d-food').value.trim();
  if (!food || food === lastEstimatedFood) return;
  if (!getApiKey()) return; // silent: no key configured
  // If kcal is filled by user, preserve. If by previous AI run, replace.
  if ($('#d-kcal').value) {
    if (!foodKcalIsAI) return;
    $('#d-kcal').value = '';
    foodKcalIsAI = false;
  }
  lastEstimatedFood = food;
  $('#d-ai-estimate').click();
});

// ----- AI: Build recent context for chat/report -----
function buildRecentContext(days = 7) {
  const now = new Date();
  const startMs = now.getTime() - days * 24 * 60 * 60 * 1000;
  const inRange = (iso) => new Date(iso).getTime() >= startMs;

  const dailyKeys = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now); d.setDate(d.getDate() - i);
    dailyKeys.push(localDateKey(d));
  }

  const dailyAgg = {};
  dailyKeys.forEach(k => { dailyAgg[k] = { caloriesIn: 0, caloriesOut: 0, meals: 0, exerciseMin: 0, water: state.water[k] || 0, steps: state.steps[k] || 0, medsTaken: 0, medsTotal: state.meds.length }; });

  state.diet.filter(d => inRange(d.at)).forEach(d => {
    const k = localDateKey(new Date(d.at));
    if (dailyAgg[k]) { dailyAgg[k].caloriesIn += d.kcal || 0; dailyAgg[k].meals++; }
  });
  state.exercise.filter(e => inRange(e.at)).forEach(e => {
    const k = localDateKey(new Date(e.at));
    if (dailyAgg[k]) { dailyAgg[k].caloriesOut += e.kcal || 0; dailyAgg[k].exerciseMin += e.minutes || 0; }
  });
  state.sleep.filter(s => inRange(s.at)).forEach(s => {
    const k = localDateKey(new Date(s.at));
    if (dailyAgg[k]) dailyAgg[k].sleepHours = +sleepHours(s.start, s.end);
  });
  Object.keys(state.medLog).forEach(k => {
    if (dailyAgg[k]) dailyAgg[k].medsTaken = Object.values(state.medLog[k]).filter(Boolean).length;
  });

  const recentWeight = state.weight.filter(w => inRange(w.at)).slice(0, 14)
    .map(w => ({ date: localDateKey(new Date(w.at)), kg: w.kg }));
  const recentInbody = state.inbody.slice(0, 3).map(i => ({
    date: localDateKey(new Date(i.at)),
    weight: i.weight, bmi: i.bmi, smm: i.smm, bfp: i.bfp, bmr: i.bmr,
  }));

  const dctx = dietContext();
  // Per-day deficit if TDEE is known, plus weekly aggregates
  if (dctx) {
    Object.keys(dailyAgg).forEach(k => {
      const d = dailyAgg[k];
      d.netDeficit = Math.round((dctx.tdee + (d.caloriesOut || 0)) - (d.caloriesIn || 0));
    });
  }
  return {
    today: todayKey(),
    period: `최근 ${days}일`,
    daily: dailyAgg,
    recentWeight,
    recentInbody,
    meds: state.meds.map(m => ({ name: m.name, time: m.time })),
    waterGoal: LIMITS.waterGoal,
    profile: state.profile?.sex ? state.profile : null,
    goal: state.goal?.targetKg ? state.goal : null,
    computed: dctx ? {
      bmr: dctx.bmr,
      tdee: dctx.tdee,
      dailyDeficitTarget: dctx.dailyDeficit ? Math.round(dctx.dailyDeficit) : null,
      dailyIntakeTarget: dctx.dailyTarget,
      daysToTarget: dctx.daysToTarget,
      kgToLose: dctx.goal?.targetKg ? +(dctx.currentWeight - dctx.goal.targetKg).toFixed(1) : null,
    } : null,
  };
}

const COACH_SYSTEM = `당신은 따뜻하고 실용적인 한국어 다이어트 코치입니다. 사용자는 체중 감량이 목표입니다.
- 컨텍스트의 profile(키/나이/성별/활동량), goal(목표 체중·날짜), computed(BMR·TDEE·일일 칼로리 목표·페이스)와 최근 7일 daily 기록을 활용해 다이어트 관점에서 조언하세요.
- 핵심 평가 축: 일일 적자(deficit) 달성 여부, 주간 페이스, 운동·식사·걸음수·수면 패턴.
- "오늘 적자 350kcal로 목표보다 150kcal 부족하니..." 처럼 구체적 숫자를 인용하세요.
- 의학적 진단·치료법은 제시하지 말고, 우려가 있으면 전문의 상담을 권하세요.
- 답변은 짧고 친근하게, 핵심만 (보통 3~5문장).
- profile 미설정이면 그 사실을 알리고 설정을 권장한 뒤 가능한 범위에서 답하세요.`;

// ----- AI: Chat -----
function appendChatMsg(role, text, opts = {}) {
  const log = $('#ai-chat-log');
  const div = document.createElement('div');
  const cls = role === 'user' ? 'user' : 'assistant';
  div.className = `chat-msg ${cls}${opts.thinking ? ' thinking' : ''}${opts.error ? ' error' : ''}`;
  div.textContent = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
  return div;
}

function renderChatLog() {
  const log = $('#ai-chat-log');
  log.textContent = '';
  chatHistory.forEach(turn => {
    const text = (turn.parts || []).map(p => p.text).join('');
    appendChatMsg(turn.role === 'user' ? 'user' : 'model', text);
  });
}

$('#ai-chat-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (chatPending) return;
  const input = $('#ai-chat-input');
  const submitBtn = e.target.querySelector('[type="submit"]');
  const msg = input.value.trim();
  if (!msg) return;
  if (!getApiKey()) { toast('API 키를 먼저 설정해주세요', 'error'); return; }

  chatPending = true;
  submitBtn.disabled = true;
  input.disabled = true;

  chatHistory.push({ role: 'user', parts: [{ text: msg }] });
  appendChatMsg('user', msg);
  input.value = '';
  const thinking = appendChatMsg('model', '⏳ 답변 생성 중...', { thinking: true });

  try {
    const ctx = buildRecentContext(7);
    const systemWithCtx = `${COACH_SYSTEM}\n\n[참고용 최근 기록 데이터(JSON)]\n${JSON.stringify(ctx)}`;
    const histForApi = chatHistory.slice(0, -1).map(t => ({ role: t.role, parts: t.parts }));
    const reply = await geminiGenerate({
      prompt: msg,
      history: histForApi,
      systemInstruction: systemWithCtx,
    });
    thinking.remove();
    chatHistory.push({ role: 'model', parts: [{ text: reply }] });
    chatHistory = chatHistory.slice(-CHAT_HISTORY_MAX);
    appendChatMsg('model', reply);
    persistChatHistory();
  } catch (err) {
    thinking.remove();
    appendChatMsg('model', `❌ ${err.message}`, { error: true });
    chatHistory.pop(); // remove the user message we couldn't answer so retry works
  } finally {
    chatPending = false;
    submitBtn.disabled = false;
    input.disabled = false;
    input.focus();
  }
});

$('#ai-chat-clear').addEventListener('click', async () => {
  if (chatHistory.length === 0) return;
  const ok = await confirmDialog('대화 초기화', '지금까지의 대화 기록을 모두 지울까요?');
  if (!ok) return;
  chatHistory = [];
  persistChatHistory();
  renderChatLog();
});

$('#ai-chat-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    $('#ai-chat-form').requestSubmit();
  }
});

// ----- AI: Weekly report -----
function renderReportMarkdown(md) {
  // Security: escapeHtml MUST run first so the regex captures only escaped text.
  // Output is written via innerHTML; preserve this order if adding markdown rules.
  // Avoid attribute-bearing patterns (links, code blocks) without further escaping.
  const esc = escapeHtml(md);
  return esc
    .replace(/^###\s+(.+)$/gm, '<h3>$1</h3>')
    .replace(/^##\s+(.+)$/gm, '<h3>$1</h3>')
    .replace(/^-\s+(.+)$/gm, '• $1')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

$('#ai-report-btn').addEventListener('click', async () => {
  if (!getApiKey()) { toast('API 키를 먼저 설정해주세요', 'error'); return; }
  const btn = $('#ai-report-btn');
  const out = $('#ai-report-result');
  btn.disabled = true;
  const orig = btn.textContent;
  btn.textContent = '⏳ 리포트 생성 중...';
  out.innerHTML = '';
  try {
    const ctx = buildRecentContext(7);
    const prompt = `아래는 사용자의 최근 7일 건강 기록 데이터(JSON)입니다.
${JSON.stringify(ctx, null, 0)}

이 데이터를 분석해서 다음 형식으로 한국어 주간 리포트를 작성해줘:

## 📊 한 줄 요약
(전체적인 한 주 평가, 2~3문장)

## ✅ 잘한 점
- (구체적 데이터 인용한 잘한 점 2~3개)

## ⚠️ 개선할 점
- (수치 근거 있는 우려/패턴 2~3개)

## 🎯 다음 주 목표
- (실행 가능한 구체적 목표 3개, 숫자 포함)

마크다운(## 헤딩, - 리스트, **굵게**)을 사용하되 코드블록은 사용하지 마세요.`;
    const text = await geminiGenerate({ prompt });
    out.innerHTML = renderReportMarkdown(text);
  } catch (err) {
    out.innerHTML = `<div class="chat-msg error">${escapeHtml('❌ ' + err.message)}</div>`;
  } finally {
    btn.disabled = false;
    btn.textContent = orig;
  }
});

// ===== Init =====
renderHome();
renderViewFor(getCurrentTab());
checkNotifyBanner();
