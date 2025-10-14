import Accordion from "react-bootstrap/Accordion";
import faqIcon from "../../assets/icons/questionmark-png.parspng.com-11-300x300.png"; // آیکون FAQ

const FaqAccordion = () => {
  return (
    <div className="container mt-5 mb-5">
      {/* استایل‌های سفارشی برای آکاردئون */}
      <style>
        {`
          .custom-accordion .accordion-button {
            background-color: transparent !important;
            box-shadow: none !important;
            color: #000 !important;
            justify-content: flex-end; 
            font-weight: bold; 
          }

          .custom-accordion .accordion-button::after {
            margin-left: 0 !important;
            margin-right: auto !important; 
            transform: rotate(0deg) !important;
          }

          .custom-accordion .accordion-button:not(.collapsed)::after {
            transform: rotate(0deg) !important;
          }

          .custom-accordion .accordion-button:hover {
            background-color: transparent !important;
            color: #000 !important;
          }
        `}
      </style>

      {/* آیکون و عنوان */}
      <div className="d-flex justify-content-center mb-2">
        <img
          src={faqIcon}
          alt="پرسش‌های متداول"
          className="img-fluid"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <h4 className="fw-bold text-center mb-4">پرسش‌های متداول</h4>

      {/* لیست سوالات آکاردئون - ریسپانسیو به صورت پیش‌فرض */}
      <Accordion defaultActiveKey="" className="text-end custom-accordion">
        {/* سوال 1 */}
        <Accordion.Item eventKey="0" className="border-0 border-bottom">
          <Accordion.Header>شرایط گارانتی دیجی کالا</Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              امروزه توجه به کیفیت کالا از مهمترین وظایف فروشندگان کالا است و
              خدمات پس از فروش ضامن حفظ این کیفیت می باشد. در همین راستا شرکت
              دیجی کالا مفتخر به ارائه سرویس در اسرع وقت به مشتریان گرامی می
              باشد...
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 2 */}
        <Accordion.Item eventKey="1" className="border-0 border-bottom">
          <Accordion.Header>چطور می‌توانم سفارشم را پیگیری کنم؟</Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              وارد سایت دیجی‌کالا شوید. روی گزینه سفارش‌های من کلیک کنید. در این
              قسمت با کلیک روی جزئیات می‌توانید سفارش خود را ببینید...
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 3 */}
        <Accordion.Item eventKey="2" className="border-0 border-bottom">
          <Accordion.Header>
            شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟
          </Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              لطفاً پیش از خرید، موارد زیر را به‌دقت بخوانید؛ زیرا ثبت هر سفارش
              در دیجی‌کالا به معنی موافقت با شرایط زیر است.
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 4 */}
        <Accordion.Item eventKey="3" className="border-0 border-bottom">
          <Accordion.Header>
            شرایط استفاده از کد تخفیف اولین خرید چیست؟
          </Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              سیستم هوشمند دیجی کالا، پس از بررسی حساب کاربری در صورتی که مالک
              آن مشتری جدید دیجی کالا باشد...
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 5 */}
        <Accordion.Item eventKey="4" className="border-0 border-bottom">
          <Accordion.Header>
            چگونه می توانم نصب و پیگیری درگاه پرداخت هوشمند دیجی پی را انجام
            دهم؟
          </Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              شما میتوانید پس از مراجعه به لینک{" "}
              <a href="https://www.mydigipay.com/ipg/" target="_blank" rel="noreferrer">
                mydigipay.com
              </a>{" "}
              مراحل را مطالعه و فرم های لازم را تکمیل کنید...
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 6 */}
        <Accordion.Item eventKey="5" className="border-0 border-bottom">
          <Accordion.Header>
            میتوانم سفارشم را بصورت اقساطی پرداخت کنم؟
          </Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              بله، دیجی کالا تسهیلاتی فراهم کرده است. شما میتوانید تا سقف 20
              میلیون تومان به صورت اقساط با بازپرداخت 6، 9 و 12 ماهه خرید کنید.
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 7 */}
        <Accordion.Item eventKey="6" className="border-0 border-bottom">
          <Accordion.Header>
            هزینه‌ی ارسال در دیجی کالا چگونه محاسبه می‌شود؟
          </Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              هزینه ارسال بر اساس شیوه ارسال متفاوت است و در زمان ثبت سفارش
              نمایش داده می‌شود.
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 8 */}
        <Accordion.Item eventKey="7" className="border-0 border-bottom">
          <Accordion.Header>
            هزینه روش‌های ارسال با اشتراک پلاس چقدر است؟
          </Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              اعضای پلاس می‌توانند به ازای هر ماه اشتراک، چهار ارسال رایگان بر
              روی مرسوله‌های عادی داشته باشند.
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 9 */}
        <Accordion.Item eventKey="8" className="border-0 border-bottom">
          <Accordion.Header>
            چطور می‌توانم درخواست مرجوعی کالا را ثبت کنم؟
          </Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              وارد پروفایل خود شوید و از قسمت سفارشات تحویل شده، فرم درخواست
              مرجوعی را تکمیل کنید.
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* سوال 10 */}
        <Accordion.Item eventKey="9" className="border-0 border-bottom">
          <Accordion.Header>چطور می‌توانم امتیاز بگیرم؟</Accordion.Header>
          <Accordion.Body className="p-0 mt-2">
            <p>
              بعد از ساخت حساب کاربری، با خرید کالا، ثبت نظر یا انجام ماموریت‌های
              دیجی‌کلاب می‌توانید امتیاز دریافت کنید.
            </p>
            <p className="text-primary">مشاهده توضیحات تکمیلی</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
