/* 4P3X CareLink — Patient Recovery PWA App
   Standalone installable PWA version (patient-pwa/index.html)
   All data via localStorage SSOT — no backend required
   Created by Kyzel Kreates · Powered by 4P3X Intelligent AI     */
'use strict';

// ── Storage helpers ───────────────────────────────────────────────
function sGet(k, d) { try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : d; } catch { return d; } }
function sSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }

// ── Curriculum ────────────────────────────────────────────────────
const CURRICULUM = [
  { id: 1, name: 'Module 1 — Understanding Your Mental Health', icon: '🌱', color: '#22c55e', lessons: [
    { id: 'm1l1', name: 'What mental health recovery can look like', desc: 'Exploring what recovery means — it is not linear and that is okay.', xp: 60 },
    { id: 'm1l2', name: 'Understanding mood, anxiety, and stress', desc: 'How mood, anxiety, and stress interact and influence each other daily.', xp: 60 },
    { id: 'm1l3', name: 'Recognising personal triggers', desc: 'Learning to identify situations, thoughts, or feelings that worsen symptoms.', xp: 70 },
    { id: 'm1l4', name: 'Tracking patterns safely', desc: 'Using gentle observation to notice patterns without judgement.', xp: 70 },
    { id: 'm1l5', name: 'When to ask for support', desc: 'Recognising when to reach out and how to communicate your needs.', xp: 80 },
  ]},
  { id: 2, name: 'Module 2 — Coping Skills and Daily Regulation', icon: '🎯', color: '#c9a84c', lessons: [
    { id: 'm2l1', name: 'Breathing and grounding techniques', desc: 'Practical tools to reduce anxiety and return to the present moment.', xp: 70 },
    { id: 'm2l2', name: 'Building a daily wellbeing routine', desc: 'Small, consistent habits that support mental health over time.', xp: 70 },
    { id: 'm2l3', name: 'Managing overwhelming thoughts', desc: 'Strategies for cognitive defusion and reducing thought rumination.', xp: 80 },
    { id: 'm2l4', name: 'Sleep, rest, and recovery basics', desc: 'Understanding the relationship between sleep quality and mental health.', xp: 70 },
    { id: 'm2l5', name: 'Creating a personal support plan', desc: 'Designing a simple, practical plan for difficult days.', xp: 90 },
  ]},
  { id: 3, name: 'Module 3 — Progress, Reflection, and Relapse Prevention', icon: '🌍', color: '#a855f7', lessons: [
    { id: 'm3l1', name: 'Reflecting on progress', desc: 'How to acknowledge growth while being compassionate with setbacks.', xp: 80 },
    { id: 'm3l2', name: 'Identifying early warning signs', desc: 'Recognising your personal signs that a difficult period may be starting.', xp: 80 },
    { id: 'm3l3', name: 'Strengthening coping strategies', desc: 'Reviewing and deepening the tools that work best for you.', xp: 80 },
    { id: 'm3l4', name: 'Preparing for therapy sessions', desc: 'Getting the most from your sessions with planning and reflection.', xp: 80 },
    { id: 'm3l5', name: 'Building a personal recovery plan', desc: 'Pulling everything together into a lasting personal recovery framework.', xp: 100 },
  ]},
];

