import { Zap, RefreshCw, Wrench, Palette } from "lucide-react";

const trustItems = [
  { icon: Zap, text: "Fast Install" },
  { icon: RefreshCw, text: "Restocking Included" },
  { icon: Wrench, text: "Maintenance Included" },
  { icon: Palette, text: "Custom Product Mix" },
];

export const TrustBar = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary border-y border-border">
      <div className="container-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={item.text}
              className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="font-semibold text-foreground text-sm md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
