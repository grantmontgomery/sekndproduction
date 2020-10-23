import * as React from "react";
import css from "../ScheduleDragPiece.module.scss";
export const trackTimeLength: (
  hourStringsTrue: string[],
  rectangleIndex: number,
  partLength: number,
  partAssigned: boolean
) => JSX.Element = (
  hourStringsTrue,
  rectangleIndex,
  partLength,
  partAssigned
) => {
  const startPositionIndex: number = rectangleIndex / 2;
  const endPositionIndex: number =
    rectangleIndex + partLength >= (hourStringsTrue.length - 1) * 2
      ? (hourStringsTrue.length * 2 - 2) / 2
      : (rectangleIndex + partLength) / 2;
  let startTime: string = "";
  let endTime: string = "";

  if (startPositionIndex % 1 === 0) {
    startTime = hourStringsTrue[startPositionIndex];
  } else {
    const roundedDownIndex: number = Math.floor(startPositionIndex);
    const colonIndex: number = hourStringsTrue[roundedDownIndex].indexOf(":");
    const spaceIndex: number = hourStringsTrue[roundedDownIndex].indexOf(" ");

    startTime = `${hourStringsTrue[roundedDownIndex].substring(
      0,
      colonIndex
    )}:30 ${hourStringsTrue[roundedDownIndex].substring(spaceIndex + 1)}`;
  }
  if (endPositionIndex % 1 === 0) {
    endTime = hourStringsTrue[endPositionIndex];
  } else {
    const roundedDownIndex: number = Math.floor(endPositionIndex);
    const colonIndex: number = hourStringsTrue[roundedDownIndex].indexOf(":");
    const spaceIndex: number = hourStringsTrue[roundedDownIndex].indexOf(" ");

    endTime = `${hourStringsTrue[roundedDownIndex].substring(
      0,
      colonIndex
    )}:30 ${hourStringsTrue[roundedDownIndex].substring(spaceIndex + 1)}`;
  }

  return (
    <div
      className={css.times}
      style={{ color: partAssigned ? "white" : "black" }}
    >
      <span>{startTime}</span>
      <span>{endTime}</span>
    </div>
  );
};