const COPING = [
  { id: 'breathing', icon: '🌬️', name: '4-7-8 Breathing', desc: 'Inhale 4, hold 7, exhale 8. Activates the parasympathetic nervous system to reduce anxiety quickly.', cat: 'Anxiety Relief' },
  { id: 'grounding', icon: '🌿', name: '5-4-3-2-1 Grounding', desc: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. Anchors you in the present.', cat: 'Grounding' },
  { id: 'journaling', icon: '✍️', name: 'Reflective Journaling', desc: 'Write freely for 5–10 minutes without editing. Getting thoughts onto paper reduces emotional intensity.', cat: 'Emotional Processing' },
  { id: 'box',       icon: '📦', name: 'Box Breathing', desc: 'Breathe in 4, hold 4, out 4, hold 4. Regulates the nervous system under stress.', cat: 'Anxiety Relief' },
  { id: 'movement',  icon: '🏃', name: 'Movement Break', desc: 'A 5-minute walk or light stretch can significantly shift mood by processing stress hormones.', cat: 'Mood Lifting' },
  { id: 'selfcomp',  icon: '💛', name: 'Self-Compassion Pause', desc: 'Hand on heart, acknowledge your pain, remind yourself this is a shared human experience.', cat: 'Emotional Processing' },
  { id: 'mindful',   icon: '🧘', name: 'Mindful Observation', desc: 'Choose one object and observe it for 2 minutes — colour, texture, shape. Breaks anxious thought cycles.', cat: 'Grounding' },
  { id: 'music',     icon: '🎵', name: 'Music & Movement', desc: 'Put on a song that lifts your mood. Music engages emotional processing centres of the brain rapidly.', cat: 'Mood Lifting' },
  { id: 'cold',      icon: '❄️', name: 'Cold Water Reset', desc: 'Splash cold water on your face. Activates the dive reflex and rapidly calms the nervous system.', cat: 'Crisis Tool' },
  { id: 'talk',      icon: '💬', name: 'Connect & Share', desc: 'Reach out to one supportive person. Social connection is a powerful buffer against distress.', cat: 'Connection' },
];

const INSIGHTS = [
  'Recovery is not a straight line. Every small step forward matters, even when it does not feel like it.',
  'Your nervous system needs rest to heal. Small moments of calm each day add up to lasting change.',
  'Noticing how you feel without judging it is a skill — and you can get better at it with practice.',
  'Coping strategies work best when practised before crisis. Rehearsal builds resilience.',
  'Asking for support is a sign of self-awareness, not weakness. It takes courage to reach out.',
  'Difficult feelings are not permanent. They rise, peak, and pass like waves.',
  'Small, consistent actions build the foundation for recovery. You do not need to change everything at once.',
  'Your experiences are valid. What you are feeling makes sense in the context of what you have been through.',
  'Sleep and physical rest are essential components of mental health recovery, not luxuries.',
  'Every check-in you complete is an act of self-care. Well done for showing up today.',
];

// ── App State ─────────────────────────────────────────────────────
let profile       = sGet('ap3x_patient_profile', null);
let checkins      = sGet('ap3x_patient_checkins', []);
let lessonDone    = sGet('ap3x_lesson_progress', {});
let copingUsed    = sGet('ap3x_coping_used', []);
let xp            = sGet('ap3x_xp', 0);
let streak        = sGet('ap3x_streak', 0);
let lastCIDate    = sGet('ap3x_last_checkin_date', null);
let dark          = sGet('ap3x_patient_theme', 'dark') === 'dark';
let ciStep        = 1;
let ciData        = freshCIData();
let selectedMood  = null;
const TOTAL_STEPS = 10;

function freshCIData() {
  return { mood: null, anxiety: null, sleep: null, energy: null, coping: null, copingList: [], overwhelmed: null, conc: null, conn: null, note: '', support: null };
}

// ── Boot ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loading-screen').style.display = 'none';
  if (!profile) {
    buildOnboarding();
    document.getElementById('onboarding').style.display = 'block';
  } else {
    buildPortal();
    document.getElementById('portal-root').style.display = 'block';
    renderAll();
  }
});

function applyTheme() {
  document.body.className = dark ? 'theme-dark' : 'theme-light';
}

// ── Onboarding ────────────────────────────────────────────────────
function buildOnboarding() {
  applyTheme();
  document.getElementById('onboarding').innerHTML = `
  <div class="ob-inner">
    <div class="ob-step active" id="ob1">
      <div class="ob-logo"><div style="font-size:48px">🧠</div><div class="ob-brand">4P3X CareLink™</div><div class="ob-brand-sub">My Recovery Support</div></div>
      <h1 class="ob-title">Welcome to your Mental Health Recovery Portal</h1>
      <p class="ob-desc">Guided daily check-ins, wellbeing lessons, coping strategies, and progress tracking — all built around your recovery.</p>
      <div class="ob-feats">
        <div class="ob-feat"><span>📋</span>Daily wellbeing check-in (10 questions)</div>
        <div class="ob-feat"><span>🎓</span>Mental Health Recovery Pathway — 3 modules</div>
        <div class="ob-feat"><span>📈</span>Mood, anxiety &amp; sleep tracking</div>
        <div class="ob-feat"><span>🧘</span>Coping strategies &amp; wellbeing exercises</div>
      </div>
      <button class="btn-primary" onclick="obGo(1,2)">Set up my recovery profile →</button>
      <button class="ob-skip" onclick="obSkip()">Skip — already set up</button>
    </div>
    <div class="ob-step" id="ob2">
      <button class="ob-back" onclick="obGo(2,1)">‹ Back</button>
      <div class="ob-step-num">Step 1 of 3</div>
      <h2 class="ob-step-title">Tell us about yourself</h2>
      <p class="ob-step-sub">Only stored locally on this device — never shared.</p>
      <div class="ob-field"><label class="ob-label">First name or nickname</label><input type="text" id="ob-name" class="ob-input" placeholder="e.g. Alex, Jordan…"/></div>
      <div class="ob-field"><label class="ob-label">Age range</label>
        <div style="display:flex;flex-wrap:wrap;gap:8px" id="ob-age">
          ${['Under 18','18–24','25–34','35–44','45+'].map(a=>`<button class="ob-goal-btn" data-age="${a}" onclick="selOb(this,'ob-age')">${a}</button>`).join('')}
        </div>
      </div>
      <button class="btn-primary" style="margin-top:16px" onclick="obGo(2,3)">Next →</button>
    </div>
    <div class="ob-step" id="ob3">
      <button class="ob-back" onclick="obGo(3,2)">‹ Back</button>
      <div class="ob-step-num">Step 2 of 3</div>
      <h2 class="ob-step-title">What are your wellbeing goals?</h2>
      <p class="ob-step-sub">Select everything relevant — helps personalise your Recovery Pathway.</p>
      <div class="ob-goals-grid" id="ob-goals">
        ${['Managing anxiety','Improving mood','Better sleep','Reducing stress','Building coping skills','Processing difficult feelings','Improving relationships','Building confidence','Managing intrusive thoughts','Trauma recovery'].map(g=>`<button class="ob-goal-btn" data-g="${g}" onclick="this.classList.toggle('active')">${g}</button>`).join('')}
      </div>
      <button class="btn-primary" style="margin-top:16px" onclick="obGo(3,4)">Next →</button>
    </div>
    <div class="ob-step" id="ob4">
      <button class="ob-back" onclick="obGo(4,3)">‹ Back</button>
      <div class="ob-step-num">Step 3 of 3</div>
      <h2 class="ob-step-title">Your experience with mental health support</h2>
      <p class="ob-step-sub">Helps calibrate lesson depth and guidance.</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px" id="ob-exp">
        <button class="ob-goal-btn" style="padding:14px;text-align:left;border-radius:var(--r)" data-e="new" onclick="selOb(this,'ob-exp')"><strong>New to mental health support</strong><br/><span style="font-size:12px;color:var(--muted)">Just starting to explore therapy and wellbeing</span></button>
        <button class="ob-goal-btn" style="padding:14px;text-align:left;border-radius:var(--r)" data-e="some" onclick="selOb(this,'ob-exp')"><strong>Some experience</strong><br/><span style="font-size:12px;color:var(--muted)">Had some therapy or tried wellbeing tools before</span></button>
        <button class="ob-goal-btn" style="padding:14px;text-align:left;border-radius:var(--r)" data-e="ongoing" onclick="selOb(this,'ob-exp')"><strong>Ongoing support</strong><br/><span style="font-size:12px;color:var(--muted)">Currently working with a therapist, want extra support</span></button>
      </div>
      <button class="btn-primary" onclick="obFinish()">Set up my recovery portal →</button>
    </div>
    <div class="ob-step" id="ob5">
      <div class="ob-ready-icon">✨</div>
      <div class="ob-ready-title">You're all set!</div>
      <div class="ob-ready-sub">Your personalised recovery portal is ready.</div>
      <div class="ob-summary" id="ob-summary"></div>
      <div class="safety-notice">
        <h4>⚠️ Important</h4>
        <p>This app supports mental health education, reflection, and therapist-guided monitoring. It does not provide emergency support or replace professional care. If you feel at immediate risk or in crisis, contact local emergency services or a crisis support line immediately.</p>
      </div>
      <button class="btn-primary" onclick="launchPortal()">Open My Recovery Portal →</button>
    </div>
  </div>`;
}

