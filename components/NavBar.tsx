import React from "react";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="close-icon">
        <img
          src="./images/icon-close.svg"
          alt="close-icon"
          className="close--icon"
        />
      </div>
      <ul className="nav-items">
        <li className="nav--item">
          <a href="#">Collections </a>
        </li>
        <li className="nav--item">
          <a href="#">Men</a>
        </li>
        <li className="nav--item">
          <a href="#">Women</a>
        </li>
        <li className="nav--item">
          <a href="#">About</a>
        </li>
        <li className="nav--item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
