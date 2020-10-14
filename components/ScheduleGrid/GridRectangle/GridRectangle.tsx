import * as React from "react";
import { ScheduleDragPiece } from "../../ScheduleDragPiece";
import css from "./GridRectangle.module.scss";

export const GridRectangle: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div style={{ gridArea: `rectangle${index}` }} className={css.square}>
      {index === 5 ? <ScheduleDragPiece></ScheduleDragPiece> : null}
    </div>
  );
};
