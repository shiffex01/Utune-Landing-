import API from "./api";

// SEND OTP
export const sendOtp = async (email) => {
  const res = await API.post("/api/auth/send-otp", {
    email,
  });

  return res.data;
};

// VERIFY OTP
export const verifyOtp = async (email, otp) => {
  const res = await API.post("/api/auth/verify-otp", {
    email,
    otp,
  });

  return res.data;
};