import { PageContainer } from "@/components/layout/PageContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";

export function Home() {
  return (
    <PageContainer>
      <HeroSection />
      <ServicesPreview />
      <TestimonialsSection />
      <MapSection />
      <CTASection />
    </PageContainer>
  );
}
