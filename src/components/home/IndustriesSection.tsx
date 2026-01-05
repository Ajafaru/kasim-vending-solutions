import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  Dumbbell, 
  Home, 
  Factory,
  ArrowRight 
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Offices & Businesses",
    description: "Keep employees energized with convenient break room solutions.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&q=80",
    href: "/industries#offices",
  },
  {
    icon: GraduationCap,
    name: "Schools & Universities",
    description: "Fuel students and staff with healthy snacks and drinks.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&q=80",
    href: "/industries#schools",
  },
  {
    icon: Heart,
    name: "Healthcare Facilities",
    description: "24/7 refreshments for staff, patients, and visitors.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&q=80",
    href: "/industries#healthcare",
  },
  {
    icon: Dumbbell,
    name: "Gyms & Fitness Centers",
    description: "Protein shakes, energy drinks, and healthy post-workout snacks.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&q=80",
    href: "/industries#gyms",
  },
  {
    icon: Home,
    name: "Apartments & Condos",
    description: "Convenient amenities that residents love and appreciate.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&q=80",
    href: "/industries#apartments",
  },
  {
    icon: Factory,
    name: "Warehouses & Industrial",
    description: "Keep workers fueled during long shifts with easy access.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop&q=80",
    href: "/industries#warehouses",
  },
];

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <SectionHeading
          badge="Who We Serve"
          title="Industries We Serve"
          subtitle="From corporate offices to fitness centers, we provide tailored vending solutions for every environment."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Link
              key={industry.name}
              to={industry.href}
              className="group relative overflow-hidden rounded-2xl card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img 
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                    <industry.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">
                    {industry.name}
                  </h3>
                </div>
                <p className="text-white/80 text-sm mb-3">
                  {industry.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent group-hover:text-orange-light transition-colors">
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
