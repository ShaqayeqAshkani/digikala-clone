import React from "react";
import img1 from "../../assets/gallery/1-12.webp";
import img2 from "../../assets/gallery/The-Fantastic-Four-First-Steps-Movie-2025.webp";
import img3 from "../../assets/gallery/tea-for-abdominal-bloating.webp";
import img4 from "../../assets/gallery/بهترین-کرم-گریم.webp";

const ReadablesSection = () => {
  const articles = [
    { img: img1, title: " آموزش نصب اسنپ چت" },
    { img: img2, title: " نقد فیلم" },
    { img: img3, title: "معرفی بهترین دمنوش " },
    { img: img4, title: " بهترین کرم گرین" },
  ];

  return (
    <div className="container my-4">
      {/* هدر بخش */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 text-dark">خواندنی‌ها</h5>
        <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "0.9rem" }}>
          مطالب بیشتر در دیجی کالا مگ
        </a>
      </div>

      {/* کارت‌ها */}
      <div className="row g-3">
        {articles.map((article, index) => (
          <div key={index} className="col-6 col-md-3">
            <div className="card h-100 border" style={{ borderColor: "#dcdcdc" }}>
              <img
                src={article.img}
                alt={article.title}
                className="card-img-top"
                style={{ objectFit: "cover", height: "150px" }}
              />
              <div className="card-body">
                <p className="card-text">{article.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadablesSection;