function selOb(btn, groupId) {
  document.querySelectorAll('#'+groupId+' .ob-goal-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function obGo(from, to) {
  document.getElementById('ob'+from).classList.remove('active');
  document.getElementById('ob'+to).classList.add('active');
}
function obSkip() {
  profile = { name: 'Friend', age: '', goals: [], exp: '', createdAt: Date.now() };
  sSet('ap3x_patient_profile', profile);
  launchPortal();
}
function obFinish() {
  const name = (document.getElementById('ob-name').value.trim()) || 'Friend';
  const age  = (document.querySelector('#ob-age .ob-goal-btn.active') || {}).dataset?.age || '';
  const goals = [...document.querySelectorAll('#ob-goals .ob-goal-btn.active')].map(b => b.dataset.g);
  const exp   = (document.querySelector('#ob-exp .ob-goal-btn.active') || {}).dataset?.e || '';
  profile = { name, age, goals, exp, createdAt: Date.now() };
  sSet('ap3x_patient_profile', profile);
  document.getElementById('ob-summary').innerHTML = `<strong>${name}</strong> · Age: ${age || 'Not specified'}<br/>Goals: ${goals.join(', ') || 'Not selected'}<br/>Experience: ${exp || 'Not specified'}`;
  obGo(4, 5);
}
function launchPortal() {
  document.getElementById('onboarding').style.display = 'none';
  document.getElementById('portal-root').style.display = 'block';
  buildPortal();
  renderAll();
}

// ── Build Portal Shell ────────────────────────────────────────────
function buildPortal() {
  applyTheme();
  document.getElementById('portal-root').innerHTML = `
    <header class="portal-header">
      <div class="ph-brand"><div class="brand-dot"></div><div><div class="brand-name">4P3X CareLink™</div><div class="brand-sub">My Recovery Support</div></div></div>
      <div class="ph-right">
        <span class="xp-chip" id="xp-chip">⚡ 0 XP</span>
        <button class="btn-icon" onclick="toggleTheme()">🌙</button>
      </div>
    </header>
    <div id="streak-banner" class="streak-banner" style="display:none">
      <div class="streak-left"><span>🔥</span><span id="streak-text">0-day streak</span></div>
      <span class="streak-xp" id="streak-xp-val">0 XP</span>
    </div>
    <nav class="bottom-nav">
      <button class="nav-tab active" id="tab-btn-home" onclick="switchTab('home')"><span style="font-size:20px">🏠</span>Home</button>
      <button class="nav-tab" id="tab-btn-checkin" onclick="switchTab('checkin')"><span style="font-size:20px">📋</span>Check-In<span class="notif-dot" id="checkin-dot" style="display:none"></span></button>
      <button class="nav-tab" id="tab-btn-lessons" onclick="switchTab('lessons')"><span style="font-size:20px">🎓</span>Lessons</button>
      <button class="nav-tab" id="tab-btn-coping" onclick="switchTab('coping')"><span style="font-size:20px">🧘</span>Coping</button>
      <button class="nav-tab" id="tab-btn-progress" onclick="switchTab('progress')"><span style="font-size:20px">📈</span>Progress</button>
    </nav>
    <div id="tab-home" class="tab-page"></div>
    <div id="tab-checkin" class="tab-page hidden"></div>
    <div id="tab-lessons" class="tab-page hidden"></div>
    <div id="tab-coping" class="tab-page hidden"></div>
    <div id="tab-progress" class="tab-page hidden"></div>`;
}

function toggleTheme() { dark = !dark; sSet('ap3x_patient_theme', dark ? 'dark' : 'light'); applyTheme(); }

function switchTab(name) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.remove('hidden');
  document.getElementById('tab-btn-' + name).classList.add('active');
}

