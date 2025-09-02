import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-smatr-slate/10 border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-urbanist font-bold text-primary mb-4">
              Smatr
            </h3>
            <p className="text-muted font-inter leading-relaxed max-w-md mb-6">
              Your smart web companion for automating tasks, drafting content, and streamlining digital work across websites.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@smatr.ai" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-urbanist font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 font-inter">
              <li><a href="#features" className="text-muted hover:text-primary transition-colors">Features</a></li>
              <li><a href="#demo" className="text-muted hover:text-primary transition-colors">Demo</a></li>
              <li><a href="#pricing" className="text-muted hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#roadmap" className="text-muted hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-urbanist font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 font-inter">
              <li><a href="#about" className="text-muted hover:text-primary transition-colors">About</a></li>
              <li><a href="#blog" className="text-muted hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-muted hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-muted hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted font-inter">
            © 2024 Smatr. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm font-inter">
            <a href="/privacy" className="text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-muted hover:text-primary transition-colors">Terms and Conditions</a>
            <a href="#cookies" className="text-muted hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
