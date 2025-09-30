import logo from "../../assets/logos/Digikala-logo-blue.png";
import banner from "../../assets/banners/06.jpg";
import { FiBell, FiShoppingCart } from "react-icons/fi";
import SearchBox from "../common/SearchBox";
import DropdownMenu from "../common/DropdownMenu";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

import {
  FaShoppingBasket,
  FaQuestionCircle,
  FaBolt,
  FaGem,
  FaFire,
  FaMapMarkerAlt,
} from "react-icons/fa";

import CityModal from "../common/CityModal";

function Header() {
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const openCityModal = () => setIsCityModalOpen(true);
  const closeCityModal = () => setIsCityModalOpen(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) setUsername(savedUser);
  }, []);

  return (
    <main className="main-content">
    <div>
     

      {/* هدر */}
      <header
        className="d-flex justify-content-between align-items-start shadow-sm py-2 px-5 bg-white position-fixed w-100 top-0"
        style={{ zIndex: 1030 }}
      >
        {/* سمت چپ */}
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ width: "150px" }}
            />
            <SearchBox placeholder="جستجو..." width="750px" height="50px" />
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3 ">
            <DropdownMenu />
            <span className="text-muted">|</span>

            <div className="d-flex align-items-center gap-1 text-muted small sub-header-item">
              <FaBolt />
              <span>شگفت انگیز</span>
            </div>

            <div className="d-flex align-items-center gap-1 text-muted small  sub-header-item">
              <FaShoppingBasket />
              <span>سوپر مارکت</span>
            </div>

            <div className="d-flex align-items-center gap-1 text-muted small sub-header-item">
              <FaGem />
              <span>طلای دیجیتال</span>
            </div>

            <div className="d-flex align-items-center gap-1 text-muted small sub-header-item">
              <FaFire />
              <span>پرفروش ترین ها</span>
            </div>

            <span className="text-muted">|</span>

            <div
              className="d-flex align-items-center gap-1 text-muted small  sub-header-item"
              onClick={() => navigate("/ask-question")}
              style={{ cursor: "pointer" }}
            >
              <FaQuestionCircle />
              <span>سوالی دارید؟</span>
            </div>

            <div className="text-muted small hover-underline sub-header-item">
              در دیجی کالا بفروشید !
            </div>
          </div>
        </div>

        {/* سمت راست */}
        <div className="d-flex flex-column align-items-end gap-2">
          <div className="d-flex align-items-center gap-2">
            <FiBell className="fs-4 text-dark" />
            {username ? (
              <span className="border rounded px-3 py-1">{username}</span>
            ) : (
              <Link
                to="/auth/login"
                className="border rounded px-3 py-1 text-dark text-decoration-none"
              >
                ورود | ثبت نام
              </Link>
            )}
            <FiShoppingCart className="fs-4 text-dark" />
          </div>
          <div
            className="d-flex align-items-center rounded px-2 py-1 text-dark justify-content-center"
            style={{ cursor: "pointer", minWidth: "180px" }}
            onClick={openCityModal}
          >
            <FaMapMarkerAlt className="me-2" />
            <span className="text-truncate" style={{ maxWidth: "150px" }}>
              {selectedCity || "شهر خود را انتخاب کنید"}
            </span>
          </div>
        </div>
      </header>

      {isCityModalOpen && (
        <CityModal
          isOpen={isCityModalOpen}
          onClose={closeCityModal}
          onCitySelect={(city) => setSelectedCity(city)}
        />
      )}
    </div>
    </main>
  );
}

export default Header;