function renderAll() {
  renderHome();
  renderCheckin();
  renderLessons();
  renderCoping();
  renderProgress();
  updateHeader();
}

// ── Header / streak ───────────────────────────────────────────────
function updateHeader() {
  const todayStr = new Date().toDateString();
  const todayDone = lastCIDate === todayStr;
  const dot = document.getElementById('checkin-dot');
  if (dot) dot.style.display = todayDone ? 'none' : 'block';
  document.getElementById('xp-chip').textContent = '⚡ ' + xp + ' XP';
  if (streak > 0) {
    document.getElementById('streak-banner').style.display = 'flex';
    document.getElementById('streak-text').textContent = streak + '-day streak';
    document.getElementById('streak-xp-val').textContent = xp + ' XP';
  }
}

// ── HOME ──────────────────────────────────────────────────────────
function renderHome() {
  const hr = new Date().getHours();
  const greet = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';
  const todayDone = lastCIDate === new Date().toDateString();
  const totalLessons = Object.values(lessonDone).filter(Boolean).length;
  const crisisName    = sGet('4p3x_crisis_name', '');
  const crisisContact = sGet('4p3x_crisis_contact', '');
  const insight = INSIGHTS[new Date().getDate() % INSIGHTS.length];

  document.getElementById('tab-home').innerHTML = `
    <div class="home-hero">
      <div class="hh-title">${greet}, ${profile ? profile.name : 'Friend'} 👋</div>
      <div class="hh-sub">Your recovery journey continues today.</div>
    </div>
    <div class="quick-grid">
      <button class="qa-btn" onclick="switchTab('checkin')"><div class="qa-icon">📋</div><div class="qa-label">Daily Check-In</div><div class="qa-desc">${todayDone ? '✅ Completed today' : 'Complete today\'s check-in'}</div></button>
      <button class="qa-btn" onclick="switchTab('lessons')"><div class="qa-icon">🎓</div><div class="qa-label">Recovery Pathway</div><div class="qa-desc">${totalLessons}/15 lessons complete</div></button>
      <button class="qa-btn" onclick="switchTab('coping')"><div class="qa-icon">🧘</div><div class="qa-label">Coping Strategies</div><div class="qa-desc">10 techniques available</div></button>
      <button class="qa-btn" onclick="switchTab('progress')"><div class="qa-icon">📈</div><div class="qa-label">My Progress</div><div class="qa-desc">${checkins.length} check-ins logged</div></button>
    </div>
    <div class="insight-card"><h4>💡 Today's Insight</h4><p>${insight}</p></div>
    <div class="safety-notice">
      <h4>⚠️ Support Notice</h4>
      <p>This app supports your wellbeing between therapy sessions. It does not replace professional care. If you are in crisis or immediate danger, contact emergency services or a crisis support line now.</p>
      ${crisisName && crisisContact ? `<p style="margin-top:6px;font-size:12px;color:var(--muted)">Crisis support: <strong>${crisisName} — ${crisisContact}</strong></p>` : ''}
    </div>`;
}

// ── CHECK-IN ──────────────────────────────────────────────────────
function renderCheckin() {
  ciData = freshCIData(); ciStep = 1; selectedMood = null;
  document.getElementById('tab-checkin').innerHTML = buildCheckinHTML();
  wireScales();
  wireCopingTags();
}

