import * as React from "react";
import css from "./SearchIcon.module.scss";
import { useModalDispatch, useModalState } from "../../state/ModalContext";

export const SearchIcon: React.FC = () => {
  const { allowToggle, allowDisplay } = useModalState();
  const modalDispatch = useModalDispatch();
  const handleClick: () => void = () => {
    if (!allowDisplay.searchBox) {
      modalDispatch({ type: "SEARCH_BOX" });
    } else {
      modalDispatch({ type: "CLOSE_MODAL" });
    }
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180.18 180.18"
      className={css.searchIcon}
      onClick={() => allowToggle.searchBox && handleClick()}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M21.09,21.09a72,72,0,0,0,95.06,107.79l51.31,51.3,12.72-12.72-51.3-51.31A72,72,0,0,0,21.09,21.09Zm89.09,89.09a54,54,0,1,1,0-76.37A54,54,0,0,1,110.18,110.18Z" />
        </g>
      </g>
    </svg>
  );
};
