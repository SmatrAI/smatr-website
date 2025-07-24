import { Card } from "@/components/ui/card";
import { Brain, Lock, Smile } from "lucide-react";

const WhySmatrSection = () => {
  const reasons = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Intelligent",
      description: "Advanced AI that understands context, learns from your behavior, and adapts to your workflow preferences.",
      highlight: "Learns & Adapts"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Private",
      description: "Your data never leaves your device. All processing happens locally with enterprise-grade security.",
      highlight: "100% Secure"
    },
    {
      icon: <Smile className="w-12 h-12" />,
      title: "Simple",
      description: "No complex setup or learning curve. Start getting value from day one with intuitive interactions.",
      highlight: "Just Works"
    }
  ];

  return (
    <section className="py-20 bg-smatr-lilac/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-urbanist font-bold text-primary mb-6">
            Why Choose Smatr?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto font-inter">
            Built with the principles that matter most to modern professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-10 text-center border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-smatr-lilac/20 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {reason.icon}
                  </div>
                </div>
                
                <div className="inline-block bg-smatr-coral/10 text-smatr-coral text-sm font-urbanist font-semibold px-4 py-2 rounded-full mb-4">
                  {reason.highlight}
                </div>
                
                <h3 className="text-2xl font-urbanist font-bold text-primary mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-muted font-inter leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-urbanist font-bold text-primary mb-4">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-muted font-inter mb-6">
              Join thousands of professionals who are already saving hours every day
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm text-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free during beta</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Early access perks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySmatrSection;