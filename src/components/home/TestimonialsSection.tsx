import { SectionHeading } from "@/components/SectionHeading";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Office Manager",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    quote: "Kasim Vending transformed our break room. The variety is amazing, and the service is impeccable. Our employees love having healthy options available.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Facilities Director",
    company: "Metro Health Center",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    quote: "As a 24/7 healthcare facility, we needed reliable vending. Kasim delivers every time. Fast restocks and machines that never seem to break down.",
    rating: 5,
  },
  {
    name: "Jennifer Adams",
    role: "Gym Owner",
    company: "FitLife Studios",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    quote: "The protein shakes and healthy snacks are perfect for our members. It's an added revenue stream we didn't have before. Great partnership!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-section">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what business owners and facility managers say about working with us."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border card-hover relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
