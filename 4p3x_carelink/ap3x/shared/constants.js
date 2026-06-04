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
