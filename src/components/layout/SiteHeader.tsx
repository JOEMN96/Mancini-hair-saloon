import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { businessInfo } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">{businessInfo.shortName}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${businessInfo.phone}`} className="text-sm font-medium text-muted-foreground hover:text-primary">
              {businessInfo.phoneFormatted}
            </a>
            <ThemeToggle />
            <Button asChild>
              <Link to="/book">Book Now</Link>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary py-2",
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t">
              <a href={`tel:${businessInfo.phone}`} className="text-base font-medium text-muted-foreground">
                {businessInfo.phoneFormatted}
              </a>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Button asChild className="w-full">
                <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
