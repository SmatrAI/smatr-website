import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Download, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/15 to-purple-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-subtle rounded-3xl p-8 md:p-12 backdrop-blur-md">
          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-slide-up">
            Transform Your
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-shimmer hover-glass font-extrabold text-glow">
              Browsing Experience
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/70 mb-8 animate-slide-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Supercharge your productivity with intelligent tools, seamless workflow integration, 
            and advanced features designed for modern professionals and power users.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-8" style={{ animationDelay: '0.4s' }}>
            <Button variant="default" size="lg" className="px-8 py-3 glass-strong hover-glass text-white font-semibold">
              <Download className="w-5 h-5 mr-2" />
              Download Chrome Extension
            </Button>
            
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3 glass border-white/30 text-foreground hover-glass font-semibold"
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
            <div className="text-center group hover-glass glass-subtle rounded-2xl p-6">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 animate-pulse">10K+</div>
              <div className="text-sm text-foreground/60">Early Adopters</div>
            </div>
            <div className="text-center group hover-glass glass-subtle rounded-2xl p-6">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 animate-pulse" style={{ animationDelay: '0.2s' }}>99%</div>
              <div className="text-sm text-foreground/60">Satisfaction Rate</div>
            </div>
            <div className="text-center group hover-glass glass-subtle rounded-2xl p-6">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 animate-pulse" style={{ animationDelay: '0.4s' }}>50+</div>
              <div className="text-sm text-foreground/60">Features</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce glass-subtle rounded-full p-3">
            <ArrowRight className="w-6 h-6 text-foreground/60 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;