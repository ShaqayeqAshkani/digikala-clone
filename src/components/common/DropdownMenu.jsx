import React, { useState } from "react";
import {
  FaBars,
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaGem,
  FaShoppingBasket,
} from "react-icons/fa";
import "./DropdownMenu.css";

// ساختار داده برای منو
const categories = [
  {
    id: 1,
    name: "مد و پوشاک",
    icon: <FaTshirt className="item-icon" />,
    subItems: [
      { title: " | لباس مردانه ", items: ["شلوار", "تیشرت", "لباس زیر"] },
      { title: "لباس زنانه", items: ["دامن", "بلوز", "شلوار"] },
      { title: "لباس بچگانه", items: ["تی‌شرت", "شلوار", "ژاکت"] },
      { title: "کفش و کتونی", items: ["کتونی مردانه", "کتونی زنانه"] },
      { title: "اکسسوری و زیورآلات", items: ["گردنبند", "دستبند", "گوشواره"] },
    ],
  },
  {
    id: 2,
    name: "کالای دیجیتال",
    icon: <FaMobileAlt className="item-icon" />,
    subItems: [
      { title: "موبایل", items: ["سامسونگ", "اپل", "شیائومی", "هواوی"] },
      { title: "لپ تاپ", items: ["لنوو", "ایسر", "ایسوس", "دل"] },
      { title: "تبلت", items: ["آیپد", "سامسونگ", "هواوی"] },
      { title: "ساعت هوشمند", items: ["اپل واچ", "سامسونگ", "شیائومی"] },
      { title: "هدفون و هندزفری", items: ["بی‌سیم", "با سیم", "گیمینگ"] },
    ],
  },
  {
    id: 3,
    name: "لوازم خانگی",
    icon: <FaLaptop className="item-icon" />,
    subItems: [
      {
        title: "یخچال و فریزر",
        items: ["دو درب", "چهار درب", "ساید بای ساید"],
      },
      { title: "ماشین لباسشویی", items: ["اتوماتیک", "نیمه اتوماتیک"] },
      { title: "ماشین ظرفشویی", items: ["ایستاده", "توکار"] },
      { title: "جاروبرقی", items: ["ایستاده", "رباتی", "سبک"] },
      { title: "تلویزیون", items: ["LED", "OLED", "QLED"] },
    ],
  },
  {
    id: 4,
    name: "طلا و نقره",
    icon: <FaGem className="item-icon" />,
    subItems: [
      { title: "انگشتر", items: ["طلای زنانه", "طلای مردانه", "نقره"] },
      { title: "دستبند", items: ["طلای زنانه", "طلای مردانه", "نقره"] },
      { title: "گردنبند", items: ["طلای زنانه", "طلای مردانه", "نقره"] },
      { title: "نیم ست", items: ["طلای زنانه", "نقره"] },
      { title: "سکه و شمش", items: ["سکه امامی", "سکه بهار", "شمش طلا"] },
    ],
  },
  {
    id: 5,
    name: "سوپرمارکت",
    icon: <FaShoppingBasket className="item-icon" />,
    subItems: [
      { title: "میوه و سبزیجات", items: ["سیب", "موز", "هویج"] },
      { title: "لبنیات", items: ["شیر", "ماست", "پنیر"] },
      { title: "نوشیدنی", items: ["آبمیوه", "نوشابه", "چای"] },
      { title: "خشکبار", items: ["بادام", "گردو", "فندق"] },
      { title: "تنقلات", items: ["چیپس", "پفک", "شکلات"] },
    ],
  },
  // دسته‌های جدید
  {
    id: 6,
    name: "کتاب و هنر",
    icon: <FaGem className="item-icon" />,
    subItems: [
      { title: "کتاب‌های آموزشی", items: ["ریاضی", "فیزیک", "زبان"] },
      { title: "رمان و داستان", items: ["داستان کوتاه", "رمان", "کتاب کودک"] },
      { title: "هنر و موسیقی", items: ["نقاشی", "موسیقی", "عکاسی"] },
    ],
  },
  {
    id: 7,
    name: "ابزارآلات و تجهیزات",
    icon: <FaGem className="item-icon" />,
    subItems: [
      { title: "ابزار دستی", items: ["چکش", "پیچ گوشتی", "آچار"] },
      { title: "ابزار برقی", items: ["دریل", "فرز", "اره"] },
      { title: "تجهیزات صنعتی", items: ["پمپ", "کمپرسور", "متر لیزری"] },
    ],
  },
  {
    id: 8,
    name: "آرایشی و بهداشتی",
    icon: <FaGem className="item-icon" />,
    subItems: [
      { title: "پوست", items: ["کرم مرطوب‌کننده", "ضد آفتاب", "ماسک"] },
      { title: "مو", items: ["شامپو", "نرم‌کننده", "رنگ مو"] },
      { title: "عطر و ادکلن", items: ["زنانه", "مردانه"] },
    ],
  },
  {
    id: 9,
    name: "ورزش و سفر",
    icon: <FaGem className="item-icon" />,
    subItems: [
      { title: "وسایل ورزشی", items: ["تردمیل", "دمبل", "توپ"] },
      { title: "کیف و کوله", items: ["کوله پشتی", "کیف دستی"] },
      { title: "لوازم سفر", items: ["چمدان", "ساک دستی", "بالشت مسافرتی"] },
    ],
  },
  {
    id: 10,
    name: "پت شاپ",
    icon: <FaGem className="item-icon" />,
    subItems: [
      { title: "خوراکی", items: ["غذای سگ", "غذای گربه", "تشویقی"] },
      { title: "اسباب بازی", items: ["توپ", "قلاده", "خودکار بازی"] },
      { title: "لوازم نگهداری", items: ["ظرف آب", "ظرف غذا", "خوابگاه"] },
    ],
  },
  {
    id: 11,
    name: "لوازم تحریر",
    icon: <FaGem className="item-icon" />,
    subItems: [
      { title: "دفتر و یادداشت", items: ["دفتر خط دار", "دفترچه یادداشت"] },
      { title: "خودکار و روان‌نویس", items: ["خودکار ساده", "خودکار رنگی"] },
      { title: "لوازم اداری", items: ["منگنه", "کاغذ", "چسب"] },
    ],
  },
];
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // مقداردهی اولیه به اولین دسته‌بندی
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  let timeout;

  return (
    <div
      className="main-category-wrapper"
      onMouseEnter={() => {
        clearTimeout(timeout);
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        timeout = setTimeout(() => {
          setIsOpen(false);
          setActiveCategory(categories[0]); // وقتی میره بیرون دوباره اولین دسته فعال بشه
        }, 200);
      }}
    >
      <div className="main-category">
        <FaBars className="icon main-icon" />
        <span>دسته بندی کالا</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="menu-right">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`dropdown-item ${activeCategory?.id === cat.id ? "active" : ""}`}
                onMouseEnter={() => setActiveCategory(cat)}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </div>
            ))}
          </div>

          <div className="menu-left">
            {/* دیگه نیاز به sub-placeholder نیست */}
            <div className="sub-categories-grid">
              {activeCategory.subItems.map((sub, index) => (
                <div key={index} className="sub-category">
                  <div className="sub-title">
                    <span className="sub-title-line"></span>
                    {sub.title}
                  </div>
                  <div className="sub-items">
                    {sub.items.map((item, i) => (
                      <div key={i} className="sub-item">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
