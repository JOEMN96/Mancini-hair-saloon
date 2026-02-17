import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Sparkles, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceCategories } from "@/data/services";

const iconMap = {
  scissors: Scissors,
  sparkles: Sparkles,
  droplets: Droplets,
};

const categoryIcons = [
  { key: "ladies-regular", icon: "scissors" },
  { key: "ladies-specialty", icon: "sparkles" },
  { key: "mens-regular", icon: "scissors" },
];

export function ServicesPreview() {
  const previewCategories = serviceCategories.slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From precision cuts to stunning color transformations, our expert stylists
            are here to make you look and feel your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewCategories.map((category, index) => {
            const iconConfig = categoryIcons.find((c) => c.key === category.id);
            const IconComponent = iconConfig
              ? iconMap[iconConfig.icon as keyof typeof iconMap]
              : Scissors;

            return (
              <Card
                key={category.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <p className="text-sm font-medium">
                    {category.services.length} services available
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services" className="inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
