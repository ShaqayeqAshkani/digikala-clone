import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// نمونه عکس‌ها و قیمت‌ها
import prod1 from "../../assets/products/d39c7e7beca62b443cb5b1a66b2991691af8fc64_1753692746.jpg";
import prod2 from "../../assets/products/pro1.jpg";
import prod3 from "../../assets/products/pro2.jpg";
import prod4 from "../../assets/products/pro3.jpg";
import prod5 from "../../assets/products/pro4.jpg";
import prod6 from "../../assets/products/pro5.jpg";
import prod7 from "../../assets/products/pro6.jpg";
import prod8 from "../../assets/products/pro7.png";
import prod9 from "../../assets/products/pro8.jpg";
import prod10 from "../../assets/products/pro9.jpg";
import prod11 from "../../assets/products/pro10.jpg";
import prod12 from "../../assets/products/pro11.jpg";
import prod13 from "../../assets/products/pro12.jpg";
import prod14 from "../../assets/products/pro13.jpg";
import prod15 from "../../assets/products/pro14.jpg";
import prod16 from "../../assets/products/pro15.jpg";
import prod17 from "../../assets/products/pro16.jpg";
import prod18 from "../../assets/products/pro18.jpg";

// آرایه محصولات با قیمت و تخفیف
const products = [
  { img: prod1, price: "1,200,000 تومان", discount: "20%" },
  { img: prod2, price: "950,000 تومان", discount: "15%" },
  { img: prod3, price: "1,500,000 تومان", discount: "25%" },
  { img: prod4, price: "700,000 تومان", discount: "10%" },
  { img: prod5, price: "1,250,000 تومان", discount: "20%" },
  { img: prod6, price: "880,000 تومان", discount: "12%" },
  { img: prod7, price: "1,700,000 تومان", discount: "30%" },
  { img: prod8, price: "900,000 تومان", discount: "15%" },
  { img: prod9, price: "1,100,000 تومان", discount: "18%" },
  { img: prod10, price: "1,050,000 تومان", discount: "10%" },
  { img: prod11, price: "1,300,000 تومان", discount: "22%" },
  { img: prod12, price: "800,000 تومان", discount: "8%" },
  { img: prod13, price: "1,400,000 تومان", discount: "25%" },
  { img: prod14, price: "950,000 تومان", discount: "15%" },
  { img: prod15, price: "1,600,000 تومان", discount: "28%" },
  { img: prod16, price: "720,000 تومان", discount: "10%" },
  { img: prod17, price: "1,200,000 تومان", discount: "20%" },
  { img: prod18, price: "1,200,000 تومان", discount: "20%" },
];

const DiscountedProducts = () => {
  return (
    <div className="container my-5">
      {/* کادر کلی محصولات */}
      <div className="p-3 bg-white rounded border">
        {/* هدر داخل کادر */}
        <div className="d-flex align-items-center mb-3 position-relative">
          <h4 className="fw-bold mx-auto mb-0 text-center">
            محصولات منتخب و تخفیف خورده
          </h4>
          <a
            href="#"
            className="text-primary"
            style={{ textDecoration: "none" }}
          >
            مشاهده همه
          </a>
        </div>

        {/* نمایش محصولات در ردیف‌ها */}
        {[0, 1, 2].map((row) => (
          <div key={row}>
            <div className="row g-3 mb-3">
              {products.slice(row * 6, row * 6 + 6).map((prod, idx) => (
                <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  {/* کارت محصول */}
                  <div className="position-relative text-center p-2 bg-white rounded">
                    <img
                      src={prod.img}
                      alt={`product-${idx}`}
                      className="img-fluid rounded mb-2"
                      style={{ height: "150px", objectFit: "cover", width: "100%" }}
                    />
                    {/* قیمت محصول */}
                    <span className="d-block fw-bold">{prod.price}</span>
                    {/* درصد تخفیف */}
                    <span
                      className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded-end"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {prod.discount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* جداکننده بین ردیف‌ها */}
            {row < 2 && <hr className="my-3" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountedProducts;
