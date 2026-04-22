import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      alert("All fields required");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Registered successfully");

    setEmail("");
    setPassword("");

    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Create Account</h2>

      <input
        type="email"
        placeholder="Enter your email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Register
      </button>

      <p className="link" onClick={() => navigate("/login")}>
        Already registered? Login
      </p>
    </div>
  );
}