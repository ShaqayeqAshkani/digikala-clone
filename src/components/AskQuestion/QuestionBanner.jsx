import bannerImg from "../../assets/banners/pngtree.jpg";
import questionIcon from "../../assets/icons/faq-questions-speech-bubble-blue-icon-png-701751694962561xkpuir6mfx.png";

const QuestionBanner = () => {
  return (
    <div
      className="d-flex flex-column align-items-center text-center"
      style={{
        // پس‌زمینه بنر
        backgroundImage: `url(${bannerImg})`,
        height: "30vh",
         paddingTop: 0, 
      }}
    >
      <div className="mb-2">
        <img
          src={questionIcon}
          alt="سوال"
          className="img-fluid"
          style={{ width: "40px", height: "40px" }}
        />
      </div>

      {/* عنوان اصلی */}
      <h2 className="fw-bold mb-2 fs-4">موضوع پرسش شما چیست؟</h2>

      <p className="text-secondary mb-2">
        موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب کنید
      </p>

      {/* باکس جستجو */}
      <div className="input-group w-100 mb-1" style={{ maxWidth: "600px" }}>
        <input
          type="text"
          className="form-control border border-primary rounded"
          placeholder="جستجوی موضوع"
          style={{ padding: "14px 15px", fontSize: "18px" }}
        />
      </div>
    </div>
  );
};

export default QuestionBanner;