function buildCheckinHTML() {
  const todayDone = lastCIDate === new Date().toDateString();
  if (todayDone && checkins.length > 0) {
    const last = checkins[0];
    return `<div class="section-title">Daily Check-In</div><div class="section-sub">10 questions · Takes about 3 minutes</div>
    <div style="text-align:center;padding:20px 0"><div style="font-size:56px;margin-bottom:12px">✅</div><div style="font-size:20px;font-weight:700;margin-bottom:8px">Today's Check-In Complete</div><div style="font-size:14px;color:var(--muted);margin-bottom:20px">Anxiety: ${last.anxiety}/10 · Mood: ${last.mood}/10 · Sleep: ${last.sleep}/10</div><button class="btn-secondary" onclick="renderCheckin();document.getElementById('checkin-done-notice').style.display='none'">Complete another check-in</button></div>
    <div id="checkin-done-notice"></div>`;
  }
  return `<div class="section-title">Daily Check-In</div><div class="section-sub">10 questions · Takes about 3 minutes</div>
  <div id="ci-result" style="display:none"></div>
  <div id="ci-form">
    <div class="step-progress"><div class="step-progress-bar" id="ci-bar" style="width:10%"></div></div>
    <div class="step-dots" id="ci-dots">${Array.from({length:10},(_,i)=>`<div class="step-dot${i===0?' active':''}" id="ci-dot-${i+1}"></div>`).join('')}</div>
    <div class="ci-step active" id="ci-1">
      <div class="ci-q">1. How would you rate your mood today?</div><div class="ci-sub">Select the emoji that best matches how you feel right now</div>
      <div class="mood-row">
        ${[{v:1,e:'😔',l:'Very Low'},{v:3,e:'😕',l:'Low'},{v:5,e:'😐',l:'Neutral'},{v:7,e:'🙂',l:'Good'},{v:9,e:'😊',l:'Great'}].map(m=>`<button class="mood-btn" data-mood="${m.v}" onclick="pickMood(this)"><span class="mood-emoji">${m.e}</span><span class="mood-label">${m.l}</span></button>`).join('')}
      </div>
      <div class="btn-row"><button class="btn-secondary" onclick="">—</button><button class="btn-primary" onclick="ciNext(1)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-2">
      <div class="ci-q">2. How would you rate your anxiety or stress today?</div><div class="ci-sub">0 = No anxiety at all · 10 = Extreme anxiety</div>
      <div class="scale-card"><div class="scale-lbl-row"><span>None</span><span>Moderate</span><span>Extreme</span></div><div class="scale-track" id="anxiety-scale"></div><div class="score-val" id="anxiety-val">—</div><div class="score-desc" id="anxiety-desc"></div></div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(2)">Back</button><button class="btn-primary" onclick="ciNext(2)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-3">
      <div class="ci-q">3. How well did you sleep last night?</div><div class="ci-sub">0 = Did not sleep · 10 = Excellent sleep</div>
      <div class="scale-card"><div class="scale-lbl-row"><span>Very Poor</span><span>Fair</span><span>Excellent</span></div><div class="scale-track" id="sleep-scale"></div><div class="score-val" id="sleep-val">—</div></div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(3)">Back</button><button class="btn-primary" onclick="ciNext(3)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-4">
      <div class="ci-q">4. How much energy do you feel you have today?</div><div class="ci-sub">0 = Exhausted · 10 = Full of energy</div>
      <div class="scale-card"><div class="scale-lbl-row"><span>Exhausted</span><span>Moderate</span><span>Energised</span></div><div class="scale-track" id="energy-scale"></div><div class="score-val" id="energy-val">—</div></div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(4)">Back</button><button class="btn-primary" onclick="ciNext(4)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-5">
      <div class="ci-q">5. Have you used any coping strategies today?</div><div class="ci-sub">Breathing, journaling, exercise, talking to someone…</div>
      <div class="form-card">
        <div class="yn-row"><button class="yn-btn yes" id="yn-coping-yes" onclick="ynPick('coping','yes')">✓ Yes</button><button class="yn-btn no" id="yn-coping-no" onclick="ynPick('coping','no')">✗ No</button></div>
        <div id="coping-which" style="display:none;margin-top:12px"><label class="form-label">Which strategies?</label><div class="tag-group" id="coping-tags">
          ${['Breathing exercises','Journaling','Mindfulness','Exercise','Talking to someone','Grounding','Music','Rest / Self-care'].map(c=>`<button class="tag" data-c="${c}">${c}</button>`).join('')}
        </div></div>
      </div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(5)">Back</button><button class="btn-primary" onclick="ciNext(5)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-6">
      <div class="ci-q">6. Have you felt overwhelmed today?</div><div class="ci-sub">Feeling like things are too much to handle</div>
      <div class="form-card"><div class="yn-row"><button class="yn-btn yes" id="yn-overwhelmed-yes" onclick="ynPick('overwhelmed','yes')">✓ Yes</button><button class="yn-btn no" id="yn-overwhelmed-no" onclick="ynPick('overwhelmed','no')">✗ No</button></div></div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(6)">Back</button><button class="btn-primary" onclick="ciNext(6)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-7">
      <div class="ci-q">7. Have you had difficulty concentrating today?</div><div class="ci-sub">Trouble focusing on tasks or conversations</div>
      <div class="form-card"><div class="yn-row"><button class="yn-btn yes" id="yn-conc-yes" onclick="ynPick('conc','yes')">✓ Yes</button><button class="yn-btn no" id="yn-conc-no" onclick="ynPick('conc','no')">✗ No</button></div></div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(7)">Back</button><button class="btn-primary" onclick="ciNext(7)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-8">
      <div class="ci-q">8. Have you connected with anyone supportive today?</div><div class="ci-sub">A friend, family member, therapist, or support group</div>
      <div class="form-card"><div class="yn-row"><button class="yn-btn yes" id="yn-conn-yes" onclick="ynPick('conn','yes')">✓ Yes</button><button class="yn-btn no" id="yn-conn-no" onclick="ynPick('conn','no')">✗ Not today</button></div></div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(8)">Back</button><button class="btn-primary" onclick="ciNext(8)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-9">
      <div class="ci-q">9. Is there anything you want your therapist to know?</div><div class="ci-sub">Optional — visible in your therapist's review dashboard</div>
      <div class="form-card"><textarea id="ci-note" class="form-textarea" placeholder="e.g. I've been finding mornings really hard this week…" rows="4"></textarea></div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(9)">Back</button><button class="btn-primary" onclick="ciNext(9)">Next →</button></div>
    </div>
    <div class="ci-step hidden" id="ci-10">
      <div class="ci-q">10. Do you feel you need extra support before your next session?</div><div class="ci-sub">Flags to your therapist that you may need earlier contact</div>
      <div class="form-card">
        <div class="yn-row"><button class="yn-btn yes" id="yn-support-yes" onclick="ynPick('support','yes')">✓ Yes, I need support</button><button class="yn-btn no" id="yn-support-no" onclick="ynPick('support','no')">✗ I'm okay until then</button></div>
        <div style="margin-top:14px;padding:12px;background:rgba(239,68,68,.08);border-radius:var(--rs);border:1px solid rgba(239,68,68,.2);font-size:12px;color:var(--muted);line-height:1.6">⚠️ If you are in immediate danger or crisis, do not wait — contact local emergency services or a crisis support line <strong>now</strong>. This check-in is not monitored in real-time.</div>
      </div>
      <div class="btn-row"><button class="btn-secondary" onclick="ciBack(10)">Back</button><button class="btn-primary" style="flex:2" onclick="submitCheckin()">Submit Check-In ✓</button></div>
    </div>
  </div>`;
}

