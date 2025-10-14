import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import carBuy from "../../assets/icons/car.png";
import credit from "../../assets/icons/pay.png";
import plus from "../../assets/icons/plus.png";
import handmade from "../../assets/icons/sanayedasti.jpg";
import coin from "../../assets/icons/sece.png";
import gold from "../../assets/icons/tala.jpg";
import discount from "../../assets/icons/takhfii.png";
import scoole from "../../assets/icons/scool.png";
import shop from "../../assets/icons/marcet.png";

const categories = [
  { img: carBuy, name: "خرید خودرو" },
  { img: credit, name: "دریافت اعتبار" },
  { img: plus, name: "اشتراک پلاس" },
  { img: handmade, name: "صنایع دستی" },
  { img: coin, name: "سکه طلاتو بفروش" },
  { img: gold, name: "طلا" },
  { img: discount, name: "تخفیف ویژه" },
  { img: shop, name: "سوپر مارکت" },
  { img: scoole, name: "مدرسه" },
];

const Categories = () => {
  return (
    <div className="container my-4">
 <div className="d-flex flex-nowrap justify-content-center overflow-auto" style={{ gap: "4rem" }}>
  {categories.map((cat, index) => (
    <div key={index} className="text-center flex-shrink-0">
      <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto"
           style={{ width: "70px", height: "70px" }}>
        <img src={cat.img} alt={cat.name} style={{ width: "62px", height: "62px" }} />
      </div>
      <p className="small mt-2 mb-0">{cat.name}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Categories;
