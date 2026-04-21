import { useNavigate } from "react-router-dom";

export function useLoginController() {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  };

  const goToRegister = () => navigate("/register");
  const goToForgot = () => navigate("/forgot");

  return { handleLogin, goToRegister, goToForgot };
}