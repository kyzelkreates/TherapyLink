// TherapyLink OS™ — Patient PWA Manager
// ─────────────────────────────────────────────────────────────────
// SSOT for all Patient PWA records, backend profiles, and sync state.
// All reads/writes use localStorage via sGet/sSet helpers (same pattern
// as clinician-demo.html and patient-demo.html — no new deps required).
//
// ID format:
//   Patient PWA ID  : TL-PWA-0001
//   Access Code     : TL-ACCESS-0001
//   Backend Profile : TL-BACKEND-0001
//   Sync Batch      : TL-SYNC-0001
//
// Usage:
//   <script src="../shared/pwa-manager.js"></script>
//   Then call window.TLPwaManager.*

'use strict';

(function (global) {

  // ── Storage helpers (self-contained, no external deps) ───────────
  function sGet(k, d) {
    try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : d; } catch { return d; }
  }
  function sSet(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch {}
  }

  // ── Storage keys ─────────────────────────────────────────────────
  const KEYS = {
    PATIENT_PWAS:      'tl_patient_pwas',
    PWA_COUNTER:       'tl_patient_pwa_counter',
    BACKEND_PROFILES:  'tl_backend_profiles',
    BACKEND_COUNTER:   'tl_backend_profile_counter',
    SYNC_BATCHES:      'tl_sync_batches',
    SYNC_COUNTER:      'tl_sync_batch_counter',
    LINKED_PWA_ID:     'tl_linked_pwa_id',
    LINKED_ACCESS:     'tl_linked_access_code',
  };

  // ── ID generators ────────────────────────────────────────────────
  function _nextCounter(key) {
    const n = (sGet(key, 0) || 0) + 1;
    sSet(key, n);
    return n;
  }

  function generatePatientPwaId(n) { return 'TL-PWA-' + String(n).padStart(4, '0'); }
  function generateAccessCode(n)   { return 'TL-ACCESS-' + String(n).padStart(4, '0'); }
  function generateBackendId(n)    { return 'TL-BACKEND-' + String(n).padStart(4, '0'); }
  function generateSyncBatchId(n)  { return 'TL-SYNC-' + String(n).padStart(4, '0'); }

  // ── Patient PWA CRUD ──────────────────────────────────────────────

  /**
   * getAllPatientPwas()
   * Returns all saved Patient PWA records.
   */
  function getAllPatientPwas() {
    return sGet(KEYS.PATIENT_PWAS, []);
  }

  /**
   * getPatientPwaById(id)
   */
  function getPatientPwaById(id) {
    return getAllPatientPwas().find(p => p.patientPwaId === id) || null;
  }

  /**
   * getPatientPwaByAccessCode(code)
   */
  function getPatientPwaByAccessCode(code) {
    const clean = (code || '').trim().toUpperCase();
    return getAllPatientPwas().find(p => p.patientAccessCode === clean) || null;
  }

  /**
   * createPatientPwa({ patientDisplayName, demoMode, backendProfileId, assignedPathway })
   * Generates a new Patient PWA record with unique ID and access code.
   */
  function createPatientPwa({ patientDisplayName = '', demoMode = false, backendProfileId = null, assignedPathway = 1 } = {}) {
    const n   = _nextCounter(KEYS.PWA_COUNTER);
    const now = new Date().toISOString();
    const base = window.location.href.replace(/clinician-demo\.html.*/, '').replace(/\/$/, '');
    const installUrl = base + '/patient-demo.html?pwa=' + generatePatientPwaId(n);
    const record = {
      patientPwaId:               generatePatientPwaId(n),
      patientAccessCode:          generateAccessCode(n),
      patientDisplayName:         patientDisplayName.trim() || 'Patient ' + String(n).padStart(4, '0'),
      assignedTherapistId:        'TL-THERAPIST-0001',
      createdAt:                  now,
      updatedAt:                  now,
      status:                     'active',
      demoMode:                   !!demoMode,
      liveModeReady:              false,
      backendProfileId:           backendProfileId || null,
      syncStatus:                 'idle',
      lastSyncAt:                 null,
      shareLinks: {
        installUrl:               installUrl,
        whatsapp:                 'https://wa.me/?text=' + encodeURIComponent('Hi, here is your TherapyLink OS™ Patient PWA access link: ' + installUrl + '\n\nYour Access Code: ' + generateAccessCode(n)),
        email:                    'mailto:?subject=' + encodeURIComponent('Your TherapyLink OS™ Patient PWA Access') + '&body=' + encodeURIComponent('Hi,\n\nHere is your TherapyLink OS™ Patient PWA link:\n\n' + installUrl + '\n\nYour Access Code: ' + generateAccessCode(n) + '\n\nTherapyLink OS™ is a support tool. It does not replace your therapist or emergency services.\n\nPowered by 4P3X Intelligent AI™ Created by Kyzel Kreates™'),
        sms:                      'sms:?body=' + encodeURIComponent('Your TherapyLink OS™ PWA: ' + installUrl + ' Code: ' + generateAccessCode(n))
      },
      assignedContent: {
        pathway:                  _pathwayName(assignedPathway),
        pathwayIndex:             parseInt(assignedPathway, 10) || 1,
        customLessons:            []
      },
      progressSummary: {
        lessonsCompleted:         0,
        totalLessons:             15,
        lastActiveAt:             null,
        xp:                       0
      },
      checkInSummary: {
        totalCheckins:            0,
        lastCheckinAt:            null,
        averageAnxiety:           null,
        averageMood:              null
      },
      calmingExerciseSummary: {
        totalUsed:                0,
        lastUsedAt:               null
      },
      consentStatus:              'not_given',
      emergencyDisclaimerAccepted: false,
      notesSummary:               [],
      syncQueue:                  []
    };
    const all = getAllPatientPwas();
    all.push(record);
    sSet(KEYS.PATIENT_PWAS, all);
    return record;
  }

  function _pathwayName(idx) {
    const paths = {
      1: 'Module 1 — Understanding Your Mental Health',
      2: 'Module 2 — Coping Skills and Daily Regulation',
      3: 'Module 3 — Progress, Reflection, and Relapse Prevention'
    };
    return paths[parseInt(idx, 10)] || paths[1];
  }

  /**
   * savePatientPwa(record)
   * Full overwrite of a record by patientPwaId.
   */
  function savePatientPwa(record) {
    if (!record || !record.patientPwaId) return false;
    record.updatedAt = new Date().toISOString();
    const all = getAllPatientPwas();
    const idx = all.findIndex(p => p.patientPwaId === record.patientPwaId);
    if (idx >= 0) all[idx] = record;
    else all.push(record);
    sSet(KEYS.PATIENT_PWAS, all);
    return true;
  }

  /**
   * updatePatientPwa(id, patch)
   * Merges patch fields into an existing record.
   */
  function updatePatientPwa(id, patch) {
    const all = getAllPatientPwas();
    const idx = all.findIndex(p => p.patientPwaId === id);
    if (idx < 0) return false;
    all[idx] = Object.assign({}, all[idx], patch, { updatedAt: new Date().toISOString() });
    sSet(KEYS.PATIENT_PWAS, all);
    return true;
  }

  /**
   * archivePatientPwa(id)
   */
  function archivePatientPwa(id) {
    return updatePatientPwa(id, { status: 'archived' });
  }

  /**
   * pausePatientPwa(id) / activatePatientPwa(id)
   */
  function pausePatientPwa(id)    { return updatePatientPwa(id, { status: 'paused' }); }
  function activatePatientPwa(id) { return updatePatientPwa(id, { status: 'active' }); }

  // ── Backend Profile CRUD ──────────────────────────────────────────

  function getAllBackendProfiles() {
    return sGet(KEYS.BACKEND_PROFILES, []);
  }

  function getBackendProfileById(id) {
    return getAllBackendProfiles().find(b => b.backendProfileId === id) || null;
  }

  /**
   * configureBackendProfile({ provider, label, projectUrl, publicAnonKey, apiBaseUrl, region, publicToken })
   */
  function configureBackendProfile({ provider = 'local', label = '', projectUrl = '', publicAnonKey = '', apiBaseUrl = '', region = '', publicClientKey = '', publicToken = '' } = {}) {
    const n   = _nextCounter(KEYS.BACKEND_COUNTER);
    const now = new Date().toISOString();
    const profile = {
      backendProfileId:    generateBackendId(n),
      provider:            provider,
      label:               label || (provider === 'local' ? 'Local-only' : 'Backend Profile ' + n),
      projectUrl:          projectUrl || '',
      publicAnonKey:       publicAnonKey || '',
      apiBaseUrl:          apiBaseUrl || '',
      region:              region || '',
      publicClientKey:     publicClientKey || '',
      publicToken:         publicToken || '',
      status:              (projectUrl || apiBaseUrl) ? 'configured' : 'not_configured',
      lastTestedAt:        null,
      errorMessage:        '',
      linkedPatientPwaIds: [],
      createdAt:           now,
      updatedAt:           now
    };
    const all = getAllBackendProfiles();
    all.push(profile);
    sSet(KEYS.BACKEND_PROFILES, all);
    return profile;
  }

  /**
   * linkPatientPwaToBackend(patientPwaId, backendProfileId)
   */
  function linkPatientPwaToBackend(patientPwaId, backendProfileId) {
    const profiles = getAllBackendProfiles();
    const pIdx = profiles.findIndex(b => b.backendProfileId === backendProfileId);
    if (pIdx >= 0) {
      if (!profiles[pIdx].linkedPatientPwaIds.includes(patientPwaId)) {
        profiles[pIdx].linkedPatientPwaIds.push(patientPwaId);
        profiles[pIdx].updatedAt = new Date().toISOString();
        sSet(KEYS.BACKEND_PROFILES, profiles);
      }
    }
    return updatePatientPwa(patientPwaId, { backendProfileId, liveModeReady: true });
  }

  /**
   * testBackendConnection(backendProfileId)
   * Safe lightweight test — only uses public/anon key.
   * Never requires service role key, database password, or private key.
   */
  async function testBackendConnection(backendProfileId) {
    const profile = getBackendProfileById(backendProfileId);
    if (!profile) return { ok: false, error: 'Backend profile not found.' };

    const profiles = getAllBackendProfiles();
    const pIdx = profiles.findIndex(b => b.backendProfileId === backendProfileId);

    profiles[pIdx].status = 'testing';
    profiles[pIdx].updatedAt = new Date().toISOString();
    sSet(KEYS.BACKEND_PROFILES, profiles);

    try {
      if (profile.provider === 'local') {
        profiles[pIdx].status = 'connected';
        profiles[pIdx].lastTestedAt = new Date().toISOString();
        profiles[pIdx].errorMessage = '';
        sSet(KEYS.BACKEND_PROFILES, profiles);
        return { ok: true, message: 'Local-only mode active. No backend required.' };
      }

      if (profile.provider === 'supabase') {
        if (!profile.projectUrl || !profile.publicAnonKey) {
          profiles[pIdx].status = 'not_configured';
          profiles[pIdx].errorMessage = 'Supabase URL and Anon Key are required.';
          sSet(KEYS.BACKEND_PROFILES, profiles);
          return { ok: false, error: profiles[pIdx].errorMessage };
        }
        const testUrl = profile.projectUrl.replace(/\/$/, '') + '/rest/v1/';
        const res = await fetch(testUrl, {
          method: 'GET',
          headers: { 'apikey': profile.publicAnonKey, 'Authorization': 'Bearer ' + profile.publicAnonKey },
          signal: AbortSignal.timeout(8000)
        });
        if (res.ok || res.status === 200 || res.status === 404) {
          profiles[pIdx].status = 'connected';
          profiles[pIdx].lastTestedAt = new Date().toISOString();
          profiles[pIdx].errorMessage = '';
          sSet(KEYS.BACKEND_PROFILES, profiles);
          return { ok: true, message: 'Supabase connection successful.' };
        }
        throw new Error('HTTP ' + res.status);
      }

      if (profile.provider === 'rest' || profile.provider === 'custom') {
        if (!profile.apiBaseUrl) {
          profiles[pIdx].status = 'not_configured';
          profiles[pIdx].errorMessage = 'Base API URL is required.';
          sSet(KEYS.BACKEND_PROFILES, profiles);
          return { ok: false, error: profiles[pIdx].errorMessage };
        }
        const testUrl = profile.apiBaseUrl.replace(/\/$/, '') + '/health';
        const res = await fetch(testUrl, { method: 'GET', signal: AbortSignal.timeout(8000) });
        if (res.ok) {
          profiles[pIdx].status = 'connected';
          profiles[pIdx].lastTestedAt = new Date().toISOString();
          profiles[pIdx].errorMessage = '';
          sSet(KEYS.BACKEND_PROFILES, profiles);
          return { ok: true, message: 'REST API connection successful.' };
        }
        throw new Error('HTTP ' + res.status);
      }

      // Firebase / AWS — config saved, live SDK not installed
      profiles[pIdx].status = 'configured';
      profiles[pIdx].lastTestedAt = new Date().toISOString();
      profiles[pIdx].errorMessage = 'Configuration saved. Install backend SDK to enable live sync.';
      sSet(KEYS.BACKEND_PROFILES, profiles);
      return { ok: true, message: profiles[pIdx].errorMessage };

    } catch (err) {
      profiles[pIdx].status = 'failed';
      profiles[pIdx].lastTestedAt = new Date().toISOString();
      profiles[pIdx].errorMessage = err.message || 'Connection failed.';
      sSet(KEYS.BACKEND_PROFILES, profiles);
      return { ok: false, error: profiles[pIdx].errorMessage };
    }
  }

  // ── Sync System ───────────────────────────────────────────────────

  /**
   * queuePwaUpdate(patientPwaId, type, data)
   * Adds an update to a Patient PWA's local sync queue.
   */
  function queuePwaUpdate(patientPwaId, type, data) {
    const all = getAllPatientPwas();
    const idx = all.findIndex(p => p.patientPwaId === patientPwaId);
    if (idx < 0) return false;
    if (!all[idx].syncQueue) all[idx].syncQueue = [];
    all[idx].syncQueue.push({
      id:         'SQ-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase(),
      type:       type,
      data:       data,
      queuedAt:   new Date().toISOString(),
      status:     'pending'
    });
    all[idx].syncStatus = 'pending';
    all[idx].updatedAt  = new Date().toISOString();
    sSet(KEYS.PATIENT_PWAS, all);
    return true;
  }

  /**
   * syncPatientPwa(patientPwaId)
   * Attempts to flush a single Patient PWA's sync queue.
   * Falls back gracefully if no backend configured.
   */
  async function syncPatientPwa(patientPwaId) {
    const record  = getPatientPwaById(patientPwaId);
    if (!record)  return { ok: false, error: 'Patient PWA not found.' };

    const queue   = record.syncQueue || [];
    const profile = record.backendProfileId ? getBackendProfileById(record.backendProfileId) : null;

    if (!profile || profile.provider === 'local' || profile.status !== 'connected') {
      updatePatientPwa(patientPwaId, { syncStatus: 'idle', lastSyncAt: new Date().toISOString() });
      return { ok: true, flushed: 0, failed: 0, message: 'Local-only mode — no backend sync required. Data is saved locally.' };
    }

    if (queue.length === 0) {
      updatePatientPwa(patientPwaId, { syncStatus: 'idle', lastSyncAt: new Date().toISOString() });
      return { ok: true, flushed: 0, failed: 0, message: 'No pending items to sync.' };
    }

    updatePatientPwa(patientPwaId, { syncStatus: 'syncing' });

    let flushed = 0; let failed = 0;
    const remaining = [];

    for (const item of queue) {
      try {
        if (profile.provider === 'supabase' && profile.publicAnonKey && profile.projectUrl) {
          const url  = profile.projectUrl.replace(/\/$/, '') + '/rest/v1/therapylink_sync_events';
          const res  = await fetch(url, {
            method:  'POST',
            headers: { 'apikey': profile.publicAnonKey, 'Authorization': 'Bearer ' + profile.publicAnonKey, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
            body:    JSON.stringify({ source: 'patient_pwa', event_type: item.type, payload: item.data, patient_pwa_id: patientPwaId }),
            signal:  AbortSignal.timeout(10000)
          });
          if (!res.ok && res.status !== 201) throw new Error('HTTP ' + res.status);
          flushed++;
        } else {
          // Backend-ready: config saved but SDK not installed — keep queued
          remaining.push({ ...item, status: 'backend_ready' });
        }
      } catch (err) {
        remaining.push({ ...item, status: 'failed', error: err.message });
        failed++;
      }
    }

    const n = _nextCounter(KEYS.SYNC_COUNTER);
    const batches = sGet(KEYS.SYNC_BATCHES, []);
    batches.unshift({
      batchId:       generateSyncBatchId(n),
      patientPwaId:  patientPwaId,
      flushed:       flushed,
      failed:        failed,
      remaining:     remaining.length,
      at:            new Date().toISOString()
    });
    if (batches.length > 100) batches.splice(100);
    sSet(KEYS.SYNC_BATCHES, batches);

    const all = getAllPatientPwas();
    const idx = all.findIndex(p => p.patientPwaId === patientPwaId);
    if (idx >= 0) {
      all[idx].syncQueue  = remaining;
      all[idx].syncStatus = failed > 0 ? 'failed' : 'success';
      all[idx].lastSyncAt = new Date().toISOString();
      all[idx].updatedAt  = new Date().toISOString();
      sSet(KEYS.PATIENT_PWAS, all);
    }

    return { ok: failed === 0, flushed, failed, remaining: remaining.length };
  }

  /**
   * syncAllPatientPwas()
   */
  async function syncAllPatientPwas() {
    const all = getAllPatientPwas().filter(p => p.status === 'active');
    const results = [];
    for (const pwa of all) {
      const r = await syncPatientPwa(pwa.patientPwaId);
      results.push({ id: pwa.patientPwaId, name: pwa.patientDisplayName, ...r });
    }
    return results;
  }

  /**
   * flushSyncQueue() — alias for syncAllPatientPwas
   */
  async function flushSyncQueue() { return syncAllPatientPwas(); }

  // ── Patient PWA side: link by access code ─────────────────────────

  /**
   * linkByAccessCode(code)
   * Called from the Patient PWA first-time connect screen.
   * Validates the code against saved records, stores the link locally.
   */
  function linkByAccessCode(code) {
    const clean = (code || '').trim().toUpperCase();
    const record = getPatientPwaByAccessCode(clean);
    if (!record) return { ok: false, error: 'Access code not found. Please check the code your therapist sent you.' };
    if (record.status === 'archived') return { ok: false, error: 'This Patient PWA link has been archived. Please contact your therapist.' };
    if (record.status === 'paused')   return { ok: false, error: 'This Patient PWA is currently paused. Please contact your therapist.' };
    sSet(KEYS.LINKED_PWA_ID, record.patientPwaId);
    sSet(KEYS.LINKED_ACCESS, clean);
    return { ok: true, record };
  }

  /**
   * getLinkedPwaId()
   * Returns the patientPwaId stored on this device.
   */
  function getLinkedPwaId() {
    return sGet(KEYS.LINKED_PWA_ID, null);
  }

  /**
   * getLinkedRecord()
   * Returns the full Patient PWA record linked on this device.
   */
  function getLinkedRecord() {
    const id = getLinkedPwaId();
    if (!id) return null;
    return getPatientPwaById(id);
  }

  /**
   * getSyncHistory(limit)
   */
  function getSyncHistory(limit) {
    const batches = sGet(KEYS.SYNC_BATCHES, []);
    return limit ? batches.slice(0, limit) : batches;
  }

  // ── Demo PWA seeds ────────────────────────────────────────────────
  /**
   * seedDemoPatientPwas()
   * Creates demo Patient PWA records if none exist.
   * Idempotent — safe to call on every boot.
   */
  function seedDemoPatientPwas() {
    const existing = getAllPatientPwas();
    if (existing.length > 0) return existing;

    const base = typeof window !== 'undefined'
      ? window.location.href.replace(/clinician-demo\.html.*/, '').replace(/\/$/, '') + '/patient-demo.html'
      : '/ap3x/demo/patient-demo.html';

    const demos = [
      { patientDisplayName: 'Jordan M.',  pathwayIndex: 1 },
      { patientDisplayName: 'Sam K.',     pathwayIndex: 1 },
      { patientDisplayName: 'Alex T.',    pathwayIndex: 2 },
      { patientDisplayName: 'Riley C.',   pathwayIndex: 2 },
      { patientDisplayName: 'Morgan B.',  pathwayIndex: 1 },
    ];

    const counter = sGet(KEYS.PWA_COUNTER, 0) || 0;
    const records = [];
    demos.forEach((d, i) => {
      const n = counter + i + 1;
      const now = new Date().toISOString();
      const id  = generatePatientPwaId(n);
      const code = generateAccessCode(n);
      const installUrl = base + '?pwa=' + id;
      records.push({
        patientPwaId:               id,
        patientAccessCode:          code,
        patientDisplayName:         d.patientDisplayName,
        assignedTherapistId:        'TL-THERAPIST-0001',
        createdAt:                  now,
        updatedAt:                  now,
        status:                     'active',
        demoMode:                   true,
        liveModeReady:              false,
        backendProfileId:           null,
        syncStatus:                 'idle',
        lastSyncAt:                 null,
        shareLinks: {
          installUrl,
          whatsapp: 'https://wa.me/?text=' + encodeURIComponent('Hi, here is your TherapyLink OS™ Patient PWA access link: ' + installUrl + '\n\nYour Access Code: ' + code),
          email:    'mailto:?subject=' + encodeURIComponent('Your TherapyLink OS™ Patient PWA Access') + '&body=' + encodeURIComponent('Hi,\n\nHere is your TherapyLink OS™ Patient PWA link:\n\n' + installUrl + '\n\nAccess Code: ' + code + '\n\nPowered by 4P3X Intelligent AI™ Created by Kyzel Kreates™'),
          sms:      'sms:?body=' + encodeURIComponent('Your TherapyLink OS™ PWA: ' + installUrl + ' Code: ' + code)
        },
        assignedContent: {
          pathway:      d.pathwayIndex === 2 ? 'Module 2 — Coping Skills and Daily Regulation' : 'Module 1 — Understanding Your Mental Health',
          pathwayIndex: d.pathwayIndex,
          customLessons: []
        },
        progressSummary: {
          lessonsCompleted: Math.floor(Math.random() * 5),
          totalLessons:     15,
          lastActiveAt:     new Date(Date.now() - Math.random() * 86400000 * 7).toISOString(),
          xp:               Math.floor(Math.random() * 300)
        },
        checkInSummary: {
          totalCheckins:   Math.floor(Math.random() * 14) + 1,
          lastCheckinAt:   new Date(Date.now() - Math.random() * 86400000 * 3).toISOString(),
          averageAnxiety:  (Math.random() * 6 + 2).toFixed(1),
          averageMood:     (Math.random() * 4 + 4).toFixed(1)
        },
        calmingExerciseSummary: { totalUsed: Math.floor(Math.random() * 8), lastUsedAt: null },
        consentStatus:              'given',
        emergencyDisclaimerAccepted: true,
        notesSummary:               [],
        syncQueue:                  []
      });
    });
    sSet(KEYS.PATIENT_PWAS, records);
    sSet(KEYS.PWA_COUNTER, counter + demos.length);
    return records;
  }

  // ── Public API ────────────────────────────────────────────────────
  global.TLPwaManager = {
    // Patient PWA CRUD
    getAllPatientPwas,
    getPatientPwaById,
    getPatientPwaByAccessCode,
    createPatientPwa,
    savePatientPwa,
    updatePatientPwa,
    archivePatientPwa,
    pausePatientPwa,
    activatePatientPwa,
    // Backend profiles
    getAllBackendProfiles,
    getBackendProfileById,
    configureBackendProfile,
    linkPatientPwaToBackend,
    testBackendConnection,
    // Sync
    queuePwaUpdate,
    syncPatientPwa,
    syncAllPatientPwas,
    flushSyncQueue,
    getSyncHistory,
    // Patient PWA side
    linkByAccessCode,
    getLinkedPwaId,
    getLinkedRecord,
    // Demo seeds
    seedDemoPatientPwas,
    // ID helpers (for display)
    generatePatientPwaId,
    generateAccessCode,
    generateBackendId,
    generateSyncBatchId,
    KEYS,
  };

})(typeof window !== 'undefined' ? window : global);
