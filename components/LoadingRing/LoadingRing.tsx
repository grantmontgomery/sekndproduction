import * as React from "react";
import css from "./LoadingRing.module.scss";

export const LoadingRing: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className={`${css.loadingRing} ${css[location]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
