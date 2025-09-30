import categoryIcon from "../../assets/icons/faq.png";

const QuestionCategories = ({ icons }) => {
  return (
    <div className="container text-center mt-2">
      {/* آیکون بالای دسته‌بندی */}
      <div className="d-flex justify-content-center mb-2">
        <img
          src={categoryIcon}
          alt="دسته‌بندی"
          className="img-fluid"
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      <p className="fw-bold mb-3 fs-4">دسته‌بندی پرسش‌ها</p>

      {/* لیست دسته‌بندی‌ها - ریسپانسیو */}
      <div className="row g-2">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="
              col-6       /* موبایل: دو ستون */
              col-sm-4   /* تبلت کوچک: سه ستون */
              col-md-3   /* تبلت بزرگ: چهار ستون */
              col-lg-2   /* دسکتاپ: شش ستون */
              d-flex flex-column align-items-center justify-content-center 
              border p-2
            "
            style={{ minHeight: "110px" }}
          >
            <img
              src={icon.img}
              alt={icon.label}
              className="img-fluid"
              style={{ width: "45px", height: "45px", objectFit: "contain" }}
            />

            <span className="mt-2" style={{ fontSize: "12px" }}>
              {icon.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCategories;
