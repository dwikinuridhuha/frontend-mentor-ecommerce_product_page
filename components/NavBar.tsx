import React from "react";
import Image from "next/image";
import Link from "next/link";

import IconClose from "../images/icon-close.svg";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="close-icon">
        <Image src={IconClose} alt="close-icon" className="close--icon" />
      </div>
      <ul className="nav-items">
        <li className="nav--item">
          <Link href="#">
            <a>Collections </a>
          </Link>
        </li>
        <li className="nav--item">
          <Link href="#">
            <a>Men</a>
          </Link>
        </li>
        <li className="nav--item">
          <Link href="#">
            <a>Women</a>
          </Link>
        </li>
        <li className="nav--item">
          <Link href="#">
            <a>About</a>
          </Link>
        </li>
        <li className="nav--item">
          <Link href="#">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
