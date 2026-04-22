import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (email === user.email && password === user.password) {
      const username = email.split("@")[0];

      setToast(`Welcome ${username}`);

      setTimeout(() => {
        setToast("");
        // optional redirect
        // navigate("/dashboard");
      }, 3000);
    } else {
      setToast("Invalid credentials");

      setTimeout(() => {
        setToast("");
      }, 3000);
    }
  };

  return (
    <div className="center-wrapper">
      <div>
        {/* LOGIN CARD */}
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

        {/* TOAST BELOW CARD */}
        {toast && <div className="toast">{toast}</div>}
      </div>
    </div>
  );
}