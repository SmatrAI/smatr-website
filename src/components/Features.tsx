import { Brain, MessageSquare, Bookmark, BarChart3, Download, MousePointer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Real-time Understanding",
      description: "AI-powered analysis of web pages and user intent based on your browsing history and patterns.",
      highlight: "Smart Context Awareness"
    },
    {
      icon: MessageSquare,
      title: "Voice & Chat Interaction",
      description: "Seamlessly interact with your digital companion through voice commands or chat about any webpage, history, or ideas.",
      highlight: "Natural Conversations"
    },
    {
      icon: Bookmark,
      title: "Smart Management",
      description: "Intelligently organize bookmarks, passwords, and history. Export information in your preferred format.",
      highlight: "Automated Organization"
    },
    {
      icon: BarChart3,
      title: "Insightful Analytics",
      description: "Comprehensive insights into your browsing patterns, website categories, visit frequency, and productivity metrics.",
      highlight: "Data-Driven Insights"
    },
    {
      icon: Download,
      title: "Chrome Extension",
      description: "Available as a Chrome add-on with plans for expansion to other browsers and platforms.",
      highlight: "Easy Installation"
    },
    {
      icon: MousePointer,
      title: "Automated Browsing",
      description: "Advanced cursor control and browsing automation for repetitive tasks and workflows.",
      highlight: "Premium Feature"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block text-primary">Smarter Browsing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Smatr transforms your digital experience with cutting-edge AI technology and intuitive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  {feature.highlight === "Premium Feature" && (
                    <span className="text-xs bg-gradient-accent text-primary-foreground px-2 py-1 rounded-full font-medium">
                      Pro
                    </span>
                  )}
                </div>
                <span className="text-sm text-primary font-medium">
                  {feature.highlight}
                </span>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;