import * as React from "react";
import css from "./PartImage.module.scss";

export const PartImage: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className={css.partImage}>
      <img src={image} alt="" />
      <div className={css.filter}></div>
    </div>
  );
};
