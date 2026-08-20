-- ═══════════════════════════════════════════════════════════════════════
--  GOLD LABEL CLUB — Member Review System Schema
--  Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- ═══════════════════════════════════════════════════════════════════════

-- ── 1. EXTEND PROFILES TABLE ─────────────────────────────────────────
--  Adds optional display fields. Existing rows are unaffected.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS display_name    text,
  ADD COLUMN IF NOT EXISTS city            text,
  ADD COLUMN IF NOT EXISTS bio             text,
  ADD COLUMN IF NOT EXISTS favorite_cigar  text,
  ADD COLUMN IF NOT EXISTS favorite_lounge text,
  ADD COLUMN IF NOT EXISTS avatar_url      text,
  ADD COLUMN IF NOT EXISTS review_count    int NOT NULL DEFAULT 0;

-- Enable RLS on profiles if not already on
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read profiles (display_name, city etc. are public-facing)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='profiles' AND policyname='Public can read profiles'
  ) THEN
    CREATE POLICY "Public can read profiles"
      ON public.profiles FOR SELECT USING (true);
  END IF;
END $$;

-- Allow authenticated users to update their own profile row (matched by JWT email)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='profiles' AND policyname='Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile"
      ON public.profiles FOR UPDATE TO authenticated
      USING  (auth.jwt()->>'email' = email)
      WITH CHECK (auth.jwt()->>'email' = email);
  END IF;
END $$;

-- ── 2. MEMBER REVIEWS ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.member_reviews (
  id                  uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lounge_id           text        NOT NULL,

  -- Denormalised reviewer display info (avoids complex joins on public pages)
  reviewer_name       text,
  reviewer_avatar     text,

  -- Category ratings (1–10 scale, NULL = not rated)
  rating_humidor      numeric(3,1) CHECK (rating_humidor      BETWEEN 1 AND 10),
  rating_chairs       numeric(3,1) CHECK (rating_chairs       BETWEEN 1 AND 10),
  rating_service      numeric(3,1) CHECK (rating_service      BETWEEN 1 AND 10),
  rating_drinks       numeric(3,1) CHECK (rating_drinks       BETWEEN 1 AND 10),
  rating_food         numeric(3,1) CHECK (rating_food         BETWEEN 1 AND 10),
  rating_ventilation  numeric(3,1) CHECK (rating_ventilation  BETWEEN 1 AND 10),
  rating_parking      numeric(3,1) CHECK (rating_parking      BETWEEN 1 AND 10),
  rating_overall      numeric(3,1),  -- computed avg of rated categories, stored for aggregation

  review_text         text,
  visit_date          date,           -- YYYY-MM-DD (day always 01, stored from month input)
  helpful_count       int         NOT NULL DEFAULT 0,

  -- Moderation: published / pending / rejected
  status              text        NOT NULL DEFAULT 'published'
                      CHECK (status IN ('published','pending','rejected')),

  created_at          timestamptz NOT NULL DEFAULT now(),
  updated_at          timestamptz NOT NULL DEFAULT now(),

  UNIQUE (user_id, lounge_id)   -- one review per member per lounge
);

-- RLS
ALTER TABLE public.member_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published reviews"
  ON public.member_reviews FOR SELECT
  USING (status = 'published');

CREATE POLICY "Members can insert own reviews"
  ON public.member_reviews FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Members can update own reviews"
  ON public.member_reviews FOR UPDATE TO authenticated
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Members can delete own reviews"
  ON public.member_reviews FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Index for fast lounge lookups
CREATE INDEX IF NOT EXISTS idx_member_reviews_lounge  ON public.member_reviews (lounge_id, status);
CREATE INDEX IF NOT EXISTS idx_member_reviews_user    ON public.member_reviews (user_id);

-- ── 3. HELPFUL VOTES ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.review_helpful (
  review_id  uuid NOT NULL REFERENCES public.member_reviews(id) ON DELETE CASCADE,
  user_id    uuid NOT NULL REFERENCES auth.users(id)            ON DELETE CASCADE,
  PRIMARY KEY (review_id, user_id)
);

ALTER TABLE public.review_helpful ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read helpful votes"
  ON public.review_helpful FOR SELECT USING (true);

CREATE POLICY "Members can add helpful vote"
  ON public.review_helpful FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Members can remove own helpful vote"
  ON public.review_helpful FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- ── 4. REVIEW PHOTOS (ready for future use) ──────────────────────────
--  Requires a Supabase Storage bucket named "review-photos".
--  Create it in: Dashboard → Storage → New bucket → Name: review-photos → Public: true
CREATE TABLE IF NOT EXISTS public.review_photos (
  id            uuid  PRIMARY KEY DEFAULT gen_random_uuid(),
  review_id     uuid  NOT NULL REFERENCES public.member_reviews(id) ON DELETE CASCADE,
  user_id       uuid  NOT NULL REFERENCES auth.users(id)            ON DELETE CASCADE,
  storage_path  text  NOT NULL,
  status        text  NOT NULL DEFAULT 'pending'
                CHECK (status IN ('approved','pending','rejected')),
  created_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.review_photos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read approved review photos"
  ON public.review_photos FOR SELECT USING (status = 'approved');

CREATE POLICY "Members can upload review photos"
  ON public.review_photos FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
