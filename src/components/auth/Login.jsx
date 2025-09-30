import React, { useState } from "react";
import "./Auth.css"; // استایل جدا
import logo from "../../assets/logos/Digikala-logo-blue.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  // دکمه ورود
  const handleLogin = () => {
    if (mobile === "09199847580") {
      setError("");
      navigate("/verify"); // شماره درست → هدایت به صفحه بعد
    } else {
      setError("شماره موبایل صحیح نمی‌باشد");
    }
  };

  // تغییر ورودی → فقط عدد قبول کند
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // حذف غیرعدد
    setMobile(value);
    setError(""); // پاک شدن خطا در تغییر
  };

  return (
    <div className="auth-page">
      <div className="auth-box shadow">
        {/* لوگو */}
        <img src={logo} alt="Logo" className="auth-logo" />

        {/* متن بالای فرم */}
        <p className="auth-text mb-2">ورود | ثبت نام</p>

        {/* ورودی شماره موبایل */}
        <input
          type="text"
          value={mobile}
          onChange={handleChange}
          className="form-control mt-3 shadow-input"
          placeholder="لطفا شماره موبایل خود را وارد کنید"
          maxLength={11}
        />

        {/* پیام خطا */}
        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}

        {/* دکمه ورود */}
        <button
          className="btn btn-primary w-100 mt-3"
          onClick={handleLogin}
          disabled={mobile.length !== 11} // فقط وقتی فعال است که 11 رقم وارد شده باشد
        >
          ورود
        </button>
      </div>
    </div>
  );
}

export default Login;
