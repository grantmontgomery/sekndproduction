import * as React from "react";
import { NavLinks } from "../NavLinks";
import css from "./MobileMenu.module.scss";

type Props = {};

export const MobileMenu: React.FC = () => {
  return (
    <div className={css.mobileMenu}>
      <NavLinks orientation="portrait"></NavLinks>
      <div className={css.modalSection}></div>
    </div>
  );
};
