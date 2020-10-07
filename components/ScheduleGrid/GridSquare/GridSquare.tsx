import * as React from "react";
import css from "./GridSquare.module.scss";

export const GridSquare: React.FC<{
  part: { [key: string]: any } | null;
  index: number;
}> = ({ part, index }) => {
  return (
    <div style={{ gridArea: `square${index}` }} className={css.square}></div>
  );
};
