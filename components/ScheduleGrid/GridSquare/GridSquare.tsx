import * as React from "react";
import css from "./GridSquare.module.scss";

export const GridSquare: React.FC<{ part: { [key: string]: any } | null }> = ({
  part,
}) => {
  return <div className={css.square}></div>;
};
