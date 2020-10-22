import * as React from "react";

export const displayTimes: (
  hourStrings: string[],
  rectangleLength: number,
  squareIndex: number
) => void = (hourStrings, rectangleLength, squareIndex) => {
  const editableArr: string[] = [...hourStrings];

  const startColonIndex: number = hourStrings[0].indexOf(":");
  const startSpaceIndex: number = hourStrings[0].indexOf(" ");
  const endColonIndex: number = hourStrings[hourStrings.length - 1].indexOf(
    ":"
  );
  const endSpaceIndex: number = hourStrings[hourStrings.length - 1].indexOf(
    " "
  );

  const startHourInt: number = parseInt(
    hourStrings[0].substring(0, startColonIndex)
  );
  const endHourInt: number = parseInt(
    hourStrings[hourStrings.length - 1].substring(0, endColonIndex)
  );

  const startAmPm: string = hourStrings[0].substring(startSpaceIndex + 1);
  const endAmPm: string = hourStrings[hourStrings.length - 1].substring(
    endSpaceIndex + 1
  );

  switch (startHourInt) {
    case 12:
      editableArr.splice(0, 0, `11:00 ${startAmPm === "a.m" ? "p.m" : "a.m"}`);
    case 1:
      editableArr.splice(0, 0, `12:00 ${startAmPm}`);
    default:
      editableArr.splice(0, 0, `${startHourInt - 1}:00 ${startAmPm}`);
  }

  switch (endHourInt) {
    case 12:
      editableArr.splice(editableArr.length, 0, `1:00 ${endAmPm}`);
    case 11:
      editableArr.splice(
        editableArr.length,
        0,
        `12:00 ${endAmPm === "a.m" ? "p.m" : "a.m"}`
      );
    default:
      editableArr.splice(0, 0, `${endHourInt + 1}:00 ${endAmPm}`);
  }

  console.log(editableArr);
};
