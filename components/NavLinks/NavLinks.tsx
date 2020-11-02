import * as React from "react";
import Link from "next/link";
import css from "./NavLinks.module.scss";
import Cookie from "js-cookie";
import { a } from "aws-amplify";
import { spawn } from "child_process";

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
        {Cookie.get("link") ? (
          <Link
            href={{ pathname: "/search/[queried]" }}
            as={Cookie.get("link")}
          >
            Search Results
          </Link>
        ) : (
          <span
            className={css.dummyLink}
            onClick={() => alert("Make a search first.")}
          >
            Search Results
          </span>
        )}
      </li>
    </ul>
  );
};
