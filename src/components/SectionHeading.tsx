import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export const SectionHeading = ({ 
  badge, 
  title, 
  subtitle, 
  centered = true,
  children 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-accent bg-accent/10 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};
