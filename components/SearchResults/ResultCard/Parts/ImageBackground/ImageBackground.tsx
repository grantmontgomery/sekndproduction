import * as React from "react";
import css from "./ImageBackground.module.scss";

export const ImageBackground: React.FC<{
  type: string;
  source: string;
  extended: boolean;
  handleRetract: () => void;
}> = ({ extended, handleRetract, type, source, children }) => {
 

  return (
    <div
      className={`${css.imgBackground} ${extended ? css.extended : null}`}
      onClick={handleRetract}
    >
      {children}
    </div>
  );
};
