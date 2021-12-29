import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="attribution">
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge">
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link href="@">Dwiki Nuri Dhuha</Link>.
    </footer>
  );
}
