import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/stories/img1.jpg";
import img2 from "../../assets/stories/img2.jpg";
import img3 from "../../assets/stories/img3.jpg";
import img4 from "../../assets/stories/imge4.jpg";
import img5 from "../../assets/stories/img5.jpg";
import img6 from "../../assets/stories/img6.jpg";
import img7 from "../../assets/stories/img7.jpg";
import img8 from "../../assets/stories/img8.jpg";

const stories = [
  { img: img1, name: "آباژور های هوشمند" },
  { img: img2, name: "سیب زمینی با هواپز" },
  { img: img3, name: "ترفند تماس سامسونگ" },
  { img: img4, name: "تمرین تلپاتی" },
  { img: img5, name: "تمرین تلپاتی" },
  { img: img6, name: "تولید محتوا" },
  { img: img7, name: "نورشم پرومکسه" },
  { img: img8, name: "مبدل شارژ" },
  { img: img1, name: "آباژور های هوشمند" },
  { img: img2, name: "سیب زمینی با هواپز" },
  { img: img3, name: "ترفند تماس سامسونگ" },
  { img: img4, name: "تمرین تلپاتی" },
  { img: img5, name: "تمرین تلپاتی" },
  { img: img8, name: "مبدل شارژ" },
  { img: img1, name: "آباژور های هوشمند" },
  { img: img2, name: "سیب زمینی با هواپز" },
  { img: img3, name: "ترفند تماس سامسونگ" },
  { img: img4, name: "تمرین تلپاتی" },
  { img: img5, name: "تمرین تلپاتی" },
  { img: img8, name: "مبدل شارژ" },
  { img: img1, name: "آباژور های هوشمند" },
  { img: img2, name: "سیب زمینی با هواپز" },
  { img: img3, name: "ترفند تماس سامسونگ" },
  { img: img4, name: "تمرین تلپاتی" },
];

const StorySlider = () => {
  return (
    <div style={{ padding: "0 120px", overflow: "hidden", marginTop:"15px"}}>
      <Swiper
        slidesPerView={15}
        spaceBetween={4}
        breakpoints={{
          0: { slidesPerView: 4, spaceBetween: 2 },
          768: { slidesPerView: 8, spaceBetween: 4 },
          1024: { slidesPerView: 10, spaceBetween: 6 },
        }}
        navigation
        modules={[Navigation]}
        style={{ overflow: "hidden" }}
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index} className="text-center">
            <div
              className="d-flex align-items-center justify-content-center mx-auto mb-1 rounded-circle"
              style={{
                width: "80px",
                height: "80px",
                overflow: "hidden", // این خط مهمه
                borderRadius: "50%",
                background: "conic-gradient(#a855f7, #f472b6, #a855f7)",
              }}
            >
              <img
                src={story.img}
                alt={story.name}
                className="rounded-circle"
                style={{ width: "72px", height: "72px", objectFit: "cover" }}
              />
            </div>
            <p className="text-truncate mb-0" style={{ fontSize: "0.7rem" }}>
              {story.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StorySlider;
