import { Link } from "react-router-dom";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo, hoursConfig } from "@/data/siteConfig";

export function SiteFooter() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{businessInfo.name}</h3>
            <div className="space-y-3">
              <a
                href={businessInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>{businessInfo.fullAddress}</span>
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>{businessInfo.phoneFormatted}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <div className="space-y-2">
              {hoursConfig.hours.map((hours) => (
                <div
                  key={hours.day}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground">{hours.day}</span>
                  <span>
                    {hours.isClosed
                      ? "Closed"
                      : `${hours.open} - ${hours.close}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <Button asChild className="w-full">
              <a
                href={businessInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
