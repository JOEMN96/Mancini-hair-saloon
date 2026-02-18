import { useState } from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageTitle } from "@/components/ui/page-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { businessInfo, hoursConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Calendar } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <PageContainer>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <PageTitle className="mb-4">Contact Us</PageTitle>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Have questions or want to book an appointment? Get in touch with us today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
                For immediate assistance, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(613) 555-5555"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>

                {isSubmitted && (
                  <p className="text-green-600 text-center p-4 bg-green-50 rounded-lg">
                    Thank you for your message! This is a demo form - in production,
                    this would be sent to our team.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book an Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For the fastest service, book your appointment online.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/book">Book Online Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">{businessInfo.name}</p>
                    <p className="text-muted-foreground">
                      {businessInfo.fullAddress}
                    </p>
                  </div>
                  <div className="h-[200px] rounded-lg overflow-hidden bg-muted">
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
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={businessInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {businessInfo.phoneFormatted}
                  </a>
                  {businessInfo.email && (
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      {businessInfo.email}
                    </a>
                  )}
                  <div className="flex gap-3 pt-4">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hours</CardTitle>
                </CardHeader>
                <CardContent>
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
                  <p className="text-xs text-muted-foreground mt-4">
                    {hoursConfig.note}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
