import * as React from "react";
import css from "./PartImage.module.scss";

export const PartImage: React.FC<{
  type: string;
  color?: string;
  imageLoaded: boolean;
}> = ({ type, color, imageLoaded, children }) => {
  return (
    <div
      className={css.partImage}
      style={{
        background:
          color || imageLoaded
            ? color
            : "linear-gradient(45deg, #ee0979, #ff6a00)",
      }}
    >
      {(type !== "custom" || !imageLoaded) && children}
    </div>
  );
};
