import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { 
  Target, 
  Heart, 
  Clock, 
  Sparkles,
  CheckCircle,
  Users,
  Award
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "We show up when we say we will. Our machines are always stocked and working.",
  },
  {
    icon: Heart,
    title: "Service Excellence",
    description: "We treat every location like it's our most important. Because it is.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Issues happen. We fix them fast. Our 4-hour response guarantee means less downtime.",
  },
  {
    icon: Sparkles,
    title: "Quality Products",
    description: "Only the best brands and freshest products make it into our machines.",
  },
];

const whyChooseUs = [
  "No upfront costs — ever",
  "Free machine installation and setup",
  "Customized product selection for your location",
  "State-of-the-art machines with modern payment options",
  "Regular cleaning and sanitization",
  "24/7 customer support hotline",
  "Rapid response to service issues",
  "Revenue sharing programs available",
  "Flexible contract terms",
  "Locally owned and operated",
];

const stats = [
  { number: "500+", label: "Locations Served" },
  { number: "99%", label: "Uptime Guarantee" },
  { number: "4hr", label: "Response Time" },
  { number: "10+", label: "Years Experience" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Reliable Vending for Modern Spaces
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We started Kasim Vending with one simple goal: to provide hassle-free vending 
              that businesses can actually rely on. No hidden fees, no excuses — just 
              great service and quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Our Mission"
                title="Making Break Rooms Better"
                centered={false}
              />
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Kasim Vending, we believe that a well-stocked break room is more than 
                  just a convenience — it's a statement that you value the people in your space.
                </p>
                <p>
                  Whether it's an employee taking a quick coffee break, a student grabbing 
                  an afternoon snack, or a hospital visitor needing refreshment during a 
                  long wait, we're there to serve.
                </p>
                <p>
                  Our mission is simple: provide reliable, modern vending solutions that 
                  make life a little easier for everyone. No complicated contracts, no 
                  hidden fees, and no excuses when something goes wrong.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop&q=80"
                  alt="Team working together"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Family Owned</p>
                    <p className="text-sm text-muted-foreground">Local & Trusted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-section">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="These principles guide everything we do, from how we service machines to how we treat our customers."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-2xl p-8 border border-border card-hover text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=500&fit=crop&q=80"
                  alt="Vending machine service"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="The Kasim Difference"
                title="Why Choose Us?"
                centered={false}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-section">
          <SectionHeading
            badge="Our Team"
            title="Meet the People Behind Kasim Vending"
            subtitle="A dedicated team of vending professionals committed to serving your location."
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80"
                    alt="Company Owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Your Name Here
                  </h3>
                  <p className="text-accent font-medium mb-4">Founder & Owner</p>
                  <p className="text-muted-foreground leading-relaxed">
                    "I started Kasim Vending because I saw too many businesses frustrated 
                    with unreliable vending service. Our promise is simple: we show up, 
                    we keep machines full, and we fix problems fast. Your satisfaction 
                    isn't just our goal — it's our reputation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Work With Us?"
        subtitle="Let's discuss how Kasim Vending can improve your break room experience."
      />
    </Layout>
  );
};

export default About;
