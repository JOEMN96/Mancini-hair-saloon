# Mancini Barbershop Website Conversion Plan

## Summary

Convert the existing React portfolio app into a production-ready, multi-page barbershop website for the Kanata profile, using a clean colorful modern style with shadcn-based UI, subtle motion, centralized content data, local SEO, embedded map, and call-first booking UX.

## Grounded Current State

- Existing app is Vite + React + TypeScript + Tailwind/shadcn.
- Current routes in `/Users/joe/Desktop/Barbershop-site/src/App.tsx`: `/`, `/portfolio`, `/about`, `/contact`.
- Current content is filmmaker/portfolio-specific and must be fully replaced.
- No test suite exists right now; validation currently relies on `npm run lint` and `npm run build`.
- Build is currently green.

## Information Architecture (Launch Scope)

- Route set (replace current):
  - `/` Home
  - `/services` Services
  - `/about` About
  - `/gallery` Gallery
  - `/contact` Contact & Book
- Navigation:
  - Primary nav links for all 5 pages.
  - Persistent CTA button: `Book Now` (click-to-call).
- Footer:
  - Address, phone, hours summary, social links placeholder, quick nav, “Get Directions” CTA.

## UX + Content Direction

- Brand style:
  - Modern barbershop, clean + colorful, subtle motion only.
- Booking:
  - Call-first fallback (`tel:` link) as primary CTA.
  - No live booking integration in v1.
- Contact form:
  - UI-only demo state (no backend send).
  - Inline validation + clear demo messaging.
- Services page:
  - Show services only, no prices.
- Gallery:
  - Stock placeholder imagery for launch.
- Reviews:
  - Static testimonial cards.

## Public Content Source (Centralized Model)

Create a centralized typed content layer so all pages render from one source of truth.

- Add `/Users/joe/Desktop/Barbershop-site/src/data/siteConfig.ts` with:
  - `BusinessInfo` (name, address, phone, email, map URL, booking phone).
  - `BusinessHours` (day-by-day hours and closed days).
  - `ServiceCategory[]` (service groups, descriptions, representative icons, no pricing).
  - `Testimonial[]` (name, quote, rating, source label).
  - `HeroContent`, `AboutContent`, `SEO defaults`.
- Add `/Users/joe/Desktop/Barbershop-site/src/data/gallery.ts` with typed gallery image entries and alt text.
- Remove portfolio-specific data usage from `/Users/joe/Desktop/Barbershop-site/src/data/portfolio.json` in app flow.

## Component + Page Implementation Plan

1. Create reusable layout shell:

- `/Users/joe/Desktop/Barbershop-site/src/components/layout/SiteHeader.tsx`
- `/Users/joe/Desktop/Barbershop-site/src/components/layout/SiteFooter.tsx`
- `/Users/joe/Desktop/Barbershop-site/src/components/layout/PageContainer.tsx`

2. Create reusable section components:

- `/Users/joe/Desktop/Barbershop-site/src/components/sections/HeroSection.tsx`
- `/Users/joe/Desktop/Barbershop-site/src/components/sections/ServicesPreview.tsx`
- `/Users/joe/Desktop/Barbershop-site/src/components/sections/TestimonialsSection.tsx`
- `/Users/joe/Desktop/Barbershop-site/src/components/sections/HoursCard.tsx`
- `/Users/joe/Desktop/Barbershop-site/src/components/sections/MapSection.tsx`

3. Replace pages:

- `/Users/joe/Desktop/Barbershop-site/src/pages/Home.tsx`
  - Hero, trust highlights, services preview, testimonials preview, CTA band.
- `/Users/joe/Desktop/Barbershop-site/src/pages/Services.tsx` (new)
  - Category cards, process notes, “Call to book” CTA.
- `/Users/joe/Desktop/Barbershop-site/src/pages/About.tsx`
  - Brand story, team/values, quality promise.
- `/Users/joe/Desktop/Barbershop-site/src/pages/Gallery.tsx` (new)
  - Responsive grid of placeholder cuts/styles/interior images.
- `/Users/joe/Desktop/Barbershop-site/src/pages/Contact.tsx`
  - Click-to-call primary CTA, UI-only contact form, embedded map, full location block, hours.

4. Router and nav updates:

- Update `/Users/joe/Desktop/Barbershop-site/src/App.tsx` to new routes.
- Replace `/Users/joe/Desktop/Barbershop-site/src/components/Navbar.tsx` usage with new header component.

## Visual System + Styling Plan

- Refactor `/Users/joe/Desktop/Barbershop-site/src/index.css`:
  - Remove portfolio/dark-template defaults that conflict with new brand.
  - Define intentional color tokens for modern colorful barbershop look.
  - Keep strong contrast and accessible text colors.
- Typography:
  - Keep body readable and introduce a stronger display style for headings.
- Motion:
  - Subtle reveals/hover transitions only (no heavy parallax).
- Responsive behavior:
  - Mobile-first layout, sticky header behavior, compressed nav menu for small screens.

## SEO + Discoverability (Local SEO Full)

1. Global metadata:

- Update `/Users/joe/Desktop/Barbershop-site/index.html` title/description/canonical OG defaults.

2. Per-page metadata:

- Add `react-helmet-async` and wrap app provider in `/Users/joe/Desktop/Barbershop-site/src/main.tsx`.
- Add page-specific title/description/OG tags in each page component.

3. Structured data:

- Add `LocalBusiness` JSON-LD on Home and Contact pages using centralized business info.

4. Technical SEO files:

- Add `/Users/joe/Desktop/Barbershop-site/public/robots.txt`
- Add `/Users/joe/Desktop/Barbershop-site/public/sitemap.xml`

## Important Interface/Type Changes

- New exported types in `/Users/joe/Desktop/Barbershop-site/src/data/siteConfig.ts`:
  - `BusinessInfo`
  - `BusinessHours`
  - `ServiceItem`
  - `ServiceCategory`
  - `Testimonial`
  - `GalleryImage`
- Route contract changes in `/Users/joe/Desktop/Barbershop-site/src/App.tsx`:
  - Remove `/portfolio`
  - Add `/services` and `/gallery`
- Contact form model in `/Users/joe/Desktop/Barbershop-site/src/pages/Contact.tsx`:
  - Retain client-side form state + validation but no submission API contract in v1.

## Test Cases and Acceptance Criteria

1. Routing and navigation

- All 5 pages render without console errors.
- Header links route correctly.
- Book CTA triggers phone dial intent (`tel:`).

2. UI behavior

- Contact form validates required fields and shows explicit demo-mode response.
- Gallery loads placeholders without layout shift breaking.
- Embedded map renders and “Directions” link opens map destination.

3. SEO

- Each route sets unique title/description.
- JSON-LD validates for required LocalBusiness fields.
- `robots.txt` and `sitemap.xml` are present and correct.

4. Quality checks

- `npm run lint` passes.
- `npm run build` passes.
- Manual responsive check at mobile/tablet/desktop breakpoints.
- Basic keyboard navigation and focus states work across header, CTAs, and form controls.

## Assumptions and Defaults

- Business profile defaults to Kanata location (Mancini Hair Salon context) and may be adjusted after owner review.
- Services are listed without prices by request.
- Booking provider URL is not yet finalized; call-first CTA is authoritative for v1.
- Contact form is intentionally UI-only (no backend integration).
- Gallery uses stock placeholders until real photos are supplied.
- Testimonials are static curated content for launch (no live review API/widget).
