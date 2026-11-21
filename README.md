# SINAR — Interactive Pixel Portfolio

Responsive Next.js portfolio with original interactive pixel-cat mascot, animated editorial layout, Supabase content reads, admin sign-in and working project CRUD.

## Local setup

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Without Supabase credentials, the public visual shell still loads with fallback skills and intro text; database content and admin require Supabase.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/migrations/001_initial_schema.sql` in Supabase SQL Editor.
3. Copy Project URL and anon/publishable key into `.env.local` (never use service-role key in client code).
4. Create an auth user in Supabase Authentication > Users.
5. Grant that user admin membership using SQL, replacing the UUID:

```sql
insert into public.admins(user_id) values ('YOUR_AUTH_USER_UUID');
```

6. Restart the dev server and open `/admin/login`.

## Included

- Responsive SINAR homepage with the exact short hero headline.
- Pixel cat with idle float, click reactions and speech bubbles.
- About, projects, skills, experience and contact sections.
- Published portfolio data loaded from Supabase.
- Supabase Auth login and protected admin dashboard.
- Project create, read, update, delete; draft/published, featured, order, URLs and thumbnail URL.
- SQL schema for profiles, projects, project images, technologies, skills, experiences, education, social links, messages, admins and storage policies.

## Remaining before production

The initial CMS screen implements project CRUD. Dedicated CRUD interfaces for skills, experiences, education, profile and social links; contact form insertion and message moderation; multi-image upload and technology editor; robust server-side validation/rate limiting; and full auth/RLS testing still need to be completed. Do not treat this starter as production-complete until those are implemented and tested.
