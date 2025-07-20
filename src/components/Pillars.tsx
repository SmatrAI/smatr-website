import { Shield, User, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pillars = () => {
  const pillars = [
    {
      icon: User,
      title: "Personalization",
      description: "Smatr learns from your browsing patterns, preferences, and digital habits to provide tailored recommendations and insights that truly understand your needs.",
      features: [
        "Adaptive learning algorithms",
        "Personalized recommendations", 
        "Context-aware suggestions",
        "Custom workflow automation"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Privacy",
      description: "Your data stays yours. We employ state-of-the-art encryption and local processing to ensure your digital footprint remains private and secure.",
      features: [
        "End-to-end encryption",
        "Local data processing",
        "Zero data collection",
        "Transparent privacy controls"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Control",
      description: "Complete transparency and control over your digital experience. Customize every aspect of how Smatr works with your browsing habits.",
      features: [
        "Granular privacy settings",
        "Customizable automation",
        "Data export options",
        "Full user autonomy"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Built on Three
            <span className="block text-primary">Core Pillars</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to creating a digital companion that respects your needs, protects your privacy, and puts you in complete control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover:shadow-tech transition-all duration-500 hover:-translate-y-4 border-border/50"
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.gradient}`} />
              
              <CardHeader className="pb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {pillar.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience browsing that adapts to you?
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-primary">Join the waitlist for early access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;