import * as React from "react";
import Link from "next/link";
import css from "./NavLinks.module.scss";
import Cookies from "js-cookie";

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
        {Cookies.get("link") && (
          <Link
            href={{ pathname: "/search/[queried]" }}
            as={Cookies.get("link")}
          >
            Search Results
          </Link>
        )}
      </li>
    </ul>
  );
};
