import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JourneySection from "@/components/JourneySection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <JourneySection />
        <BenefitsSection />
        <FeaturesSection />
        <AboutSection />
        <WhoIsThisForSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
