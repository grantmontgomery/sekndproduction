import * as React from "react";
import css from "./MobileHamburger.module.scss";

import { NavState } from "../Nav";

type Props = {
  displayLinks: React.Dispatch<React.SetStateAction<NavState>>;
  links: NavState;
};

export const MobileHamburger: React.FC<Props> = ({ displayLinks, links }) => {
  const handleClick: () => void = () => {
    links.display
      ? displayLinks({ display: false })
      : displayLinks({ display: true });
  };
  return (
    <div
      className={`${css.hamburger} ${links.display ? css.exit : null}`}
      onClick={handleClick}
    >
      <div className={css.topLine}></div>
      <div className={css.middleLine}></div>
      <div className={css.bottomLine}></div>
    </div>
  );
};