function wireScales() {
  [['anxiety-scale','anxiety-val','anxiety-desc',true],['sleep-scale','sleep-val',null,false],['energy-scale','energy-val',null,false]].forEach(([id,valId,descId,inv]) => {
    const wr = document.getElementById(id); if (!wr) return;
    for (let i = 0; i <= 10; i++) {
      const b = document.createElement('button'); b.className = 'scale-btn'; b.dataset.v = i; b.textContent = i;
      b.addEventListener('click', () => {
        wr.querySelectorAll('.scale-btn').forEach(x => x.classList.remove('sel')); b.classList.add('sel');
        document.getElementById(valId).textContent = i;
        if (descId) { const m = inv?{0:'None',1:'Very Mild',3:'Mild',5:'Moderate',7:'Elevated',9:'Very High',10:'Extreme'}:{0:'Very Poor',3:'Poor',5:'Fair',7:'Good',10:'Excellent'}; document.getElementById(descId).textContent = m[i] || ''; }
        if (id === 'anxiety-scale') ciData.anxiety = i;
        else if (id === 'sleep-scale') ciData.sleep = i;
        else ciData.energy = i;
      });
      wr.appendChild(b);
    }
  });
}

function wireCopingTags() {
  const tags = document.querySelectorAll('#coping-tags .tag');
  tags.forEach(t => t.addEventListener('click', () => {
    t.classList.toggle('active');
    ciData.copingList = [...document.querySelectorAll('#coping-tags .tag.active')].map(x => x.dataset.c);
  }));
}

function updateCiProgress(step) {
  document.getElementById('ci-bar').style.width = ((step / TOTAL_STEPS) * 100) + '%';
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    const d = document.getElementById('ci-dot-' + i);
    if (d) d.className = 'step-dot' + (i < step ? ' done' : i === step ? ' active' : '');
  }
}

function pickMood(btn) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel'); ciData.mood = parseInt(btn.dataset.mood);
}

function ynPick(key, val) {
  ciData[key] = val;
  const yEl = document.getElementById('yn-'+key+'-yes'), nEl = document.getElementById('yn-'+key+'-no');
  if (yEl) yEl.classList.toggle('sel', val === 'yes');
  if (nEl) nEl.classList.toggle('sel', val === 'no');
  if (key === 'coping') document.getElementById('coping-which').style.display = val === 'yes' ? 'block' : 'none';
  if (key === 'support' && val === 'yes') showToast('⚠️ Your therapist will see this. If in crisis, contact emergency services now.');
}

