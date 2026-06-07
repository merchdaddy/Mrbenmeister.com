-- ─── GOLD LABEL CLUB — SUPABASE DATABASE SETUP ──────────────────────────────
-- Run this entire file in: Supabase Dashboard → SQL Editor → New Query → Run

-- 1. APPLICATIONS (submitted from public form, no auth required)
CREATE TABLE applications (
  id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name   text NOT NULL,
  last_name    text NOT NULL,
  email        text NOT NULL,
  phone        text,
  city         text,
  occupation   text,
  linkedin     text,
  status       text DEFAULT 'pending', -- pending | approved | rejected
  submitted_at timestamptz DEFAULT now()
);

-- 2. PROFILES (created when user is invited/approved)
CREATE TABLE profiles (
  id         uuid REFERENCES auth.users PRIMARY KEY,
  first_name text,
  last_name  text,
  email      text,
  approved   boolean DEFAULT true,
  joined_at  timestamptz DEFAULT now()
);

-- 3. MESSAGES (member chat)
CREATE TABLE messages (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    uuid REFERENCES auth.users NOT NULL,
  user_name  text NOT NULL,
  content    text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 4. EVENTS (calendar)
CREATE TABLE events (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title       text NOT NULL,
  event_date  timestamptz NOT NULL,
  location    text,
  description text,
  type        text DEFAULT 'Members Only',
  created_at  timestamptz DEFAULT now()
);

-- ── ROW LEVEL SECURITY ────────────────────────────────────────────────────────

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles     ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages     ENABLE ROW LEVEL SECURITY;
ALTER TABLE events       ENABLE ROW LEVEL SECURITY;

-- Applications: anyone can insert (public form), only service_role can read/update
CREATE POLICY "Public can submit applications"
  ON applications FOR INSERT TO anon WITH CHECK (true);

-- Profiles: users can read their own; all authenticated can read (for chat names)
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

-- Messages: authenticated approved members only
CREATE POLICY "Members can read messages"
  ON messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members can insert messages"
  ON messages FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Events: authenticated members can read
CREATE POLICY "Members can read events"
  ON events FOR SELECT TO authenticated USING (true);

-- ── REALTIME ─────────────────────────────────────────────────────────────────
-- Enable realtime on messages table
ALTER PUBLICATION supabase_realtime ADD TABLE messages;
