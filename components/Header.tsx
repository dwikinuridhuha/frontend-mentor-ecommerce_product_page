import React from "react";
import Image from "next/image";

import IconMenu from "../images/icon-minus.svg";
import IconCart from "../images/icon-cart.svg";
import ImageAvatar from "../images/image-avatar.png";

export default function Header() {
  return (
    <header className="header">
      <div className="hamburger-menu-wrapper">
        <div className="hamburger-menu">
          <Image
            src={IconMenu}
            alt="hamburger-menu"
            className="menu--icon"
          />
        </div>
      </div>
      <div className="heading-wrapper">
        <h2 className="site--heading">sneakers</h2>
      </div>
      <div className="basket-avatar-wrapper">
        <div className="basket-icon">
          <div className="total-items">
            <span></span>
          </div>
          <Image
            src={IconCart}
            alt="basket--icon"
            className="basket--icon"
          />
        </div>
        <div className="avatar-icon">
          <Image
            src={ImageAvatar}
            alt="avatar--icon"
            className="avatar--icon"
          />
        </div>
      </div>
    </header>
  );
}
