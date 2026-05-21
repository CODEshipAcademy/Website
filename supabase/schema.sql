create table if not exists public.inquiries (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  inquiry_type text not null,
  locale text not null check (locale in ('en','fr')),
  name text not null,
  email text not null,
  phone text,
  city_province text,
  organization text,
  message text,
  investment_range text,
  timeline text,
  consent_privacy boolean not null default false,
  consent_casl boolean not null default false,
  consent_background boolean not null default false,
  retention_tag text not null check (retention_tag in ('p1y','p2y','p5y'))
);
