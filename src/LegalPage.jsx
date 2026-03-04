// pages/LegalPage.jsx
import React from "react";

const LegalPage = ({ type }) => {
  const isPrivacy = type === "privacy";

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-pink-800 bg-clip-text text-transparent">
            {isPrivacy ? "Privacy Policy" : "Terms of Service"}
          </h1>
          <p className="text-gray-500 mt-4">
            Effective Date: February 25, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-gray-700 leading-relaxed space-y-6">

          {isPrivacy ? (
            <>
              <Section title="1. Introduction">
                Welcome to uTune. We respect your privacy and are committed to protecting your personal data.
                This policy informs you how we handle your data when you visit www.utune.com.ng,
                use the uTune app, or subscribe to our RBT service.
              </Section>

              <Section title="2. The Data We Collect">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Identity Data:</strong> Full name, phone number, and MSISDN.</li>
                  <li><strong>Audio Data:</strong> Custom voice recordings, jingles, or advertisements.</li>
                  <li><strong>Contact Personalization Data:</strong> Numbers assigned specific tones.</li>
                  <li><strong>Transaction Data:</strong> ₦100 monthly subscription and payment history.</li>
                </ul>
              </Section>

              <Section title="3. How We Use Your Data">
                <ul className="list-disc list-inside space-y-2">
                  <li>Service Provision and RBT activation.</li>
                  <li>Personalization of caller tones.</li>
                  <li>Verification and compliance review.</li>
                  <li>Subscription billing processing.</li>
                </ul>
              </Section>

              <Section title="4. Data Sharing & Third Parties">
                We do not sell your data. Sharing occurs only with VAS Aggregators,
                MNOs, or regulatory authorities where legally required.
              </Section>

              <Section title="5. Security">
                We use SSL encryption and secure infrastructure to protect your data.
              </Section>

              <Section title="6. Contact Us">
                Email:{" "}
                <a
                  href="mailto:privacy@utune.com.ng"
                  className="text-purple-600 font-medium underline"
                >
                  privacy@utune.com.ng
                </a>
              </Section>
            </>
          ) : (
            <>
              <Section title="1. Acceptance of Terms">
                By accessing uTune or subscribing, you agree to these Terms.
              </Section>

              <Section title="2. Service & Subscription">
                <ul className="list-disc list-inside space-y-2">
                  <li>₦100/month billed via airtime.</li>
                  <li>Automatic renewal every 30 days.</li>
                  <li>Ring Back Tone customization service.</li>
                </ul>
              </Section>

              <Section title="3. User-Generated Content">
                Uploading audio grants Chirak Projects Unlimited a
                royalty-free license to transmit the content for service delivery.
              </Section>

              <Section title="4. Prohibited Content">
                Zero tolerance for hate speech, profanity, political propaganda,
                unlicensed music, scams, or misleading information.
              </Section>

              <Section title="5. Limitation of Liability">
                Maximum liability is limited to ₦100 (one month's subscription).
              </Section>

              <Section title="6. Governing Law">
                Governed by the laws of the Federal Republic of Nigeria.
              </Section>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

// Reusable section component for clean structure
const Section = ({ title, children }) => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
      {title}
    </h2>
    <div className="text-sm md:text-base text-gray-600">
      {children}
    </div>
  </div>
);

export default LegalPage;