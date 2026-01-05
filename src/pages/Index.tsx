import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ServicesOverviewSection } from "@/components/home/ServicesOverviewSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBar />
      <HowItWorksSection />
      <ServicesOverviewSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
