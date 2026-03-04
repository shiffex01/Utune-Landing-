import React, { useState } from "react";

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I upload a tune?",
      answer:
        "Go to the U-Tune dashboard, click on 'Upload Tune', verify your phone number via OTP, and submit your audio file."
    },
    {
      question: "How long does verification take?",
      answer:
        "Most tunes are reviewed within 24–48 hours. You’ll receive a notification once approved."
    },
    {
      question: "Can businesses advertise using U-Tune?",
      answer:
        "Yes! Businesses can upload promotional audio and personalize caller wait time to enhance brand awareness."
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the email instructions to reset your password."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-gray-500 mt-4">
            We’re here to help you get the most out of U-Tune 💜
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-3 text-purple-600">
              📘 Getting Started
            </h3>
            <p className="text-gray-600 text-sm">
              Learn how to create an account, verify your number, and upload your first tune.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-3 text-pink-500">
              🛠 Account & Security
            </h3>
            <p className="text-gray-600 text-sm">
              Manage your password, phone verification, and account safety settings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-3 text-indigo-600">
              💼 Business Solutions
            </h3>
            <p className="text-gray-600 text-sm">
              Discover how businesses can monetize caller wait time through branded audio.
            </p>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-700">
                    {faq.question}
                  </span>
                  <span className="text-purple-600 text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="mb-6 opacity-90">
            Our support team is ready to assist you anytime.
          </p>
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default HelpCenter;