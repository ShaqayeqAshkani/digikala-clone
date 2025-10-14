import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/Digikala-logo-blue.png";

function VerifyCode() {
  const navigate = useNavigate();
  const [code, setCode] = useState(""); // ورودی ایمیل کاربر
  const [error, setError] = useState(""); // پیام خطا
  const [timer, setTimer] = useState(120); // تایمر کد (۲ دقیقه)
  const [resendTimer, setResendTimer] = useState(120); // تایمر برای ارسال مجدد
  const [canResend, setCanResend] = useState(false); // وضعیت فعال بودن دکمه ارسال مجدد

  // ایمیل صحیح (هاردکد شده)
  const correctEmail = "shaghayeghashkaniwork@gmail.com";

  // تایمر کد تایید (هر ثانیه یکی کم شود)
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // تایمر ارسال مجدد
  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(
        () => setResendTimer((prev) => prev - 1),
        1000
      );
      return () => clearInterval(interval);
    } else {
      setCanResend(true); 
    }
  }, [resendTimer]);

  // ارسال مجدد
  const handleResend = () => {
    setResendTimer(120); // دوباره ۲ دقیقه
    setCanResend(false);
  };

  // تایید ایمیل
  const handleConfirm = () => {
    if (code === correctEmail) {
      setError("");
      localStorage.setItem("username", "شقایق اشکانی"); // ذخیره نام کاربر
      navigate("/"); // بعد از موفقیت برود صفحه اصلی
    } else {
      setError("ایمیل صحیح نمی‌باشد");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box shadow" style={{ position: "relative" }}>
        {/* فلش برگشت → برگردد به صفحه لاگین */}
        <button
          onClick={() => navigate("/auth/login")} 
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "none",
            border: "none",
            fontSize: "24px",
            fontWeight: "700",
            cursor: "pointer",
          }}
          title="بازگشت"
        >
          →
        </button>

        {/* لوگو */}
        <img src={logo} alt="Logo" className="auth-logo" />

        {/* متن توضیحی */}
        <p className="auth-text mb-2">ایمیل تایید را وارد کنید</p>

        {/* ورودی ایمیل */}
        <input
          type="email"
          className="form-control mt-3 shadow-input"
          placeholder="ایمیل خود را وارد کنید"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError(""); // پاک کردن خطا هنگام تایپ
          }}
        />

        {/* پیام خطا */}
        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}

        {/* دکمه تایید */}
        <button
          className="btn btn-primary w-100 mt-3"
          onClick={handleConfirm}
          disabled={code.length === 0} // غیرفعال تا چیزی نوشته نشود
        >
          تایید
        </button>

        {/* تایمر و ارسال مجدد */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span>
            زمان باقی‌مانده کد:{" "}
            {Math.floor(timer / 60)
              .toString()
              .padStart(2, "0")}
            :{(timer % 60).toString().padStart(2, "0")}
          </span>
          <button
            className="btn btn-link p-0"
            onClick={handleResend}
            disabled={!canResend}
          >
            ارسال مجدد
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyCode;
