import * as React from "react";
import css from "./ModalDark.module.scss";

export const ModalDark: React.FC<{ location: string }> = ({ location }) => {
  return <div className={`${css.modalDark} ${css[location]}`}></div>;
};
