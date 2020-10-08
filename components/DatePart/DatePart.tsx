import * as React from "react";
import { NormalPiece } from "./NormalPiece";
import { DragPiece } from "./DragPiece";

type Props = {
  location: string;
  part: {};
  index: number;
};

export const DatePart: React.FC<{
  location: string;
  part: { [key: string]: any };
  gridIndex: number | null;
}> = ({ location, part, gridIndex }) => {
  return location === "nav" ? (
    <NormalPiece key={part.id} part={part}></NormalPiece>
  ) : (
    <DragPiece key={part.id}></DragPiece>
  );
};
