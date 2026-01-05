import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const industries = [
  "Office / Business",
  "School / University",
  "Healthcare Facility",
  "Gym / Fitness Center",
  "Apartment / Condo",
  "Warehouse / Industrial",
  "Hotel / Hospitality",
  "Other",
];

const employeeCounts = [
  "Under 25",
  "25-50",
  "51-100",
  "101-250",
  "251-500",
  "500+",
];

const interests = [
  { id: "snacks", label: "Snacks" },
  { id: "drinks", label: "Beverages" },
  { id: "both", label: "Both Snacks & Drinks" },
  { id: "healthy", label: "Healthy Options" },
  { id: "micro-market", label: "Micro-Market" },
  { id: "coffee", label: "Coffee Service" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedInterests([...selectedInterests, id]);
    } else {
      setSelectedInterests(selectedInterests.filter((i) => i !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Quote Request Received!",
      description: "We'll be in touch within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding bg-background min-h-[60vh] flex items-center">
          <div className="container-section">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your quote request has been received. One of our team members will contact 
                you within 24 hours to discuss your vending needs.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-primary hover:bg-navy-light text-primary-foreground"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold bg-accent/20 text-accent rounded-full">
              Get Started
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get a Free Quote
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Ready to upgrade your break room? Fill out the form below and we'll 
              get back to you within 24 hours with a customized vending solution.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required placeholder="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Business/Organization Name *</Label>
                      <Input id="company" required placeholder="ABC Company" />
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                    Location Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Address / City *</Label>
                      <Input id="address" required placeholder="123 Main St, City, State" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry.toLowerCase()}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Estimated People On-Site *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          {employeeCounts.map((count) => (
                            <SelectItem key={count} value={count.toLowerCase()}>
                              {count}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                    What Are You Interested In?
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {interests.map((interest) => (
                      <div 
                        key={interest.id}
                        className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-accent transition-colors"
                      >
                        <Checkbox 
                          id={interest.id}
                          checked={selectedInterests.includes(interest.id)}
                          onCheckedChange={(checked) => 
                            handleInterestChange(interest.id, checked as boolean)
                          }
                        />
                        <Label htmlFor={interest.id} className="cursor-pointer">
                          {interest.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Tell us more about your needs, preferred products, or any questions you have..."
                    rows={4}
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-accent hover:bg-orange-dark text-accent-foreground text-lg px-12"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-secondary rounded-2xl p-8 border border-border">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <a 
                      href="tel:+1234567890"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          (123) 456-7890
                        </p>
                        <p className="text-sm text-muted-foreground">Call us anytime</p>
                      </div>
                    </a>
                    <a 
                      href="mailto:info@kasimvending.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          info@kasimvending.com
                        </p>
                        <p className="text-sm text-muted-foreground">Email us anytime</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Service Area</p>
                        <p className="text-sm text-muted-foreground">
                          Greater Metro Area<br />
                          Your City, State
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Mon - Fri: 8AM - 6PM<br />
                          Sat: 9AM - 2PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Quick Response Guaranteed
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Submit your request and we'll get back to you within 24 hours. 
                    Need faster service? Give us a call!
                  </p>
                  <div className="flex items-center gap-2 text-accent">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">24-hour response time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
