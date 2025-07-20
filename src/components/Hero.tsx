import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/3ba6212c-a865-420b-8879-8a440b1ccac9.png" 
              alt="Smatr Logo" 
              className="h-16 mx-auto mb-6"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 animate-slide-up">
            Your Smart
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Digital Companion
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Experience the future of browsing with AI-powered personalization, 
            uncompromising privacy, and complete control over your digital journey.
          </p>

          {/* Three pillars preview */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-gradient-accent"></div>
              <span className="text-primary-foreground font-medium">Personalization</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-gradient-accent"></div>
              <span className="text-primary-foreground font-medium">Privacy</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-gradient-accent"></div>
              <span className="text-primary-foreground font-medium">Control</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5" />
              Download Chrome Extension
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowRight className="w-6 h-6 text-primary-foreground/60 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;