function ciNext(step) {
  if (step === 1 && ciData.mood === null) return showToast('Please select your mood');
  if (step === 2 && ciData.anxiety === null) return showToast('Please select an anxiety score');
  if (step === 3 && ciData.sleep === null) return showToast('Please select a sleep score');
  if (step === 4 && ciData.energy === null) return showToast('Please select an energy score');
  document.getElementById('ci-'+step).classList.add('hidden');
  ciStep = step + 1;
  document.getElementById('ci-'+ciStep).classList.remove('hidden');
  updateCiProgress(ciStep);
}
function ciBack(step) {
  document.getElementById('ci-'+step).classList.add('hidden');
  ciStep = step - 1;
  document.getElementById('ci-'+ciStep).classList.remove('hidden');
  updateCiProgress(ciStep);
}

function submitCheckin() {
  ciData.note = (document.getElementById('ci-note') || {}).value?.trim() || '';
  const risk = calcRisk(ciData);
  const record = { id: 'ci_' + Date.now(), date: Date.now(), dateStr: new Date().toDateString(), ...ciData, risk };
  checkins.unshift(record); if (checkins.length > 365) checkins.pop();
  sSet('ap3x_patient_checkins', checkins);
  const todayStr = new Date().toDateString();
  if (lastCIDate !== todayStr) {
    const yest = new Date(Date.now() - 86400000).toDateString();
    streak = lastCIDate === yest ? streak + 1 : 1;
    lastCIDate = todayStr;
    sSet('ap3x_streak', streak); sSet('ap3x_last_checkin_date', todayStr);
  }
  xp += 20; sSet('ap3x_xp', xp);
  showCheckinResult(record, risk);
  updateHeader(); renderHome(); renderProgress();
}

function calcRisk(d) {
  if (d.anxiety >= 8 || d.mood <= 2 || d.support === 'yes') return 'CRITICAL';
  if (d.anxiety >= 6 || d.mood <= 3 || (d.overwhelmed === 'yes' && d.sleep <= 3)) return 'HIGH';
  if (d.anxiety >= 4 || d.overwhelmed === 'yes') return 'MEDIUM';
  return 'LOW';
}

function showCheckinResult(record, risk) {
  document.getElementById('ci-form').style.display = 'none';
  const tips = {
    LOW:      ['Well done on completing your check-in today.','Keep using the coping strategies that are working for you.','Consistency is key — every check-in adds to your recovery.'],
    MEDIUM:   ['You showed real self-awareness by completing your check-in.','Consider a grounding exercise if feelings intensify.','Reaching out to someone supportive today could help.'],
    HIGH:     ['Thank you for being honest in your check-in. That takes courage.','Try a breathing exercise now — even 2 minutes can help.','If feelings intensify, please contact your therapist or support line.'],
    CRITICAL: ['Your responses suggest you may be having a very hard time right now.','Please reach out to your therapist or a trusted person as soon as possible.','If you are in immediate danger, contact emergency services now.']
  };
  const labels = { LOW: '✅ Low', MEDIUM: '⚡ Medium', HIGH: '⚠️ High', CRITICAL: '🚨 Needs Review' };
  document.getElementById('ci-result').style.display = 'block';
  document.getElementById('ci-result').innerHTML = `
    <div style="text-align:center;padding:16px 0 8px"><div style="font-size:48px;margin-bottom:10px">✅</div><div style="font-size:19px;font-weight:700;margin-bottom:4px">Check-In Recorded</div><div style="font-size:13px;color:var(--muted)">Mood: ${record.mood}/10 · Anxiety: ${record.anxiety}/10 · Sleep: ${record.sleep}/10</div></div>
    <div class="feedback-card risk-${risk.toLowerCase()}">
      <div style="margin-bottom:8px"><span class="risk-badge ${risk}">${labels[risk]}</span></div>
      <div class="fc-tips">${(tips[risk]||tips.LOW).map(t=>`<div class="fc-tip">${t}</div>`).join('')}</div>
      ${risk==='CRITICAL'||risk==='HIGH'?`<button class="btn-emergency" onclick="showToast('Contact your therapist or local emergency services immediately.')">🆘 Access Crisis Support Info</button>`:''}
    </div>
    <button class="btn-secondary" style="margin-top:16px" onclick="renderCheckin()">Complete Another Check-In</button>`;
}

// ── LESSONS ───────────────────────────────────────────────────────
function renderLessons() {
  document.getElementById('tab-lessons').innerHTML = `
    <div class="section-title">Mental Health Recovery Pathway</div>
    <div class="section-sub">3 modules · 15 guided support lessons</div>
    ${CURRICULUM.map(mod => {
      const done = mod.lessons.filter(l => lessonDone[l.id]).length;
      const pct  = Math.round((done / mod.lessons.length) * 100);
      return `<div class="module-card">
        <div class="module-hdr"><div class="mod-icon">${mod.icon}</div><div><div class="mod-name">${mod.name}</div><div style="font-size:11px;color:var(--muted);margin-top:2px">${done}/${mod.lessons.length} complete · ${pct}%</div></div></div>
        <div class="mod-prog"><div class="mod-prog-bar" style="width:${pct}%;background:${mod.color}"></div></div>
        ${mod.lessons.map(l => `<div class="lesson-item">
          <div class="lesson-info"><div class="lesson-name">${l.name}</div><div class="lesson-desc">${l.desc}</div></div>
          <button class="lesson-check ${lessonDone[l.id]?'done':''}" onclick="toggleLesson('${l.id}',${l.xp})">${lessonDone[l.id]?'✓':''}</button>
        </div>`).join('')}
      </div>`;
    }).join('')}`;
}

