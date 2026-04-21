import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (email === user.email && password === user.password) {
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
  type="email"
  name="user_email"
  placeholder="Enter your email"
  autoComplete="off"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  name="user_password"
  placeholder="Enter your password"
  autoComplete="new-password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

      <button onClick={handleLogin}>Login</button>

      <p className="link" onClick={() => navigate("/forgot")}>
        Forgot Password?
      </p>

      <p className="link" onClick={() => navigate("/")}>
        New user? Register
      </p>
    </div>
  );
}