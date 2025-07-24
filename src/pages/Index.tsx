import HeroSection from "@/components/HeroSection";
import WhatSmatrDoes from "@/components/WhatSmatrDoes";
import FeaturesSection from "@/components/FeaturesSection";
import WhySmatrSection from "@/components/WhySmatrSection";
import WishlistSection from "@/components/WishlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhatSmatrDoes />
      <FeaturesSection />
      <WhySmatrSection />
      <WishlistSection />
      <Footer />
    </div>
  );
};

export default Index;