function toggleLesson(id, xpVal) {
  if (lessonDone[id]) { delete lessonDone[id]; }
  else { lessonDone[id] = Date.now(); xp += xpVal; sSet('ap3x_xp', xp); showToast('+' + xpVal + ' XP — Lesson complete! ✓'); }
  sSet('ap3x_lesson_progress', lessonDone);
  renderLessons(); renderProgress(); updateHeader();
}

// ── COPING ────────────────────────────────────────────────────────
function renderCoping() {
  document.getElementById('tab-coping').innerHTML = `
    <div class="section-title">Coping Strategies</div>
    <div class="section-sub">Wellbeing exercises for everyday support</div>
    ${COPING.map(s => `<div class="coping-card">
      <div class="coping-icon">${s.icon}</div>
      <div class="coping-body">
        <div class="coping-name">${s.name}</div>
        <div class="coping-desc">${s.desc}</div>
        <span class="coping-cat">${s.cat}</span>
        <div style="margin-top:10px"><button class="btn-sm ${copingUsed.includes(s.id)?'filled':''}" onclick="markCoping('${s.id}')">${copingUsed.includes(s.id)?'✓ Used today':'Mark as used today'}</button></div>
      </div>
    </div>`).join('')}`;
}

function markCoping(id) {
  if (!copingUsed.includes(id)) { copingUsed.push(id); xp += 5; sSet('ap3x_xp', xp); showToast('+5 XP — Coping strategy logged ✓'); }
  sSet('ap3x_coping_used', copingUsed);
  renderCoping(); updateHeader();
}

// ── PROGRESS ──────────────────────────────────────────────────────
function renderProgress() {
  const totalL  = Object.values(lessonDone).filter(Boolean).length;
  const recent  = checkins.slice(0, 7);
  const avgAnx  = recent.length ? (recent.reduce((a, c) => a + (c.anxiety || 0), 0) / recent.length).toFixed(1) : '—';
  const avgMood = recent.length ? (recent.reduce((a, c) => a + (c.mood || 0), 0) / recent.length).toFixed(1) : '—';

  document.getElementById('tab-progress').innerHTML = `
    <div class="section-title">My Progress</div>
    <div class="section-sub">Your personal recovery journey at a glance</div>
    <div class="prog-grid">
      <div class="prog-stat"><div class="prog-val">${checkins.length}</div><div class="prog-lbl">Check-Ins</div></div>
      <div class="prog-stat"><div class="prog-val">${streak}</div><div class="prog-lbl">Day Streak</div></div>
      <div class="prog-stat"><div class="prog-val">${totalL}/15</div><div class="prog-lbl">Lessons Done</div></div>
      <div class="prog-stat"><div class="prog-val">${xp}</div><div class="prog-lbl">Total XP</div></div>
    </div>
    <div class="prog-grid">
      <div class="prog-stat"><div class="prog-val" style="font-size:20px">${avgAnx}</div><div class="prog-lbl">Avg Anxiety (7d)</div></div>
      <div class="prog-stat"><div class="prog-val" style="font-size:20px">${avgMood}</div><div class="prog-lbl">Avg Mood (7d)</div></div>
    </div>
    <div style="font-size:14px;font-weight:700;margin:16px 0 10px">Recent Check-Ins</div>
    ${checkins.length === 0
      ? '<p style="color:var(--muted);font-size:13px;padding:20px;text-align:center">No check-ins yet. Complete your first check-in to see your progress here.</p>'
      : checkins.slice(0, 10).map(c => {
          const sc = c.anxiety <= 3 ? 'sl' : c.anxiety <= 5 ? 'sm' : c.anxiety <= 7 ? 'sh' : 'sc';
          return `<div class="history-item">
            <div class="hi-score ${sc}">${c.anxiety}</div>
            <div class="hi-info">
              <div style="font-size:13px;font-weight:600">${new Date(c.date).toLocaleDateString()} <span class="risk-badge ${c.risk}" style="font-size:10px;padding:2px 8px">${c.risk}</span></div>
              <div class="hi-date">Mood: ${c.mood}/10 · Sleep: ${c.sleep}/10 · Energy: ${c.energy}/10</div>
              ${c.note ? `<div class="hi-note" style="color:var(--muted)">📝 ${c.note}</div>` : ''}
            </div>
          </div>`;
        }).join('')}
    <div class="safety-notice" style="margin-top:20px">
      <h4>⚠️ Recovery Support Notice</h4>
      <p>This app supports mental health education, reflection, and therapist-guided monitoring. It does not provide emergency support or replace professional care. If you feel at immediate risk or in crisis, contact local emergency services or a crisis support line immediately. Created by Kyzel Kreates · Powered by 4P3X Intelligent AI.</p>
    </div>`;
}

// ── Toast ─────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2800);
}
