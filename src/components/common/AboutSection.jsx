import React, { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  // متن کوتاه و کامل
  const shortText = `دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود.`;

  const fullText = `این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، ارسال سریع، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود. 
ویژگی های مهم دیجی کالا
یکی از ویژگی‌های مهم در خرید از دیجی کالا، تنوع بی‌نظیر محصولات است. این فروشگاه اینترنتی طیف وسیعی از کالاها را در دسته‌های مختلف ارائه می‌دهد...
ارسال سریع و مطمئن کالا
یکی از مهم‌ترین دغدغه‌های کاربران خرید آنلاین، زمان تحویل کالا است. دیجی کالا برای حل این مشکل، گزینه‌های مختلف ارسال را در نظر گرفته است تا کاربران بتوانند بر اساس نیاز خود، روش ارسال مناسب را انتخاب کنند. به عنوان مثال، ارسال کالا به صورت تحویل امروز با ارسال سریع دیجی‌کالا، از جمله روش‌های خرید سریع از این فروشگاه اینترنتی است. این امکانات باعث می‌شود که خریداران بتوانند سفارش خود را در کوتاه‌ترین زمان ممکن دریافت کنند. علاوه بر این، در صورتی که کالای خریداری شده از لحاظ کیفیت یا هر دلیل دیگری رضایت مشتری را جلب نکرده باشد، دیجی کالا ضمانت بازگشت کالا را ارائه می‌دهد. این ویژگی موجب اعتماد بیشتر مشتریان به خرید آنلاین از فروشگاه اینترنتی دیجی کالا شده است.`;

  return (
    <div className="container my-4">
      <div className="row align-items-start">
        {/* ستون متن */}
        <div className="col-12 col-md-7">
          <h3 className="mb-2">دیجی کالا بزرگترین فروشگاه اینترنتی ایران</h3>
          <p>{shortText}</p>

          {/* نمایش متن کامل در صورت فعال بودن showMore */}
          {showMore && (
            <div className="full-text mt-2">
              <p>{fullText}</p>
            </div>
          )}

          {/* دکمه مشاهده بیشتر / بستن */}
          <button
            className="btn p-0 mt-2 text-primary fw-bold"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "بستن" : "مشاهده بیشتر"}
          </button>
        </div>

        {/* ستون تصاویر */}
        <div className="col-12 col-md-5 mt-3 mt-md-0 d-flex justify-content-start justify-content-md-between gap-3">
          <img
            src={require("../../assets/logos/kasbokar.png")}
            alt="kasbokar"
            className="rounded"
            style={{ width: "90px", height: "auto" }}
          />
          <img
            src={require("../../assets/logos/rezi.png")}
            alt="rezi"
            className="rounded"
            style={{ width: "100px", height: "auto" }}
          />
          <img
            src={require("../../assets/logos/sapra.png")}
            alt="sapra"
            className="rounded"
            style={{ width: "90px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
