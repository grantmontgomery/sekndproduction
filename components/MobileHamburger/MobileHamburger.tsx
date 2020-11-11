import * as React from "react";
import css from "./MobileHamburger.module.scss";
import { useModalDispatch, useModalState } from "../../state/ModalContext";

import { NavState } from "../Nav";

type Props = {
  displayLinks: React.Dispatch<React.SetStateAction<NavState>>;
  links: NavState;
};

export const MobileHamburger: React.FC<Props> = ({ displayLinks, links }) => {
  const { allowToggle } = useModalState();
  const modalDispatch = useModalDispatch();

  const handleClick: () => void = () => {
    if (!links.display) {
      displayLinks({ display: true });
      modalDispatch({ type: "MOBILE_LINKS" });
    } else {
      displayLinks({ display: false });
      modalDispatch({ type: "CLOSE_MODAL" });
    }
  };
  return (
    <div
      className={`${css.hamburger} ${links.display ? css.exit : null}`}
      onClick={() => (allowToggle.mobileLinks ? handleClick() : null)}
    >
      <div className={css.topLine}></div>
      <div className={css.middleLine}></div>
      <div className={css.bottomLine}></div>
    </div>
  );
};
