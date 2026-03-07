import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adaptive_icon from "../assets/adaptive_icon.png";

const AdminssLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) return;

    localStorage.setItem("adminEmail", email);

    // go to OTP verification page
    navigate("/admins/verify");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600/10 to-pink-500/10 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={adaptive_icon} className="h-8" alt="UTUNE LOGO" />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-center mb-1">
          Admin Login
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to access the admin dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Continue
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminssLogin;