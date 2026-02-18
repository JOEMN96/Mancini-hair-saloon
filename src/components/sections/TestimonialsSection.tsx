import { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageTitle } from "@/components/ui/page-title";
import { testimonials } from "@/data/siteConfig";

export function TestimonialsSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <PageTitle size="h2" className="mb-4">
            What Our Clients Say
          </PageTitle>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to have built lasting relationships with our clients. Here's what they have to say about their experience
            at Mancini's.
          </p>
        </div>
      </div>

      <InfiniteMarquee speed={40}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <Card
            key={`${testimonial.id}-${index}`}
            className="relative shrink-0 w-[350px] hover:shadow-lg transition-all duration-300 m-3"
          >
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic line-clamp-4">"{testimonial.quote}"</p>
              <div className="font-medium">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.source}</div>
            </CardContent>
          </Card>
        ))}
      </InfiniteMarquee>
    </section>
  );
}

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}

function InfiniteMarquee({ children, speed = 30, direction = "left" }: InfiniteMarqueeProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const firstSet = contentRef.current.children.length / 2;
      let width = 0;
      for (let i = 0; i < firstSet; i++) {
        const child = contentRef.current.children[i] as HTMLElement;
        width += child.offsetWidth;
      }
      setContentWidth(width);
    }
  }, [children]);

  const duration = contentWidth > 0 ? contentWidth / speed : 20;
  const directionValue = direction === "left" ? "normal" : "reverse";

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="overflow-hidden">
        <div
          ref={contentRef}
          className="flex"
          style={{
            animation: `scroll ${duration}s linear infinite ${directionValue}`,
          }}
        >
          {children}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
