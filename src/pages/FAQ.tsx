import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqCategories = [
  {
    name: "Getting Started",
    faqs: [
      {
        question: "Is there a cost for the vending machine?",
        answer: "No! We provide machines at no cost to you. There are no installation fees, rental charges, or hidden costs. We earn by selling products — you just provide the space and electrical outlet.",
      },
      {
        question: "What are the requirements for a vending machine placement?",
        answer: "We need a location with at least 50 regular visitors/employees, a standard electrical outlet, and enough space for the machine (typically 3' x 3' area). We'll assess your space during our free site visit.",
      },
      {
        question: "How quickly can you install a machine?",
        answer: "In most cases, we can have a machine installed within 5-7 business days of approval. For urgent requests, we offer expedited installation within 48 hours.",
      },
      {
        question: "Is there a contract or commitment required?",
        answer: "We offer flexible terms. While we do have service agreements, we don't lock you into long-term contracts. If you're not satisfied, we'll work with you or remove the machine at no cost.",
      },
    ],
  },
  {
    name: "Products & Selection",
    faqs: [
      {
        question: "What products do you stock?",
        answer: "We offer a wide variety including popular snacks (chips, candy, cookies), cold beverages (soda, water, energy drinks, juices), healthy options (protein bars, nuts, fresh food), and coffee. We customize the selection based on your location's preferences.",
      },
      {
        question: "Can I choose the products in the machine?",
        answer: "Absolutely! We work with you to create a custom product selection that fits your team's preferences. Just let us know what you'd like and we'll make it happen. We can also rotate products seasonally.",
      },
      {
        question: "Do you offer healthy vending options?",
        answer: "Yes! We have dedicated healthy vending machines featuring low-sugar drinks, protein snacks, fresh salads, whole grain options, and organic products. Many of our locations are moving toward healthier selections.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer: "Yes, we can stock gluten-free, vegan, kosher, and allergen-friendly options. Just let us know your requirements and we'll source appropriate products.",
      },
    ],
  },
  {
    name: "Service & Maintenance",
    faqs: [
      {
        question: "How often do you restock and service machines?",
        answer: "We service machines regularly based on usage — typically 1-2 times per week for busy locations. We also use remote monitoring to ensure popular items are always in stock.",
      },
      {
        question: "What happens if a machine breaks down?",
        answer: "Call our 24/7 support line and we'll have a technician on-site within 4-24 hours depending on the issue. We also provide refunds for any failed purchases.",
      },
      {
        question: "Who handles cleaning and sanitization?",
        answer: "We do! Our service technicians clean and sanitize machines during every visit. We follow strict hygiene protocols to ensure products are stored safely.",
      },
      {
        question: "What if a product gets stuck in the machine?",
        answer: "If a product gets stuck, the customer can call our number on the machine for an immediate refund or credit. Our technicians will address the issue on the next visit.",
      },
    ],
  },
  {
    name: "Payment & Technology",
    faqs: [
      {
        question: "What payment methods do your machines accept?",
        answer: "Our modern machines accept cash, credit/debit cards, Apple Pay, Google Pay, Samsung Pay, and other contactless payments. Some locations also offer employee badge payment integration.",
      },
      {
        question: "Do you offer cashless-only machines?",
        answer: "Yes! Many of our newer locations prefer cashless machines. These are sleeker, require less maintenance, and offer faster transactions.",
      },
      {
        question: "Can employees use a company account or badge?",
        answer: "Yes, we can integrate with many employee badge systems and set up company subsidized accounts. Contact us to discuss options for your organization.",
      },
    ],
  },
  {
    name: "Business & Revenue",
    faqs: [
      {
        question: "Is there a revenue sharing option?",
        answer: "Yes! For high-traffic locations, we offer revenue sharing programs where you receive a percentage of sales. Terms depend on location volume and agreement specifics.",
      },
      {
        question: "Can you provide sales reports?",
        answer: "Absolutely. We can provide regular sales reports showing which products are popular, sales volume, and trends. This helps us optimize the product mix together.",
      },
      {
        question: "Do you serve small businesses?",
        answer: "Yes, we serve locations of all sizes. While we typically recommend at least 50 daily visitors for a full-size machine, we have smaller options for boutique offices and compact spaces.",
      },
    ],
  },
];

const FAQ = () => {
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
              FAQ
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Got questions? We've got answers. Find everything you need to know 
              about our vending services below.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.name}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {category.name}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5 [&[data-state=open]>svg]:text-accent">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-secondary/50">
        <div className="container-section">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? We're here to help. 
              Reach out and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-orange-dark text-accent-foreground">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+1234567890">
                  Call (123) 456-7890
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default FAQ;
