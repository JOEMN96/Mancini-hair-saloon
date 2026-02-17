import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/card";
import { businessInfo, aboutContent } from "@/data/siteConfig";
import { Award, Heart, Sparkles, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Exceptional Service",
      description:
        "We're committed to providing the highest quality service to every client who walks through our doors.",
    },
    {
      icon: Heart,
      title: "Warm Atmosphere",
      description:
        "Our salon is a welcoming space where everyone feels comfortable and at ease.",
    },
    {
      icon: Sparkles,
      title: "Professional Expertise",
      description:
        "Our team brings years of experience and continuous training to deliver outstanding results.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your satisfaction is our priority. We listen to your needs and work to exceed your expectations.",
    },
  ];

  return (
    <PageContainer>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {aboutContent.title}
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutContent.story}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Values</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            These core values guide everything we do at {businessInfo.name}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Visit Our Salon</h2>
              <p className="text-muted-foreground mb-6">
                We're conveniently located in Kanata, Ottawa. Come experience the
                Mancini's difference for yourself.
              </p>
              <div className="space-y-3">
                <p className="font-medium">{businessInfo.name}</p>
                <p className="text-muted-foreground">{businessInfo.fullAddress}</p>
                <p className="text-muted-foreground">
                  {businessInfo.phoneFormatted}
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-[300px] bg-muted">
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
    </PageContainer>
  );
}
