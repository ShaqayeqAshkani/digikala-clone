import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import digikalaLogoBlue from "../../assets/logos/Digikala-logo-blue.png";
import bazaarLogo from "../../assets/logos/بازار.png";
import myketLogo from "../../assets/logos/مایکت.png";
import sibappLogo from "../../assets/logos/سیبچه.png";
import AboutSection from "../../components/common/AboutSection";
import logo from "../../assets/logos/digikalamehr.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="footer-wrapper bg-white">
      {/* بخش سفید بالا */}
      <div className="py-3 border-top" style={{ opacity: 0.95 }}>
        <div className="container">
          {/* ردیف لوگو و دکمه */}
          <div className="d-flex justify-content-between align-items-center">
            <img
              src={digikalaLogoBlue}
              alt="Digikala"
              style={{ height: "50px" }}
            />
            <button
              className="btn"
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                color: "#666",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              بازگشت به بالا
            </button>
          </div>

          {/* متن پشتیبانی زیر لوگو */}
          <div className="support-text mt-2 small">
            <span>پشتیبانی: ۶۱۹۳۰۰۰۰ - ۰۲۱ | ۰۲۱-۹۱۰۰۰۱۰۰</span>
            <span className="mx-2">|</span>
            <span>۷ روز هفته، ۲۴ ساعته</span>
          </div>
        </div>

        <div className="container d-flex justify-content-center flex-wrap mt-5">
          {[
            {
              src: require("../../assets/icons/express.png"),
              text: "امکان تحویل اکسپرس",
            },
            {
              src: require("../../assets/icons/cod.png"),
              text: "امکان پرداخت در محل",
            },
            {
              src: require("../../assets/icons/24-7.png"),
              text: "هفت روز هفته، ۲۴ساعت",
            },
            {
              src: require("../../assets/icons/guarantee.png"),
              text: "هفت روز ضمانت بازگشت کالا",
            },
            {
              src: require("../../assets/icons/original.png"),
              text: "ضمانت اصل بودن کالا",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center"
              style={{ margin: "0 60px", marginBottom: "45px" }} // فاصله ستون‌ها و ردیف‌ها
            >
              <img
                src={item.src}
                alt={item.text}
                style={{ height: "50px", marginBottom: "12px" }} // فاصله تصویر و متن
              />
              <span style={{ fontSize: "13px", color: "#7e7e7e" }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ستون‌ها */}
      <div className="container my-4">
        <div className="row text-start">
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-dark text-end">با دیجی کالا</h5>
            <ul className="list-unstyled text-secondary text-end">
              <li>اتاق خبر دیجی کالا</li>
              <li>فروش در دیجی کالا</li>
              <li>فرصت های شغلی</li>
              <li>گزارش تخلف در دیجی کالا</li>
              <li>درباره دیجی کالا</li>
              <li>تماس با دیجی کالا</li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-dark text-end">خدمات مشتری</h5>
            <ul className="list-unstyled text-secondary text-end">
              <li>پاسخ به پرسش های متداول</li>
              <li>رویه های بازگردندان کالا</li>
              <li>شرایط استفاده</li>
              <li>حریم خصوصی</li>
              <li>گزارش باگ</li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-dark text-end">راهنمای خرید از دیجی کالا</h5>
            <ul className="list-unstyled text-secondary text-end">
              <li>نحوه ثبت سفارش</li>
              <li>شیوه پرداخت</li>
              <li>رویه ارسال سفارش</li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-dark text-end">همراه ما باشید!</h5>
            <div className="d-flex gap-2 mb-2 justify-content-start flex-wrap">
              <img
                src={require("../../assets/icons/twitter-Top.jpg")}
                alt="Twitter"
                style={{ height: "30px" }}
              />
              <img
                src={require("../../assets/icons/linkedin-logo-Top.jpg")}
                alt="LinkedIn"
                style={{ height: "30px" }}
              />
              <img
                src={require("../../assets/icons/aparat.png")}
                alt="Aparat"
                style={{ height: "30px" }}
              />
              <img
                src={require("../../assets/icons/instagram-logo-main-4.png")}
                alt="Instagram"
                style={{ height: "30px" }}
              />
            </div>
            <div
              className="text-secondary mb-2 text-end"
              style={{ fontSize: "13px" }}
            >
              با ثبت ایمیل از جدیدترین تخفیف‌ها باخبر شوید
            </div>
            <div className="d-flex gap-2">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#f3f3f3ff",
                  flex: 1,
                }}
              />
              <button
                className="btn"
                style={{
                  borderRadius: "8px",
                  backgroundColor: email ? "#0099ff" : "#c5c5c5ff",
                  color: "#fff",
                  transition: "all 0.2s",
                }}
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* فوتر اصلی دانلود اپلیکیشن */}
      <div className="container my-4">
        <footer
          className="text-white py-3 px-3 rounded"
          style={{ backgroundColor: "#002346ff" }} // آبی تیره دلخواه
        >
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
              <img
                src={digikalaLogoBlue}
                alt="Digikala"
                style={{ height: "40px" }}
              />
              <span className="fw-bold">دانلود اپلیکیشن دیجی کالا</span>
            </div>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <img src={bazaarLogo} alt="Bazaar" style={{ height: "35px" }} />
              <img src={myketLogo} alt="Myket" style={{ height: "35px" }} />
              <img src={sibappLogo} alt="SibApp" style={{ height: "35px" }} />
            </div>
          </div>
        </footer>
      </div>

      {/* خط مرزی */}
      <div className="container">
        <div
          className="py-3 border-bottom"
          style={{ width: "100%", margin: "0 auto", opacity: 0.95 }}
        ></div>
      </div>

      {/* AboutSection */}
      <div className="container my-4">
        <AboutSection />
      </div>

      {/* خط مرزی بعد از AboutSection */}
      <div className="container">
        <div
          className="py-3 border-bottom"
          style={{ width: "100%", margin: "0 auto", opacity: 0.95 }}
        ></div>
      </div>

      {/* متن کپی‌رایت */}
      <div
        className="text-center text-secondary my-3"
        style={{ fontSize: "14px" }}
      >
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
        آنلاین دیجی‌کالا) است.
      </div>

      {/* لوگوهای خاکستری */}
      <div className="w-100 px-3 mb-3">
        <div className="bg-light py-3 d-flex justify-content-center gap-3 flex-wrap rounded">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo${index + 1}`}
              style={{
                maxHeight: "80px",
                objectFit: "contain",
                filter: "grayscale(100%)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
