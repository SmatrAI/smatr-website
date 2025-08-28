import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-inter">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-urbanist font-bold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted font-inter mb-8">
          Last Updated: 15 July, 2025
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-foreground font-inter leading-relaxed mb-6">
            Smatr ("we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, mobile application, or any other services (collectively, the "Services").
          </p>
          
          <p className="text-foreground font-inter leading-relaxed mb-8">
            By using Smatr, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue using our Services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              1. Information We Collect
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              We collect the following types of information:
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-urbanist font-medium text-foreground mb-3">
                a. Personal Information You Provide
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Payment details (if applicable)</li>
                <li>Account login credentials</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-urbanist font-medium text-foreground mb-3">
                b. Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
                <li>Device information (device type, operating system, browser type)</li>
                <li>IP address</li>
                <li>Usage data (pages viewed, features used, time spent)</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-urbanist font-medium text-foreground mb-3">
                c. Information from Third Parties
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
                <li>Data from analytics providers</li>
                <li>Payment processors</li>
                <li>Marketing partners</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
              <li>Provide, operate, and improve the Services</li>
              <li>Process transactions and send confirmations</li>
              <li>Personalize your experience</li>
              <li>Send service updates, promotional offers, and marketing communications (where permitted)</li>
              <li>Monitor and analyze usage trends</li>
              <li>Detect, prevent, and address technical issues or fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              3. Sharing of Information
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following cases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our Services (e.g., hosting, analytics, payment processing).</li>
              <li><strong>Legal Requirements:</strong> When required by law, legal process, or governmental request.</li>
              <li><strong>Business Transfers:</strong> If Smatr is involved in a merger, acquisition, or sale of assets.</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to sharing your information.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              We use cookies, pixels, and similar technologies to improve user experience, track usage, and personalize content. You can control cookie settings through your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              5. Data Security
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              6. Your Rights
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-foreground font-inter leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:smatr@smatr.in" className="text-primary hover:underline">smatr@smatr.in</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              7. Data Retention
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              We retain personal information only as long as necessary for the purposes described in this policy, or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              8. Third-Party Links and Services
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              Our Services may contain links to third-party websites. We are not responsible for the privacy practices of those websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              Smatr is not intended for children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal data from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              If you access our Services from outside India, your information may be transferred to and processed in countries with different data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted with a revised "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              12. Contact Us
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <div className="bg-smatr-lilac/20 border border-smatr-lilac/30 rounded-lg p-6">
              <p className="font-urbanist font-semibold text-primary mb-2">Smatr</p>
              <p className="text-foreground font-inter">
                Email: <a href="mailto:smatr@smatr.in" className="text-primary hover:underline">smatr@smatr.in</a>
              </p>
              <p className="text-foreground font-inter">
                Phone: <a href="tel:+916302339247" className="text-primary hover:underline">+91 6302339247</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;