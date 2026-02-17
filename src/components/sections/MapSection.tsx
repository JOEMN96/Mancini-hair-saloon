import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/data/siteConfig";

export function MapSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-muted-foreground mb-6">
              We're conveniently located in the heart of Kanata. Stop by for your
              next appointment or feel free to give us a call.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">{businessInfo.fullAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Kanata, Ottawa, Ontario
                  </p>
                </div>
              </div>
            </div>
            <Button asChild>
              <a
                href={businessInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-muted">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.5${businessInfo.coordinates.lat}!2d${businessInfo.coordinates.lng}!3d${businessInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ceef2e8b1f1a1a1%3A0x1a1a1a1a1a1a1a1a!2s${encodeURIComponent(
                businessInfo.fullAddress
              )}!5e0!3m2!1sen!2sca!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mancini's Hair Salon Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
