import { PageContainer } from "@/components/layout/PageContainer";
import { useEffect } from "react";

export function Book() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <PageContainer>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Book Your Appointment</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Select a time that works for you below to book your appointment at Mancini's Hair Salon.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/aruljoe37/30min"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      </section>
    </PageContainer>
  );
}
