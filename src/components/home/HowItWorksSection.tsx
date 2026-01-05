import { SectionHeading } from "@/components/SectionHeading";
import { ClipboardList, Truck, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Request a Quote",
    description: "Tell us about your location, foot traffic, and preferences. We'll recommend the perfect vending solution.",
  },
  {
    number: "02",
    icon: Truck,
    title: "We Install",
    description: "Our team delivers and installs your machine at no cost. We handle all setup and ensure everything works perfectly.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "We Maintain",
    description: "Sit back and relax. We keep your machines stocked, clean, and running smoothly with regular service visits.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <SectionHeading
          badge="Simple Process"
          title="How It Works"
          subtitle="Getting started with Kasim Vending is easy. We handle everything so you can focus on what matters."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                </div>
              )}

              <div className="relative z-10 bg-card rounded-2xl p-8 border border-border card-hover text-center">
                {/* Step Number */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
                  Step {step.number}
                </span>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <step.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
