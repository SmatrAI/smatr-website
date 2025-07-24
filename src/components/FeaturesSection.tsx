import { Card } from "@/components/ui/card";
import { Bot, Zap, Shield, Globe, PenTool, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Intelligent task automation that learns from your patterns and preferences",
      color: "smatr-blue"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Drafting",
      description: "Generate emails, documents, and responses with context-aware AI assistance",
      color: "smatr-sky"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Website Integration",
      description: "Seamlessly work across multiple websites and platforms with unified experience",
      color: "smatr-teal"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Instant responses and real-time assistance that keeps up with your workflow",
      color: "smatr-coral"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your data stays secure with end-to-end encryption and local processing",
      color: "smatr-yellow"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Saving",
      description: "Reduce repetitive tasks by up to 80% with smart automation workflows",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-urbanist font-bold text-primary mb-6">
            Powerful Features
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto font-inter">
            Everything you need to transform your digital workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm group"
            >
              <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-${feature.color}`}>
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-urbanist font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted font-inter leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;