// ─── GOLD LABEL CLUB — SUPABASE CONFIG ───────────────────────────────────────
//
// SETUP STEPS:
// 1. Go to supabase.com → New project → "gold-label-club"
// 2. Wait for it to provision (~2 min)
// 3. Go to Project Settings → API
// 4. Copy "Project URL" and "anon public" key → paste below
// 5. Copy "service_role" key → paste in supabase-admin-config.js (keep that file private)
// 6. Run the SQL in database-setup.sql in your Supabase SQL Editor
// 7. In Authentication → Email Templates, customize the invite email if you like
// 8. Set your admin email below

const SUPABASE_URL      = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEY';

// Your email — used to identify the admin account
const GLC_ADMIN_EMAIL   = 'your@email.com';
