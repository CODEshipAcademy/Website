# CODEship Academy Website

Premium, bilingual (`en`/`fr`), accessibility-first Next.js website scaffold for CODEship Academy.

## Stack
- Next.js App Router
- Tailwind CSS
- Framer Motion
- Supabase client helper (`lib/supabase.ts`)
- Headless CMS adapter placeholder (`lib/cms.ts`)
- Cloudflare Pages deployment-ready

## Run
```bash
npm install
npm run dev
```

## Environment
Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Cloudflare Pages
Build command: `npm run build`  
Output: `.next` (use Next.js framework preset on Cloudflare Pages)

## Included
- Required marketing pages
- Legal/compliance pages
- Bilingual route structure
- Dynamic location SEO pages
- Structured data examples (Organization, FAQ, Event)
- Sitemap and robots

## Supabase table
Run `supabase/schema.sql` to create the `inquiries` table used by bilingual forms with consent and retention tagging.
