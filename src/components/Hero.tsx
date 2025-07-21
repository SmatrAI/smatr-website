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
          <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6 animate-slide-up">
            Transform Your
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
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
            <Button variant="hero" size="sm" className="px-4 py-2">
              <Download className="w-4 h-4" />
              Download Chrome Extension
            </Button>
            
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Join Waitlist
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

          {/* Alternative: Inline Form Section */}
          <div className="max-w-2xl mx-auto animate-slide-up bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4 text-center">Get Early Access</h3>
            <div className="text-center text-primary-foreground/70 mb-4">
              <p className="text-sm">Join our waitlist to be the first to experience Smatr when it launches</p>
            </div>
            <div id="zf_div_CKuC-PeS9hmKqy4L46nrWuURa286Ie3Bik1W0YKiJXg" className="min-h-[400px]"></div>
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