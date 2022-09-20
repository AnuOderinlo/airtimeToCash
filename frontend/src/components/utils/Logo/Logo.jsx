import React from "react";
import LogoPNG from "../../../assets/images/logo.svg";
import "./Logo.css";
function Logo() {
  return (
    <div className="logo">
      <img src={LogoPNG} alt="logo" />
    </div>
  );
}

export default Logo;
