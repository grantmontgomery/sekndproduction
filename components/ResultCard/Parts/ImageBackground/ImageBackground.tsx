import * as React from "react";
import css from "./ImageBackground.module.scss";

export const ImageBackground: React.FC<{
  type: string;
  source: string;
  extended: boolean;
  handleExtendRetract: () => void;
}> = ({ extended, handleExtendRetract, type, source, children }) => {
  return (
    <div
      className={`${css.imgBackground} ${extended ? css.extended : undefined}`}
      onClick={handleExtendRetract}
    >
      {children}
    </div>
  );
};
