import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/data/siteConfig";

export function CTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready for a New Look?
            </h2>
            <p className="text-primary-foreground/80">
              Book your appointment today and let our experts transform your style.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="gap-2"
            >
              <Link to="/book">
                <Calendar className="h-4 w-4" />
                Book Online
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href={`tel:${businessInfo.phone}`}>
                <Phone className="h-4 w-4" />
                {businessInfo.phoneFormatted}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
