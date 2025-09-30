import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// تصاویر دسته‌بندی‌ها
import img1 from "../../assets/CategoryGrid/ارایشی بهداشتی.jpg";
import img2 from "../../assets/CategoryGrid/اسباب بازی و کودک.jpg";
import img3 from "../../assets/CategoryGrid/تجهیزات پزشکی و سلامت.jpg";
import img4 from "../../assets/CategoryGrid/خانه و اشپز خانه.jpg";
import img5 from "../../assets/CategoryGrid/خودرو و موتور.jpg";
import img6 from "../../assets/CategoryGrid/سوپر مارکت انلاین.jpg";
import img7 from "../../assets/CategoryGrid/طلا و نقره.jpg";
import img8 from "../../assets/CategoryGrid/لوازم تحریر.jpg";
import img9 from "../../assets/CategoryGrid/لوازم خانگی برقی.jpg";
import img11 from "../../assets/CategoryGrid/موبایل.jpg";
import img12 from "../../assets/CategoryGrid/ورزش و سلامت.jpg";
import img13 from "../../assets/CategoryGrid/پت شاپ.jpg";

// داده‌های دسته‌بندی
const items = [
  { img: img1, name: "آرایشی بهداشتی" },
  { img: img2, name: "اسباب بازی و کودک" },
  { img: img3, name: "تجهیزات سلامتی پزشکی" },
  { img: img4, name: "خانه و آشپزخانه" },
  { img: img5, name: "خودرو و موتور" },
  { img: img6, name: "سوپر مارکت" },
  { img: img7, name: "طلا و نقره" },
  { img: img8, name: "لوازم تحریر" },
  { img: img9, name: "لوازم برقی خانگی" },
  { img: img11, name: "موبایل" },
  { img: img12, name: "ورزش و سلامت" },
  { img: img13, name: "پت شاپ" },
];

const CategoryGrid = () => {
  return (
    <div className="container my-4">
      {/* ردیف دسته‌بندی‌ها */}
      <div className="row justify-content-center g-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center"
          >
            {/* تصویر دسته‌بندی */}
            <img
              src={item.img}
              alt={item.name}
              className="img-fluid rounded-circle mb-2"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
            {/* نام دسته‌بندی */}
            <p className="small mb-0">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
