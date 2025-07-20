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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Smatr
            </h1>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-slide-up">
            Your Smart
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Digital Companion
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Experience the future of browsing with AI-powered personalization, 
            uncompromising privacy, and complete control over your digital journey.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="default" className="px-6 py-3">
              <Download className="w-4 h-4" />
              Download Chrome Extension
            </Button>
            <Button variant="outline" size="default" className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Play className="w-4 h-4" />
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