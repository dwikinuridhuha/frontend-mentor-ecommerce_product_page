import React from "react";

export default function Lightbox() {
  return (
    <div className="lightbox-wrapper close">
      <div className="lightbox-inner-wrapper">
        <span className="close--lightbox">
          <img
            src="./images/icon-close-lightbox.svg"
            alt="close light box"
            className="close--lightbox-img"
          />
        </span>
        <img
          src="./images/image-product-1.jpg"
          alt="product image"
          className="lightbox--image"
        />
        <div className="lightbox-next-wrapper">
          <img
            src="./images/icon-next.svg"
            alt="next"
            className="img--controller"
          />
        </div>
        <div className="lightbox-previous-wrapper">
          <img
            src="./images/icon-previous.svg"
            alt="previous"
            className="img--controller"
          />
        </div>
        <div className="lightbox-carousel-wrapper" />
      </div>
    </div>
  );
}
