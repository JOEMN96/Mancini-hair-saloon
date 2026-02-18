import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/siteConfig";
import Orb from "@/components/sections/Iridescence";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Orb backgroundColor="#000000" rotateOnHover={true} hoverIntensity={0.3} />
      </div>

      <div className="container mx-auto px-4 absolute z-1 backdrop-blur-md p-5 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 glossy-text">
            {heroContent.headline}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground glossy-text mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {heroContent.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" asChild>
              <Link to="/book" className="pointer-events-auto">
                {heroContent.ctaText}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services" className="pointer-events-auto">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
