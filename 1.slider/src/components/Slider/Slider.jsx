import React from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";

export default function Slider() {
  return (
    <>
      <p></p>
      <div className="slider">
        <p className="image-info">Bedroom</p>
        <img
          src="/images/img-3.jpg"
          alt="estate's rooms"
          className="slider-img"
        />

        <button className="navigation-button prev-button">
          <img src={leftChevron} alt="previous image" />
        </button>
        <button className="navigation-button prev-button">
          <img src={rightChevron} alt="previous image" />
        </button>
      </div>
    </>
  );
}
