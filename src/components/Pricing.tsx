import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download, Star } from "lucide-react";

const Pricing = () => {
  const freeFeatures = [
    "Basic browsing enhancement",
    "Essential productivity tools",
    "Simple bookmarking",
    "Basic search assistance",
    "Community support"
  ];

  const proFeatures = [
    "All free features included",
    "Advanced AI-powered search",
    "Smart tab management",
    "Custom workflow automation",
    "Advanced productivity analytics",
    "Priority customer support",
    "Cloud sync across devices",
    "Custom themes and layouts"
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you need more power for your productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-elegant">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-display mb-2">Free</CardTitle>
              <CardDescription className="text-lg">Perfect for getting started</CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" size="lg">
                <Download className="w-4 h-4" />
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-primary bg-primary/5 relative overflow-hidden hover:shadow-glow transition-all duration-300">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Most Popular
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-display mb-2 flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-primary" />
                Pro
              </CardTitle>
              <CardDescription className="text-lg">For power users and professionals</CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">$15</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" className="w-full" size="lg">
                <Download className="w-4 h-4" />
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            30-day money-back guarantee • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;