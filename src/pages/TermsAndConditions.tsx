import React from "react";
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


/**
 * Terms & Conditions component for Smatr
 * --------------------------------------
 * Save this as terms-and-conditions.tsx (or page.tsx inside /app/terms/ for Next.js App Router).
 * 
 * TailwindCSS classes are used for styling but markup is semantic and works without Tailwind too.
 */

const CONFIG = {
  appName: "Smatr",
  legalName: "Smatr",
  supportEmail: "smatr@smatr.in",
  supportPhone: "+91 6302339247",
  lastUpdated: "15 Aug, 2025",
  governingLaw: "[Your Country/State]",
  jurisdiction: "[Your Jurisdiction]",
};

export default function TermsAndConditions(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Last Updated: {CONFIG.lastUpdated}
          </p>
          <p className="mt-6 text-base leading-7 text-gray-700">
            Welcome to {CONFIG.appName} ("we," "our," or "us"). These Terms &
            Conditions ("Terms") govern your access to and use of our website,
            mobile application, and related services (collectively, the
            "Services"). By accessing or using {CONFIG.appName}, you agree to be
            bound by these Terms. If you do not agree, you must not use our
            Services.
          </p>
        </header>

        {/* Article */}
        <article className="prose prose-gray max-w-none">
          <section id="eligibility">
            <h2>1. Eligibility</h2>
            <p>
              You must be at least 13 years old (or the minimum legal age in
              your jurisdiction) to use {CONFIG.appName}. By using our Services,
              you represent that you meet these requirements.
            </p>
          </section>

          <section id="account-registration">
            <h2>2. Account Registration</h2>
            <p>You may need to create an account to use certain features.</p>
            <ul>
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

          <section id="use-of-services">
            <h2>3. Use of Services</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use {CONFIG.appName} only for lawful purposes.</li>
              <li>Not misuse, hack, or interfere with the Services.</li>
              <li>Not upload harmful or illegal content.</li>
              <li>Not engage in activities that disrupt or damage the platform.</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account for
              violations of these Terms.
            </p>
          </section>

          <section id="intellectual-property">
            <h2>4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of {CONFIG.appName}{" "}
              (including text, graphics, logos, software, and design) are owned
              by {CONFIG.legalName} or its licensors and are protected by
              copyright, trademark, and other laws. You may not reproduce,
              modify, or distribute any part of the Services without our prior
              written permission.
            </p>
          </section>

          <section id="payments">
            <h2>5. Payments & Subscriptions (If Applicable)</h2>
            <p>
              If our Services involve payments or subscriptions, you agree to
              pay all applicable fees.
            </p>
            <ul>
              <li>Payments are non-refundable unless stated otherwise.</li>
              <li>
                Prices may change, but we will notify you before any renewal
                period.
              </li>
            </ul>
          </section>

          <section id="third-party-services">
            <h2>6. Third-Party Services</h2>
            <p>
              {CONFIG.appName} may include links to third-party websites or
              services. We are not responsible for the content, policies, or
              practices of those third parties.
            </p>
          </section>

          <section id="disclaimers">
            <h2>7. Disclaimers</h2>
            <ul>
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

          <section id="limitation-of-liability">
            <h2>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul>
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

          <section id="indemnification">
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {CONFIG.legalName}, its
              affiliates, and employees from any claims, damages, liabilities,
              and expenses resulting from your use of the Services or violation
              of these Terms.
            </p>
          </section>

          <section id="termination">
            <h2>10. Termination</h2>
            <p>
              We may suspend or terminate your account at any time, with or
              without cause or notice, if we believe you have violated these
              Terms or applicable laws.
            </p>
          </section>

          <section id="governing-law">
            <h2>11. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of {CONFIG.governingLaw},
              without regard to its conflict of law principles. Any disputes
              shall be resolved in the courts of {CONFIG.jurisdiction}.
            </p>
          </section>

          <section id="changes-to-terms">
            <h2>12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. The "Last Updated"
              date will reflect the latest version. Continued use of{" "}
              {CONFIG.appName} after changes means you accept the updated Terms.
            </p>
          </section>

          <section id="contact-us">
            <h2>13. Contact Us</h2>
            <address className="not-italic">
              <p className="font-medium">{CONFIG.legalName}</p>
              <p>
                <a
                  className="hover:underline"
                  href={`mailto:${CONFIG.supportEmail}`}
                >
                  {CONFIG.supportEmail}
                </a>
              </p>
              <p>
                <a
                  className="hover:underline"
                  href={`tel:${CONFIG.supportPhone.replace(/\s/g, "")}`}
                >
                  {CONFIG.supportPhone}
                </a>
              </p>
            </address>
          </section>
        </article>
      </section>
    </main>
  );
}
