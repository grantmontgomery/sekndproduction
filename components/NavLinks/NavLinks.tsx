import * as React from "react";
import Link from "next/link";
import css from "./NavLinks.module.scss";

export const NavLinks: React.FC<{ orientation: string }> = ({
  orientation,
}) => {
  return (
    <ul className={`${css.linksWrapper} ${css[`${orientation}`]}`}>
      <li>
        <Link href="/schedule">Schedule</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
