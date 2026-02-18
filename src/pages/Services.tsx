import { PageContainer } from "@/components/layout/PageContainer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories, priceNote } from "@/data/services";
import { Scissors, Sparkles, User, UserPlus, Baby, type LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  "ladies-regular": Scissors,
  "ladies-specialty": Sparkles,
  "ladies-senior": User,
  "mens-regular": User,
  "mens-senior": User,
  "teen-rates": UserPlus,
  "junior-rates": Baby,
};

export function Services() {
  return (
    <PageContainer>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From precision cuts to stunning color transformations, our expert stylists
              offer a wide range of services to help you look and feel your best.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button size="lg" asChild>
              <Link to="/book">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {serviceCategories.map((category) => {
              const IconComponent =
                categoryIcons[category.id] || Scissors;

              return (
                <Card key={category.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                      {category.name}
                    </CardTitle>
                    {category.description && (
                      <p className="text-muted-foreground text-sm mt-1">
                        {category.description}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {category.services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center justify-between p-4 hover:bg-muted/20 transition-colors"
                        >
                          <div>
                            <p className="font-medium">{service.name}</p>
                            {service.description && (
                              <p className="text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg">
                              ${service.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg text-center">
            <p className="text-muted-foreground">{priceNote}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Click the button below to book your appointment online, or give us a call
            if you have any questions.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
          >
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}
