import { useState } from "react";
import { useForgotPasswordController } from "../controllers/forgot-password.controller.web";
import "../styles/auth.css";

export default function ForgotPassword() {
  const { sendOTP } = useForgotPasswordController();

  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={() => sendOTP(email)}>
        Send OTP
      </button>
    </div>
  );
}