import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-section relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-accent bg-accent/20 rounded-full animate-fade-in">
              🏆 Trusted by 500+ Locations
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-slide-up">
              Modern Vending Solutions for{" "}
              <span className="text-accent">Your Location</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up stagger-1">
              Hassle-free vending machines with premium snacks, refreshing drinks, and healthy options. 
              We handle everything — installation, stocking, and maintenance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-2">
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-orange-dark text-accent-foreground text-lg px-8 py-6 btn-glow"
              >
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <a href="tel:+1234567890">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
              {["Fast Install", "Free Service", "24/7 Support"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative hidden lg:block animate-scale-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=700&fit=crop&q=80"
                  alt="Modern vending machine in office"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl z-20 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">99%</p>
                    <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-6 py-3 shadow-xl z-20">
                <p className="text-sm font-semibold">No Upfront Costs!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
