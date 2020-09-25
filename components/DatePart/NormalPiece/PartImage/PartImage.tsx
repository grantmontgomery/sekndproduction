import * as React from "react";
import css from "./PartImage.module.scss";

export const PartImage: React.FC<{
  image: string;
  type: string;
  color?: string;
}> = ({ image, type, color }) => {
  return (
    <div
      className={css.partImage}
      style={{ background: `${color ? color : null}` }}
    >
      {type !== "custom" ? <img src={image} alt="" /> : null}
    </div>
  );
};
