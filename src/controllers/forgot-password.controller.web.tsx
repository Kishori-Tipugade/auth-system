import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export function useForgotPasswordController() {
  const navigate = useNavigate();

  const generateOTP = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  // 🔴 SEND OTP
  const sendOTP = async (email: string) => {
    const otp = generateOTP();

    localStorage.setItem("otp", otp);
    localStorage.setItem("otpEmail", email);
    localStorage.setItem("isVerified", "false");

    try {
      await emailjs.send(
        "service_j3c0z9o",
        "template_8222utl",
        {
          to_email: email,
          otp: otp,
        },
        "wi2NO6kWDIgaVzbny"
      );

      alert("OTP sent");
      navigate("/verify"); // ✅ go to verify page
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP");
    }
  };

  // 🔴 VERIFY OTP
  const verifyOTP = (inputOtp: string) => {
    const storedOtp = localStorage.getItem("otp");

    if (inputOtp === storedOtp) {
      localStorage.setItem("isVerified", "true");
      return true;
    }

    return false;
  };

  // 🔴 RESET PASSWORD
  const resetPassword = (newPassword: string) => {
    const isVerified = localStorage.getItem("isVerified");

    if (isVerified !== "true") {
      alert("Unauthorized access");
      return;
    }

    const email = localStorage.getItem("otpEmail");

    localStorage.setItem(
      "user",
      JSON.stringify({ email, password: newPassword })
    );

    // cleanup
    localStorage.removeItem("otp");
    localStorage.removeItem("otpEmail");
    localStorage.removeItem("isVerified");

    alert("Password reset successful");

    navigate("/login"); // ✅ FIXED (IMPORTANT)
  };

  return { sendOTP, verifyOTP, resetPassword };
}