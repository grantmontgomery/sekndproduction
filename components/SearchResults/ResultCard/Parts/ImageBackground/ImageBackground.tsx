import * as React from "react";
import css from "./ImageBackground.module.scss";

export const ImageBackground: React.FC<{
  source: string;
  alt: string;
  extended: boolean;
  handleRetract: () => void;
}> = ({ source, alt, extended, handleRetract }) => {
  return (
    <div
      className={`${css.imgBackground} ${extended ? css.extended : null}`}
      onClick={handleRetract}
    >
      <img src={source} alt={alt} />
    </div>
  );
};
