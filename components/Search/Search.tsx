import * as React from "react";
import css from "./Search.module.scss";
import { useModalDispatch, useModalState } from "../../state/ModalContext";

export const Search: React.FC = () => {
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
    <div
      className={css.searchWrapper}
      onClick={() => allowToggle.searchBox && handleClick()}
    >
      <span>Search</span>
    </div>
  );
};
