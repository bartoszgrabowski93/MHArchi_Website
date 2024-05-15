import React from "react";
import logo from "../Images/Head/pexels-dom-j-7304-310479.jpg";
import "../Styles/Style.css";

function Head() {
  return (
    <React.Fragment>
      <div className="container">
        <img src={logo} alt="BannerGlowny.jpg" className="logo" />
      </div>
    </React.Fragment>
  );
}

export default Head;
