import React from "react";
import img1 from "../images/pexels-dom-j-7304-310479.jpg";
import img2 from "../images/pexels-lina-1841147.jpg";
import img3 from "../images/pexels-pixabay-273209.jpg";
import "../Styles/Style.css";

const IMAGES = [img1, img2, img3];

export default function MainPage() {
  return <ImageSlider imageUrls={IMAGES} />;
}
