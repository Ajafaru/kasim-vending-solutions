import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Package, 
  ShoppingBag, 
  Apple, 
  Palette, 
  Wrench,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Truck
} from "lucide-react";

const mainServices = [
  {
    id: "full-service",
    icon: Package,
    title: "Full-Service Vending",
    description: "Our signature offering. We provide the machine, stock the products, and handle all maintenance — completely free of charge.",
    benefits: [
      "No upfront costs or rental fees",
      "Free delivery and installation",
      "Regular restocking based on demand",
      "24/7 technical support",
      "Remote monitoring technology",
      "Revenue sharing available",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "micro-markets",
    icon: ShoppingBag,
    title: "Micro-Markets",
    description: "An open-concept marketplace right in your break room. Fresh food, snacks, and drinks available 24/7 with self-checkout kiosks.",
    benefits: [
      "Expanded product selection (100+ items)",
      "Fresh food and meal options",
      "Self-checkout convenience",
      "Customizable layout and design",
      "Real-time inventory management",
      "Employee discount programs",
    ],
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "healthy",
    icon: Apple,
    title: "Healthy Vending Options",
    description: "Promote wellness at your workplace with machines stocked with nutritious snacks, organic options, and better-for-you beverages.",
    benefits: [
      "Low-sugar and sugar-free drinks",
      "Protein bars and shakes",
      "Fresh salads and sandwiches",
      "Organic and natural snacks",
      "Allergy-friendly options",
      "Calorie-labeled selections",
    ],
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "custom",
    icon: Palette,
    title: "Custom Product Selection",
    description: "We work with you to curate the perfect product mix. Tell us what your people want, and we'll make it happen.",
    benefits: [
      "Personalized product surveys",
      "Local and regional favorites",
      "Seasonal and rotating items",
      "Brand-specific requests",
      "Cultural and dietary preferences",
      "Exclusive product launches",
    ],
    image: "https://images.unsplash.com/photo-1571211905393-6de67ff8fb61?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Our dedicated service team ensures your machines are always running perfectly. Fast response times and proactive care.",
    benefits: [
      "24/7 customer support hotline",
      "4-hour response time guarantee",
      "Preventive maintenance visits",
      "Remote diagnostics",
      "Full refund for failed transactions",
      "Machine cleaning and sanitization",
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop&q=80",
  },
];

const paymentFeatures = [
  { icon: CreditCard, title: "Credit & Debit Cards", description: "All major cards accepted" },
  { icon: Shield, title: "Contactless Payment", description: "Apple Pay, Google Pay, Samsung Pay" },
  { icon: Clock, title: "Cash Accepted", description: "With change dispensing" },
  { icon: Truck, title: "Mobile Apps", description: "Pay via vending apps" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold bg-accent/20 text-accent rounded-full">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete Vending Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              From machine placement to ongoing maintenance, we handle everything. 
              You provide the space — we provide the service.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-orange-dark text-accent-foreground">
              <Link to="/contact">
                Request a Site Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {mainServices.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}`}
        >
          <div className="container-section">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="bg-primary hover:bg-navy-light text-primary-foreground">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Payment Options */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-section">
          <SectionHeading
            badge="Payment Options"
            title="Modern Payment Technology"
            subtitle="Our machines accept all modern payment methods for maximum convenience."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Get Started?"
        subtitle="Request a free site assessment and let's find the perfect vending solution for your location."
      />
    </Layout>
  );
};

export default Services;
