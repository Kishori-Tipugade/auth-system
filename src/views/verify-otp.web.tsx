import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordController } from "../controllers/forgot-password.controller.web";
import "../styles/auth.css";

export default function VerifyOTP() {
  const { verifyOTP } = useForgotPasswordController();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (!otp) {
      setError("Enter OTP");
      return;
    }

    const isValid = verifyOTP(otp);

    if (isValid) {
      navigate("/reset"); // ✅ go to reset page
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="container">
      <h2>Verify OTP</h2>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => {
          setOtp(e.target.value);
          setError("");
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleVerify}>
        Verify OTP
      </button>
    </div>
  );
}