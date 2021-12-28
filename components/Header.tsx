import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="hamburger-menu-wrapper">
        <div className="hamburger-menu">
          <img
            src="./images/icon-menu.svg"
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
          <img
            src="./images/icon-cart.svg"
            alt="basket--icon"
            className="basket--icon"
          />
        </div>
        <div className="avatar-icon">
          <img
            src="./images/image-avatar.png"
            alt="avatar--icon"
            className="avatar--icon"
          />
        </div>
      </div>
    </header>
  );
}
