import * as React from "react";
import { NavLinks } from "../NavLinks";
import css from "./MobileMenu.module.scss";

export const MobileMenu: React.FC = () => {
  return (
    <div className={css.mobileMenu}>
      <NavLinks orientation="portrait"></NavLinks>
    </div>
  );
};
