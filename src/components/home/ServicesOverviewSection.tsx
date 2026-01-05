import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  ShoppingBag, 
  Apple, 
  Palette, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Full-Service Vending",
    description: "Complete vending solutions with machines, products, and ongoing service included. Zero hassle for you.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: ShoppingBag,
    title: "Micro-Markets",
    description: "Open market concept with fresh food, snacks, and beverages. Perfect for larger locations wanting variety.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Apple,
    title: "Healthy Options",
    description: "Nutritious snacks, protein bars, fresh salads, and wellness drinks. Keep your team energized and healthy.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Palette,
    title: "Custom Product Selection",
    description: "We tailor the product mix to your location's preferences. Popular brands plus local favorites.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "24/7 support with rapid response times. We keep your machines running smoothly at all times.",
    color: "bg-red-500/10 text-red-600",
  },
];

export const ServicesOverviewSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-section">
        <SectionHeading
          badge="What We Offer"
          title="Our Services"
          subtitle="Comprehensive vending solutions tailored to your needs. From installation to ongoing maintenance, we've got you covered."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <Link 
                to="/services"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-orange-dark transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-navy-light text-primary-foreground">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
