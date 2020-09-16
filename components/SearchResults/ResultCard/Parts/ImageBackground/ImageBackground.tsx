import * as React from "react";
import css from "./ResultCard.module.scss";

export const ImageBackground: React.FC<{ source: string; alt: string }> = ({
  source,
}) => {
  return (
    <div className={css.imgBackground}>
      <img src={source} alt="" />
    </div>
  );
};
