import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./views/register.web";
import Login from "./views/login.web";
import ForgotPassword from "./views/forgot-password.web";
import VerifyOTP from "./views/verify-otp.web";
import ResetPassword from "./views/reset-password.web";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;