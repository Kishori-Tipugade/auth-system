import { useState } from "react";
import { useForgotPasswordController } from "../controllers/forgot-password.controller.web";
import "../styles/auth.css";

export default function ResetPassword() {
  const { resetPassword } = useForgotPasswordController();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container">
      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={() => resetPassword(password)}>
        Reset Password
      </button>
    </div>
  );
}