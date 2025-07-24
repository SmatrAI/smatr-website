import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleJoinWishlist = () => {
    const url = 'https://forms.zohopublic.in/smatrsm1/form/JoinWaitlist/formperma/CKuC-PeS9hmKqy4L46nrWuURa286Ie3Bik1W0YKiJXg';
    const height = 648;
    const width = 700;
    let leftPos = 0;
    let topPos = 0;
    if (screen) {
      leftPos = (screen.width - width) / 2;
      topPos = (screen.height - height) / 2;
      window.open(url, null, `width=${width},height=${height},left=${leftPos},top=${topPos}, toolbar=0, location=0, status=1, scrollbars=1, resizable=1`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(77,115,255,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,179,179,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-urbanist font-bold text-primary-foreground mb-4 tracking-tight">
              Smatr
            </h1>
          </div>
          
          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl font-urbanist font-semibold text-primary-foreground/90 mb-6 leading-tight">
            Your Smart Web Companion
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
            Automate tasks, draft content, and streamline your digital work across websites with intelligent assistance.
          </p>
          
          {/* CTA Button */}
          <Button 
            onClick={handleJoinWishlist}
            size="lg" 
            className="bg-smatr-coral hover:bg-smatr-coral/90 text-white font-urbanist font-semibold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join Wishlist
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;