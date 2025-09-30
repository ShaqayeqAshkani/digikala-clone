import React from "react";
import { FiSearch } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBox({ placeholder, width, height }) {
  return (
    <div
      className="position-relative"
      style={{ width: width || "350px" }}
    >
      <FiSearch
        className="position-absolute"
        style={{ left: "10px", top: "50%", transform: "translateY(-50%)", color: "#aaa", fontSize: "18px" }}
      />
      <input
        type="text"
        className="form-control ps-5"
        placeholder={placeholder}
        style={{
          height: height || "40px",
          backgroundColor: "#f0f0f0", 
          borderRadius: "8px",
          border: "none", 
        }}
      />
    </div>
  );
}

export default SearchBox;
