// pages/LegalPage.jsx
import React from "react";

const LegalPage = ({ type }) => {
  const isPrivacy = type === "privacy";

  return (
    <div className="pt-20">
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6">
          {isPrivacy ? "Privacy Policy" : "Terms of Service"}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: February 25, 2026
        </p>

        {isPrivacy ? (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
            <p>
              Welcome to uTune. We respect your privacy and are committed to protecting your personal data. 
              This policy informs you how we handle your data when you visit www.utune.com.ng, use the uTune app, 
              or subscribe to our RBT service via our MNO partners.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. The Data We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Identity Data:</strong> Full name, phone number, and MSISDN.</li>
              <li><strong>Audio Data:</strong> Custom voice recordings, jingles, or advertisements you upload for use as an RBT.</li>
              <li><strong>Contact Personalization Data:</strong> Numbers of contacts you assign specific tones to.</li>
              <li><strong>Transaction Data:</strong> Details about your ₦100 monthly subscription and payment history.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Service Provision: Activate and swap your RBT.</li>
              <li>Personalization: Ensure the right caller hears the tone you assigned.</li>
              <li>Verification: Audit uploaded audio for quality and compliance.</li>
              <li>Billing: Process your subscription with MNO/Aggregator.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Sharing & Third Parties</h2>
            <p>
              We do not sell your data. Necessary sharing happens only with VAS Aggregators, MNOs, and Regulatory Authorities as required by law.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Audio Content Moderation</h2>
            <p>Uploaded audio is reviewed for legality, quality, and compliance.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Retention</h2>
            <p>Data is retained only while you are an active subscriber. Upon cancellation, custom tones are deactivated and data archived or deleted.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Access: Request your data copy.</li>
              <li>Rectification: Update your phone number or name.</li>
              <li>Erasure: Delete your account and uploaded audio.</li>
              <li>Withdraw Consent: Stop the service anytime.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Security</h2>
            <p>We use SSL encryption to protect your uploads and contact lists.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
            <p>
              Email: <a href="mailto:privacy@utune.com.ng" className="text-blue-600 underline">privacy@utune.com.ng</a><br />
              Office: Chirak Projects Unlimited, Nigeria
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
            <p>By accessing uTune or subscribing, you agree to these Terms. Otherwise, deactivate the service immediately.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Service & Subscription Fees</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Service Description: Customize Ring Back Tones for specific contacts.</li>
              <li>Subscription: ₦100/month, billed via airtime with VAS Aggregator/MNO.</li>
              <li>Automatic Renewal: Every 30 days unless opted out.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. User-Generated Content License</h2>
            <p>Ownership remains with you. Uploading grants Chirak Projects Unlimited a royalty-free license to transmit and play the audio for the service.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Strict Prohibited Content & Moderation</h2>
            <p>Zero-tolerance for profanity, hate speech, political propaganda, unlicensed music, scams, or misleading info. The Company may remove content at its discretion.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Refund & Rejection Policy</h2>
            <p>No refunds for rejected audio due to poor quality or violation of content guidelines. Audio must meet 8kHz, 16-bit, Mono specs.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
            <p>The Company is not liable for network interruptions or content responsibility. Maximum liability is ₦100 (one month's subscription).</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact-Specific Personalization</h2>
            <p>Use of this feature requires a legitimate relationship with your contacts.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Termination of Service</h2>
            <p>The Company may suspend/terminate accounts for breaches, insufficient balance, or regulatory directives.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
            <p>These Terms are governed by the laws of the Federal Republic of Nigeria, including the Nigerian Communications Act and NDPR.</p>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default LegalPage;