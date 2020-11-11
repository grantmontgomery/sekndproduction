import * as React from "react";
import css from "./MobileHamburger.module.scss";
import { useModalDispatch, useModalState } from "../../state/ModalContext";

import { NavState } from "../Nav";

export const MobileHamburger: React.FC = () => {
  const { allowToggle, allowDisplay } = useModalState();
  const modalDispatch = useModalDispatch();

  const handleClick: () => void = () => {
    if (!allowDisplay.mobileLinks) {
      modalDispatch({ type: "MOBILE_LINKS" });
    } else {
      modalDispatch({ type: "CLOSE_MODAL" });
    }
  };
  return (
    <div
      className={`${css.hamburger} ${
        allowDisplay.mobileLinks ? css.exit : null
      }`}
      onClick={() => (allowToggle.mobileLinks ? handleClick() : null)}
    >
      <div className={css.topLine}></div>
      <div className={css.middleLine}></div>
      <div className={css.bottomLine}></div>
    </div>
  );
};
