import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showForm?: boolean;
}
export const CTASection = ({
  title = "Ready to Upgrade Your Break Room?",
  subtitle = "Get a free, no-obligation quote for your location. Our team will assess your needs and recommend the perfect vending solution.",
  showForm = false
}: CTASectionProps) => {
  return <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-orange-dark text-accent-foreground text-lg px-8 btn-glow">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-accent bg-accent/20 text-white hover:bg-accent hover:text-accent-foreground text-lg px-8">
              <a href="tel:+447862061181">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            ✓ No upfront costs &nbsp;•&nbsp; ✓ Free installation &nbsp;•&nbsp; ✓ 24/7 support
          </p>
        </div>
      </div>
    </section>;
};