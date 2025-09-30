import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// تصاویر گالری
import img1 from "../../assets/gallery/01.jpg";
import img2 from "../../assets/gallery/02.jpg";
import img3 from "../../assets/gallery/03.png";
import img4 from "../../assets/gallery/04.jpg";

// آرایه تصاویر برای مپ کردن
const images = [img1, img2, img3, img4];

const Gallery = () => {
  return (
    <div className="container mt-3">
      {/* ردیف گالری با فاصله بین آیتم‌ها */}
      <div className="row justify-content-center g-3">
        {images.map((img, index) => (
          // ستون ریسپانسیو با Bootstrap
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            {/* تصویر گالری */}
            <img
              src={img}
              alt={`gallery-${index}`}
              className="img-fluid rounded"
              style={{
                width: "100%",          // پر کردن ستون به صورت ریسپانسیو
                maxWidth: "300px",      // حداکثر عرض تصویر
                height: "auto",         // ارتفاع خودکار برای نسبت صحیح
                objectFit: "cover",     // برش تصویر بدون تغییر نسبت
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
