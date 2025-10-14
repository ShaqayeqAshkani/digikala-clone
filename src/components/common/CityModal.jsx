import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchBox from "../common/SearchBox";

function CityModal({ isOpen, onClose, onCitySelect }) {
  const [searchValue, setSearchValue] = useState("");

  // لیست شهرها
  const cities = [
    "تهران","مشهد","اصفهان","شیراز","تبریز","کرج",
    "رشت","رامسر","ایلام","بوشهر","هرمز","کرمان"
  ];

  if (!isOpen) return null; // اگر مدال باز نیست، چیزی نمایش نده

  // فیلتر و اولویت بندی شهرها بر اساس جستجو
  const filteredCities = cities
    .filter((city) => city.includes(searchValue))
    .sort((a, b) => {
      const aStarts = a.startsWith(searchValue) ? 0 : 1;
      const bStarts = b.startsWith(searchValue) ? 0 : 1;
      if (aStarts !== bStarts) return aStarts - bStarts;
      return a.localeCompare(b);
    });

  // وقتی کاربر روی یک شهر کلیک کرد
  const handleCityClick = (city) => {
    onCitySelect(city);
    onClose();
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
      onClick={onClose} // کلیک روی بکگراند → بستن
    >
      <div
        className="bg-white rounded p-3 d-flex flex-column"
        style={{
          width: "90%", // ریسپانسیو برای موبایل
          maxWidth: "500px", // حداکثر روی دسکتاپ
          maxHeight: "80vh", // ارتفاع محدود
          overflow: "hidden"
        }}
        onClick={(e) => e.stopPropagation()} // جلوگیری از بستن مدال هنگام کلیک داخل
      >
        {/* هدر مدال */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="m-0">انتخاب شهر</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        {/* جستجوی شهر */}
        <SearchBox
          placeholder="جستجو شهر..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          width="100%"
          height="45px"
        />

        {/* لیست شهرها */}
        <ul
          className="list-group list-group-flush overflow-auto mt-3"
          style={{ flexGrow: 1, maxHeight: "300px" }} // محدود کردن ارتفاع برای اسکرول
        >
          {filteredCities.map((city, index) => (
            <li
              key={index}
              className="list-group-item d-flex align-items-center py-2 border-0"
              style={{ cursor: "pointer" }}
              onClick={() => handleCityClick(city)}
            >
              <FaMapMarkerAlt className="me-2 text-secondary" />
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CityModal;
