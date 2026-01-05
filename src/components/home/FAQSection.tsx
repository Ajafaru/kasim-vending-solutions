import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a cost for the vending machine?",
    answer: "No! We provide machines at no cost to you. There are no installation fees, rental charges, or hidden costs. We earn by selling products — you just provide the space.",
  },
  {
    question: "How quickly can you install a machine?",
    answer: "In most cases, we can have a machine installed within 5-7 business days of approval. For urgent requests, we offer expedited installation within 48 hours.",
  },
  {
    question: "What products do you stock?",
    answer: "We offer a wide variety including popular snacks, cold beverages, healthy options, energy drinks, and fresh food. We customize the product mix based on your location's preferences and can accommodate special requests.",
  },
  {
    question: "How often do you restock and service machines?",
    answer: "We service machines regularly based on usage — typically 1-2 times per week for busy locations. We also monitor machines remotely to ensure they're always stocked with popular items.",
  },
  {
    question: "What payment methods do your machines accept?",
    answer: "Our modern machines accept cash, credit/debit cards, Apple Pay, Google Pay, and Samsung Pay. Some locations also offer employee badge payment integration.",
  },
  {
    question: "What happens if a machine breaks down?",
    answer: "Call our 24/7 support line and we'll have a technician on-site within 4-24 hours depending on the issue. We also provide refunds for any failed purchases.",
  },
  {
    question: "Can I choose the products in the machine?",
    answer: "Absolutely! We work with you to create a custom product selection that fits your team's preferences. Just let us know what you'd like and we'll make it happen.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers. Here are the most common things people ask about our vending services."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
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
      </div>
    </section>
  );
};
