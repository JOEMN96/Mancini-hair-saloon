# Mancini's Hair Salon Website Conversion Plan

## Summary

Convert the existing React portfolio app into a production-ready, multi-page barbershop website for the Kanata profile, using a clean colorful modern style with shadcn-based UI, subtle motion, centralized content data, local SEO, embedded map, and call-first booking UX.

## Implemented Changes

### ✅ Data Layer
- Created `/Users/joe/Desktop/Barbershop-site/src/data/siteConfig.ts` with BusinessInfo, BusinessHours, Testimonials, HeroContent, AboutContent, SEO defaults
- Created `/Users/joe/Desktop/Barbershop-site/src/data/services.ts` with full service list and prices (50+ services)
- Created `/Users/joe/Desktop/Barbershop-site/src/data/gallery.ts` with gallery image entries

### ✅ Layout Components
- Created `/Users/joe/Desktop/Barbershop-site/src/components/layout/SiteHeader.tsx` - Navigation with Book Now CTA
- Created `/Users/joe/Desktop/Barbershop-site/src/components/layout/SiteFooter.tsx` - Footer with address, phone, hours
- Created `/Users/joe/Desktop/Barbershop-site/src/components/layout/PageContainer.tsx` - Page wrapper

### ✅ Section Components
- Created `/Users/joe/Desktop/Barbershop-site/src/components/sections/HeroSection.tsx`
- Created `/Users/joe/Desktop/Barbershop-site/src/components/sections/ServicesPreview.tsx` (with SpotlightCard)
- Created `/Users/joe/Desktop/Barbershop-site/src/components/sections/TestimonialsSection.tsx`
- Created `/Users/joe/Desktop/Barbershop-site/src/components/sections/HoursCard.tsx`
- Created `/Users/joe/Desktop/Barbershop-site/src/components/sections/MapSection.tsx`
- Created `/Users/joe/Desktop/Barbershop-site/src/components/sections/CTASection.tsx`

### ✅ Pages
- Updated `/Users/joe/Desktop/Barbershop-site/src/pages/Home.tsx`
- Created `/Users/joe/Desktop/Barbershop-site/src/pages/Services.tsx` (with prices)
- Updated `/Users/joe/Desktop/Barbershop-site/src/pages/About.tsx`
- Created `/Users/joe/Desktop/Barbershop-site/src/pages/Gallery.tsx`
- Updated `/Users/joe/Desktop/Barbershop-site/src/pages/Contact.tsx`
- Created `/Users/joe/Desktop/Barbershop-site/src/pages/Book.tsx` (Calendly embed)

### ✅ Routing
- Updated `/Users/joe/Desktop/Barbershop-site/src/App.tsx` with new routes: `/`, `/services`, `/about`, `/gallery`, `/book`, `/contact`
- Removed `/portfolio` route

### ✅ Visual System
- Updated `/Users/joe/Desktop/Barbershop-site/src/index.css` with new branding colors
- Added fonts: Cormorant Garamond (headings), Sora (body)
- Added ScrollToTop component

### ✅ SEO
- Updated `/Users/joe/Desktop/Barbershop-site/index.html` with metadata and JSON-LD
- Created `/Users/joe/Desktop/Barbershop-site/public/robots.txt`
- Created `/Users/joe/Desktop/Barbershop-site/public/sitemap.xml`

### ✅ Registry Components (Installed)
- **Beams** (`/src/components/Beams.tsx`) - React Bits - 3D animated light beams
- **SpotlightCard** (`/src/components/SpotlightCard.tsx`) - React Bits - Glow effect on hover
- **TiltedCard** (`/src/components/TiltedCard.tsx`) - React Bits - 3D tilt effect
- **Hyperspeed** (`/src/components/Hyperspeed.tsx`) - React Bits - Warp speed background
- **AnimatedList** (`/src/components/AnimatedList.tsx`) - React Bits - Animated list items
- **LetterGlitch** (`/src/components/LetterGlitch.tsx`) - React Bits - Text glitch effect

## Pending Implementation

### Registry Components - Integration Needed

1. ~~**Gallery Enhancement**~~ ✅ DONE
   - ~~Integrate TiltedCard for image cards with 3D tilt effect~~ (User chose to keep current)
   - ~~Add LetterGlitch to gallery title~~ (Replaced with GradientText PageTitle)

2. ~~**Hero Enhancement**~~ ✅ DONE (User chose to keep current)
   - ~~Add Beams or Hyperspeed background effect~~ (Orb already looks good)
   - ~~Add LetterGlitch to headline text~~ (User prefers current glossy-text style)

3. ~~**Services Enhancement**~~ ✅ DONE
   - Created `AnimatedServiceItem` component with staggered fade-in animations
   - Applied to all service items in Services.tsx

4. ~~**Testimonials Enhancement**~~ ✅ DONE
   - Installed `@shadcn/carousel` with `embla-carousel-autoplay`
   - Converted static grid to autoplay carousel (5s interval)
   - Responsive: 1 on mobile, 2 on tablet, 3 on desktop

### Quality Tasks
- [x] Run lint and verify passes (see notes below)
- [ ] Manual responsive check at mobile/tablet/desktop breakpoints
- [ ] Basic keyboard navigation and focus states

### Lint Notes
Lint passes build but shows warnings/errors in pre-existing and shadcn components:
- `AnimatedList.tsx` - setState in effect (pre-existing)
- `GradientText.tsx` - missing dependency (pre-existing)
- `Iridescence.tsx` - missing dependencies (pre-existing)
- `badge.tsx`, `button.tsx`, `carousel.tsx`, `combobox.tsx` - fast refresh warnings (shadcn)

## Technical Notes

### Booking System
- Uses internal `/book` page with Calendly embed
- External booking URL stored in siteConfig but replaced with internal route

### Services Pricing
- Prices displayed on Services page (per user request)
- Separate from siteConfig (which contains no pricing)

### Fonts
- Headings: Cormorant Garamond (elegant serif)
- Body: Sora (modern sans-serif)
