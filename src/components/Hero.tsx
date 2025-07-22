import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Download, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-slide-up text-glow">
            Transform Your
            <span className="block bg-gradient-to-r from-[hsl(25,95%,60%)] via-[hsl(280,85%,60%)] to-[hsl(240,85%,65%)] bg-clip-text text-transparent animate-shimmer hover-scale font-extrabold">
              Browsing Experience
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Supercharge your productivity with intelligent tools, seamless workflow integration, 
            and advanced features designed for modern professionals and power users.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-8" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="sm" className="px-4 py-2 hover-scale animate-glow-pulse">
              <Download className="w-4 h-4" />
              Download Chrome Extension
            </Button>
            
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover-scale"
                >
                  Join Waitlist for Early Access
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Join Our Waitlist</DialogTitle>
                </DialogHeader>
                <div id="zf_div_modal_CKuC-PeS9hmKqy4L46nrWuURa286Ie3Bik1W0YKiJXg" className="min-h-[600px]">
                  <iframe 
                    src="https://forms.zohopublic.in/smatrsm1/form/JoinWaitlist/formperma/CKuC-PeS9hmKqy4L46nrWuURa286Ie3Bik1W0YKiJXg?zf_rszfm=1"
                    style={{ border: 'none', height: '600px', width: '100%' }}
                    title="Join Waitlist Form"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Enhanced Stats or Features */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group hover-scale">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1 animate-pulse">10K+</div>
              <div className="text-sm text-primary-foreground/70">Early Adopters</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1 animate-pulse" style={{ animationDelay: '0.2s' }}>99%</div>
              <div className="text-sm text-primary-foreground/70">Satisfaction Rate</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1 animate-pulse" style={{ animationDelay: '0.4s' }}>50+</div>
              <div className="text-sm text-primary-foreground/70">Features</div>
            </div>
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