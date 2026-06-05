// TherapyLink™ — Shared Constants
// Single source of truth for keys, thresholds, roles, and disclaimer.
// Used across Patient PWA and Therapist Dashboard.

// ── Roles ─────────────────────────────────────────────────────────
export const AP3X_ROLES = {
  PATIENT:   'patient',
  THERAPIST: 'therapist',
  CLINICIAN: 'therapist'  // alias for backwards compat
};

// ── SSOT storage keys (ap3x_ prefix to avoid BCO collisions) ──────
export const AP3X_KEYS = {
  ANXIETY_LOGS:       'ap3x_anxiety_logs',
  MOOD_LOGS:          'ap3x_mood_logs',
  SLEEP_LOGS:         'ap3x_sleep_logs',
  TRIGGER_LOGS:       'ap3x_trigger_logs',
  RISK_FLAGS:         'ap3x_risk_flags',
  USER_PROFILE:       'ap3x_user_profile',
  PATIENT_PROFILE:    'ap3x_patient_profile',
  STREAK:             'ap3x_streak',
  SYNC_QUEUE:         'ap3x_sync_queue',
  THERAPIST_NOTES:    'ap3x_clinician_notes',
  CLINICIAN_NOTES:    'ap3x_clinician_notes',  // alias
  LESSON_PROGRESS:    'ap3x_lesson_progress',
  CHECKINS:           'ap3x_patient_checkins',
  XP:                 'ap3x_xp',
  SETTINGS:           'ap3x_settings',
  DEMO_MODE:          '4p3x_demo_mode',
  CRISIS_NAME:        '4p3x_crisis_name',
  CRISIS_CONTACT:     '4p3x_crisis_contact'
};

// ── Risk levels ───────────────────────────────────────────────────
export const RISK_LEVELS = {
  LOW:      'LOW',
  MEDIUM:   'MEDIUM',
  HIGH:     'HIGH',
  CRITICAL: 'CRITICAL',
  MISSING:  'MISSING_DATA'
};

// ── Rule thresholds ───────────────────────────────────────────────
export const THRESHOLDS = {
  ANXIETY_CRITICAL:      8,   // single score ≥ this → CRITICAL flag
  ANXIETY_HIGH:          6,   // single score ≥ this → HIGH flag
  ANXIETY_MEDIUM_RUN:    5,   // 3 consecutive ≥ this → MEDIUM flag
  ANXIETY_MEDIUM_COUNT:  3,   // consecutive entries for medium trend
  SLEEP_LOW:             4,   // sleep score < this → low sleep flag
  MISSING_DATA_HOURS:   48    // no check-in in this many hours → MISSING
};

// ── Safety disclaimer (required in all UI footers) ────────────────
export const DISCLAIMER =
  'TherapyLink™ supports mental health education, reflection, and ' +
  'therapist-guided monitoring. It does not provide emergency support, medical diagnosis, ' +
  'clinical treatment, or a replacement for professional care. All risk indicators are ' +
  'informational only and must be reviewed by a qualified clinician. ' +
  'If a patient feels at immediate risk or in crisis, contact local emergency services immediately. ' +
  'Created by Kyzel Kreates · Powered by 4P3X Intelligent AI.';

// ── Product identity ──────────────────────────────────────────────
export const BRAND = {
  name:      'TherapyLink™',
  shortName: 'TherapyLink™',
  tagline:   'Patient Recovery PWA + Therapist Monitoring Dashboard',
  powered:   'Powered by 4P3X Intelligent AI — Created by Kyzel Kreates',
  version:   '2.0.0'
};

// ── Patient PWA Manager keys (added: Live Mode + PWA ID upgrade) ──
export const PWA_KEYS = {
  PATIENT_PWAS:       'tl_patient_pwas',        // all Patient PWA records
  PATIENT_PWA_COUNT:  'tl_patient_pwa_counter', // autoincrement counter
  BACKEND_PROFILES:   'tl_backend_profiles',     // saved backend configs
  BACKEND_COUNT:      'tl_backend_profile_counter',
  SYNC_BATCHES:       'tl_sync_batches',         // sync history log
  SYNC_BATCH_COUNT:   'tl_sync_batch_counter',
  ACTIVE_PWA_ID:      'tl_active_pwa_id',        // currently open PWA (patient side)
  LINKED_PWA_ID:      'tl_linked_pwa_id',        // patient PWA: linked patientPwaId
};

// ── ID generators — consistent TL-PWA-XXXX format ─────────────────
export function generatePatientPwaId(counter) {
  return 'TL-PWA-' + String(counter).padStart(4, '0');
}

export function generateAccessCode(counter) {
  return 'TL-ACCESS-' + String(counter).padStart(4, '0');
}

export function generateBackendProfileId(counter) {
  return 'TL-BACKEND-' + String(counter).padStart(4, '0');
}

export function generateSyncBatchId(counter) {
  return 'TL-SYNC-' + String(counter).padStart(4, '0');
}

// ── Default Patient PWA record ────────────────────────────────────
export function makePatientPwaRecord({ patientDisplayName = '', counter = 1, therapistId = 'TL-THERAPIST-0001', demoMode = false } = {}) {
  const now = new Date().toISOString();
  const c = parseInt(counter, 10) || 1;
  return {
    patientPwaId:              generatePatientPwaId(c),
    patientAccessCode:         generateAccessCode(c),
    patientDisplayName:        patientDisplayName || 'Patient ' + String(c).padStart(4, '0'),
    assignedTherapistId:       therapistId,
    createdAt:                 now,
    updatedAt:                 now,
    status:                    'active',          // active | paused | archived
    demoMode:                  demoMode,
    liveModeReady:             false,
    backendProfileId:          null,
    syncStatus:                'idle',            // idle | pending | syncing | success | failed
    lastSyncAt:                null,
    shareLinks: {
      installUrl:              '',
      whatsapp:                '',
      email:                   '',
      sms:                     ''
    },
    assignedContent: {
      pathway:                 'Module 1 — Understanding Your Mental Health',
      pathwayIndex:            1,
      customLessons:           []
    },
    progressSummary: {
      lessonsCompleted:        0,
      totalLessons:            15,
      lastActiveAt:            null,
      xp:                      0
    },
    checkInSummary: {
      totalCheckins:           0,
      lastCheckinAt:           null,
      averageAnxiety:          null,
      averageMood:             null
    },
    calmingExerciseSummary: {
      totalUsed:               0,
      lastUsedAt:              null
    },
    consentStatus:             'not_given',       // not_given | given | expired
    emergencyDisclaimerAccepted: false,
    notesSummary:              []
  };
}

// ── Default backend profile ───────────────────────────────────────
export function makeBackendProfile({ provider = 'local', counter = 1 } = {}) {
  const now = new Date().toISOString();
  return {
    backendProfileId:    generateBackendProfileId(parseInt(counter, 10) || 1),
    provider:            provider,  // local | supabase | firebase | aws | rest
    label:               provider === 'local' ? 'Local-only' : 'Backend ' + counter,
    projectUrl:          '',
    publicAnonKey:       '',
    apiBaseUrl:          '',
    region:              '',
    publicClientKey:     '',
    publicToken:         '',
    status:              'not_configured', // not_configured | configured | testing | connected | failed
    lastTestedAt:        null,
    errorMessage:        '',
    linkedPatientPwaIds: [],
    createdAt:           now,
    updatedAt:           now
  };
}
