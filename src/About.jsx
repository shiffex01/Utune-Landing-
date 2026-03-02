
import React from "react";

const About = () => {
  return (
    <div className="pt-16">
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-sm text-gray-500 mb-6">
          🚀 Last Updated: February 25, 2026
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Project Overview</h2>
        <p>
          U-Tune is a decentralized Ring Back Tone (RBT) marketplace and management platform 
          that allows users and businesses to turn their "caller wait time" into a personalized 
          advertisement or identity space.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Product Ecosystem</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>The U-Tune App:</strong> The central hub for uploading, verifying, and managing tunes via OTP-verified phone numbers.
          </li>
          <li>
            <strong>The Studio (External):</strong> Users currently record high-quality audio externally or via Text-to-Speech (TTS) and upload it to the platform.
          </li>
          <li>
            <strong>U-Tune Recorder (Future Phase):</strong> A dedicated companion app for in-app recording with background music integration.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p>
          We aim to empower individuals and businesses to customize their caller experience, 
          making every call unique and meaningful while giving creators an easy way to monetize 
          or showcase their audio content.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Our Vision</h2>
        <p>
          To become the leading RBT and audio personalization platform in Nigeria and beyond, 
          providing seamless and secure experiences for both casual users and businesses.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;