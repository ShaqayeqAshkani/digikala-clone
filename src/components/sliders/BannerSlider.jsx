import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";

import banner1 from "../../assets/banners/01.jpg";
import banner2 from "../../assets/banners/02.jpg";
import banner3 from "../../assets/banners/03.jpg";
import banner5 from "../../assets/banners/05.jpg";
import banner7 from "../../assets/banners/07.jpg";
import banner8 from "../../assets/banners/08.jpg";

const banners = [banner1, banner2, banner3, banner5, banner7, banner8];

const BannerSlider = () => {
  return (
    <Swiper
      className="w-100"
      spaceBetween={0} // هیچ فاصله‌ای بین اسلایدها نباشه
      slidesPerView={1}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <img
            src={banner}
            alt={`banner-${index}`}
            className="img-fluid w-100"
            style={{
              height: "400px",       // ارتفاع دلخواه
              objectFit: "cover",    // پر کردن کامل بدون کشیدگی
              display: "block",      // حذف فاصله‌های اضافی
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
