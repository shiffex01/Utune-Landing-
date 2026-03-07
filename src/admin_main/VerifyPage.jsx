import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdminsVerifyPage = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError(false);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join("");

    // temporary test OTP
    if (enteredCode === "123456") {
      localStorage.setItem("adminsAuth", "true");
      navigate("/admins/manage-admins");
    } else {
      setError(true);
    }

    if (enteredCode.length !== 6) {
    setError(true);
    return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600/10 to-pink-500/10 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">

        <h2 className="text-xl font-semibold mb-6">
          Enter Admin Verification Code
        </h2>

        <div className="flex justify-between mb-4">

          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              value={digit}
              maxLength="1"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-14 h-14 border rounded-md text-center text-xl outline-none ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
          ))}

        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">
            Invalid code. Use 123456 for testing.
          </p>
        )}

        <button
          onClick={handleVerify}
          className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Verify
        </button>

      </div>

    </div>
  );
};

export default AdminsVerifyPage;