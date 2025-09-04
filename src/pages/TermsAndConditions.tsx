import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CONFIG = {
  appName: "Smatr",
  legalName: "Smatr",
  supportEmail: "smatr@smatr.in",
  supportPhone: "+91 6302339247",
  lastUpdated: "15 Aug, 2025",
  governingLaw: "[Your Country/State]",
  jurisdiction: "[Your Jurisdiction]",
};

const TermsAndConditions = () => {
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
          Terms & Conditions
        </h1>
        <p className="text-muted font-inter mb-8">
          Last Updated: {CONFIG.lastUpdated}
        </p>

        <div className="prose prose-gray max-w-none">
          <p className="text-foreground font-inter leading-relaxed mb-6">
            Welcome to {CONFIG.appName} ("we," "our," or "us"). These Terms &
            Conditions ("Terms") govern your access to and use of our website,
            mobile application, and related services (collectively, the
            "Services"). By accessing or using {CONFIG.appName}, you agree to be
            bound by these Terms.
          </p>
          
          <p className="text-foreground font-inter leading-relaxed mb-8">
            If you do not agree, you must not use our Services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              1. Eligibility
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              You must be at least 13 years old (or the minimum legal age in
              your jurisdiction) to use {CONFIG.appName}. By using our Services,
              you represent that you meet these requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              2. Account Registration
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              You may need to create an account to use certain features.
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
              <li>
                You agree to provide accurate, complete, and up-to-date
                information.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                login credentials.
              </li>
              <li>
                You must notify us immediately of any unauthorized access to
                your account.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              3. Use of Services
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
              <li>Use {CONFIG.appName} only for lawful purposes.</li>
              <li>Not misuse, hack, or interfere with the Services.</li>
              <li>Not upload harmful or illegal content.</li>
              <li>Not engage in activities that disrupt or damage the platform.</li>
            </ul>
            <p className="text-foreground font-inter leading-relaxed mt-4">
              We reserve the right to suspend or terminate your account for
              violations of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              All content, features, and functionality of {CONFIG.appName}{" "}
              (including text, graphics, logos, software, and design) are owned
              by {CONFIG.legalName} or its licensors and are protected by
              copyright, trademark, and other laws. You may not reproduce,
              modify, or distribute any part of the Services without our prior
              written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              5. Payments & Subscriptions (If Applicable)
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              If our Services involve payments or subscriptions, you agree to
              pay all applicable fees.
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
              <li>Payments are non-refundable unless stated otherwise.</li>
              <li>
                Prices may change, but we will notify you before any renewal
                period.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              6. Third-Party Services
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              {CONFIG.appName} may include links to third-party websites or
              services. We are not responsible for the content, policies, or
              practices of those third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              7. Disclaimers
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
              <li>
                Our Services are provided "as is" without warranties of any
                kind, whether express or implied.
              </li>
              <li>
                We do not guarantee uninterrupted, error-free, or secure access
                to {CONFIG.appName}.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground font-inter ml-4">
              <li>
                {CONFIG.legalName} shall not be liable for any indirect,
                incidental, special, or consequential damages arising out of or
                in connection with your use of the Services.
              </li>
              <li>
                Our total liability for any claim shall not exceed the amount
                you paid to use our Services in the past 12 months.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              9. Indemnification
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              You agree to indemnify and hold harmless {CONFIG.legalName}, its
              affiliates, and employees from any claims, damages, liabilities,
              and expenses resulting from your use of the Services or violation
              of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              10. Termination
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              We may suspend or terminate your account at any time, with or
              without cause or notice, if we believe you have violated these
              Terms or applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              11. Governing Law & Dispute Resolution
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              These Terms are governed by the laws of {CONFIG.governingLaw},
              without regard to its conflict of law principles. Any disputes
              shall be resolved in the courts of {CONFIG.jurisdiction}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-foreground font-inter leading-relaxed">
              We may update these Terms from time to time. The "Last Updated"
              date will reflect the latest version. Continued use of{" "}
              {CONFIG.appName} after changes means you accept the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-urbanist font-semibold text-primary mb-4">
              13. Contact Us
            </h2>
            <p className="text-foreground font-inter leading-relaxed mb-4">
              If you have any questions about these Terms & Conditions, contact us at:
            </p>
            <div className="bg-smatr-lilac/20 border border-smatr-lilac/30 rounded-lg p-6">
              <p className="font-urbanist font-semibold text-primary mb-2">{CONFIG.legalName}</p>
              <p className="text-foreground font-inter">
                Email: <a href={`mailto:${CONFIG.supportEmail}`} className="text-primary hover:underline">{CONFIG.supportEmail}</a>
              </p>
              <p className="text-foreground font-inter">
                Phone: <a href={`tel:${CONFIG.supportPhone.replace(/\s/g, "")}`} className="text-primary hover:underline">{CONFIG.supportPhone}</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
