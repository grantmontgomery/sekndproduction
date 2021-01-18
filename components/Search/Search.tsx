import * as React from "react";
import css from "./Search.module.scss";
import { useModalDispatch, useModalState } from "../../state/ModalContext";

export const Search: React.FC = () => {
  const { allowToggle, allowDisplay } = useModalState();
  const modalDispatch = useModalDispatch();
  const handleClick: () => void = () => {
    modalDispatch({
      type: allowDisplay.searchBox ? "CLOSE_MODAL" : "SEARCH_BOX",
    });
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
