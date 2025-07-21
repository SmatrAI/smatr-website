import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pillars from "@/components/Pillars";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <Pillars />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
