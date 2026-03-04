import React from "react";

const About = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            About U-Tune
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            🚀 Last Updated: February 25, 2026
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">

          {/* Project Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              Project Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              U-Tune is a decentralized Ring Back Tone (RBT) marketplace and 
              management platform that allows users and businesses to turn their 
              <span className="font-semibold text-purple-600"> caller wait time </span> 
              into a personalized advertisement or identity space.
            </p>
          </section>

          {/* Product Ecosystem */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-pink-500 pl-4">
              Product Ecosystem
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
                <strong className="text-purple-600">The U-Tune App:</strong> 
                <br />
                The central hub for uploading, verifying, and managing tunes via 
                OTP-verified phone numbers.
              </li>

              <li className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
                <strong className="text-pink-500">The Studio (External):</strong> 
                <br />
                Users record high-quality audio externally or via Text-to-Speech (TTS) 
                and upload it to the platform.
              </li>

              <li className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
                <strong className="text-indigo-600">U-Tune Recorder (Future Phase):</strong> 
                <br />
                A dedicated companion app for in-app recording with background 
                music integration.
              </li>
            </ul>
          </section>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">

            <section className="bg-purple-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-purple-700 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals and businesses to customize their caller 
                experience, making every call unique and meaningful while giving 
                creators an easy way to monetize or showcase their audio content.
              </p>
            </section>

            <section className="bg-pink-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To become the leading RBT and audio personalization platform in 
                Nigeria and beyond, providing seamless and secure experiences for 
                both casual users and businesses.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;