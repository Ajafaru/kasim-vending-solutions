import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  Dumbbell, 
  Home, 
  Factory,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const industries = [
  {
    id: "offices",
    icon: Building2,
    name: "Offices & Businesses",
    tagline: "Boost productivity with convenient refreshments",
    description: "Keep your team energized and focused with on-site vending that eliminates the need for coffee runs and lunch breaks away from the office.",
    benefits: [
      "Increased employee satisfaction and morale",
      "Reduced time spent leaving for snacks",
      "Premium coffee and beverage options",
      "Healthy alternatives for wellness programs",
      "Customized product selection per department",
    ],
    recommendations: [
      "Combo snack & beverage machines",
      "Fresh-brew coffee machines",
      "Healthy vending options",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "schools",
    icon: GraduationCap,
    name: "Schools & Universities",
    tagline: "Fuel learning with nutritious options",
    description: "Provide students and staff with convenient access to snacks and drinks while meeting nutritional guidelines and promoting healthy choices.",
    benefits: [
      "Smart Snacks compliant options",
      "Reduced cafeteria congestion",
      "Extended hours availability",
      "Student-friendly pricing options",
      "Vending revenue for school programs",
    ],
    recommendations: [
      "Healthy snack machines",
      "Beverage machines with juice options",
      "Cold food machines for meals",
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare Facilities",
    tagline: "24/7 refreshments for those who need it most",
    description: "Hospitals and clinics operate around the clock. We provide reliable vending solutions for staff, patients, and visitors at any hour.",
    benefits: [
      "24/7 availability for all shifts",
      "Healthy options for patient visitors",
      "Quick energy for busy medical staff",
      "HIPAA-conscious service protocols",
      "Sanitary, regularly cleaned machines",
    ],
    recommendations: [
      "Combo machines in waiting areas",
      "Coffee stations for staff lounges",
      "Fresh food options",
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "gyms",
    icon: Dumbbell,
    name: "Gyms & Fitness Centers",
    tagline: "Power workouts with the right fuel",
    description: "Offer your members convenient access to protein shakes, energy drinks, and healthy post-workout snacks right when they need them.",
    benefits: [
      "Protein bars and shakes",
      "Pre and post-workout supplements",
      "Electrolyte and recovery drinks",
      "Low-calorie healthy snacks",
      "Additional revenue stream",
    ],
    recommendations: [
      "Specialized fitness vending",
      "Refrigerated beverage machines",
      "Protein and supplement options",
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "apartments",
    icon: Home,
    name: "Apartments & Condos",
    tagline: "A valued amenity for residents",
    description: "Enhance your property's appeal with convenient vending amenities. Residents appreciate not having to leave for late-night snacks.",
    benefits: [
      "Valued resident amenity",
      "24/7 convenience",
      "Laundry room placement options",
      "No cost to property managers",
      "Professional maintenance included",
    ],
    recommendations: [
      "Snack and beverage combos",
      "Laundry supply machines",
      "Coffee and cold drinks",
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "warehouses",
    icon: Factory,
    name: "Warehouses & Industrial",
    tagline: "Keep workers fueled during long shifts",
    description: "Manufacturing and warehouse workers need easy access to energy and hydration. We provide durable machines that handle high-traffic environments.",
    benefits: [
      "Energy drinks for long shifts",
      "Quick meal and snack access",
      "Reduced break time travel",
      "Rugged, reliable machines",
      "High-capacity inventory",
    ],
    recommendations: [
      "High-capacity combo machines",
      "Fresh food and meal options",
      "Cold beverage stations",
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&q=80",
  },
];

const Industries = () => {
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
              Industries We Serve
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tailored Solutions for Every Industry
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              From corporate headquarters to fitness studios, we understand the unique 
              needs of each environment and customize our service accordingly.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-orange-dark text-accent-foreground">
              <Link to="/contact">
                Find Your Solution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid Navigation */}
      <section className="py-8 bg-secondary border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container-section">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:border-accent hover:text-accent transition-colors text-sm font-medium"
              >
                <industry.icon className="w-4 h-4" />
                {industry.name.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <section 
          key={industry.id}
          id={industry.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}`}
        >
          <div className="container-section">
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <industry.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {industry.name}
                    </h2>
                    <p className="text-accent font-medium">{industry.tagline}</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {industry.benefits.slice(0, 4).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Recommended Machines</h4>
                    <ul className="space-y-2">
                      {industry.recommendations.map((rec) => (
                        <li key={rec} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button asChild className="bg-primary hover:bg-navy-light text-primary-foreground">
                  <Link to="/contact">
                    Get a Quote for Your {industry.name.split(" ")[0]}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection 
        title="Don't See Your Industry?"
        subtitle="We serve many more locations not listed here. Contact us to discuss your specific needs."
      />
    </Layout>
  );
};

export default Industries;
