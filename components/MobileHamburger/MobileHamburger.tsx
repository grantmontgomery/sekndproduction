import * as React from "react";
import css from "./MobileHamburger.module.scss";
import { useModalDispatch, useModalState } from "../../state/ModalContext";

import { NavState } from "../Nav";

export const MobileHamburger: React.FC = () => {
  const { allowToggle, allowDisplay } = useModalState();
  const modalDispatch = useModalDispatch();

  const handleClick: () => void = () => {
    modalDispatch({
      type: allowDisplay.mobileLinks ? "CLOSE_MODAL" : "MOBILE_LINKS",
    });
  };
  return (
    <div
      className={`${css.hamburger} ${
        allowDisplay.mobileLinks ? css.exit : undefined
      }`}
      onClick={() => allowToggle.mobileLinks && handleClick()}
    >
      <div className={css.topLine}></div>
      <div className={css.middleLine}></div>
      <div className={css.bottomLine}></div>
    </div>
  );
};
