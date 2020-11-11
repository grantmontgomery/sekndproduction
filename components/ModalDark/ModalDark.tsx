import * as React from "react";
import css from "./ModalDark.module.scss";
import { useModalDispatch } from "../../state/ModalContext";

export const ModalDark: React.FC = () => {
  const modalDispatch = useModalDispatch();
  return (
    <div
      onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}
      className={css.modalDark}
    ></div>
  );
};
