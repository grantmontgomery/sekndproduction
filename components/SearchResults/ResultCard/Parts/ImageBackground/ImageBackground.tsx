import * as React from "react";
import css from "./ImageBackground.module.scss";

export const ImageBackground: React.FC<{ source: string; alt: string }> = ({
  source,
  alt,
}) => {
  return (
    <div className={css.imgBackground}>
      <img src={source} alt={alt} />
    </div>
  );
};
