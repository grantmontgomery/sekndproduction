import { Dispatch } from "react";
import { useGridDispatch } from "../../../state/SearchGridContext";

class ScheduleGrid {
  unixStartDate: number;
  unixEndDate: number;
  numberofSquares: number;
  templateAreas: string;
  startHour: number;
  hourDifference: number;
  columnAmount: number;
  endHour: number;
  hourStrings: string[];

  constructor(unixStartDate: number, unixEndDate: number) {
    this.unixStartDate = unixStartDate;
    this.unixEndDate = unixEndDate;
    this.startHour = 0;
    this.hourDifference = 0;
    this.templateAreas = "";
    this.columnAmount = 0;
    this.endHour = 0;
    this.hourStrings = [];
    this.numberofSquares = 0;
  }

  private setSquares() {
    const timeDifference: number = this.unixEndDate - this.unixStartDate;
    const hours: number = Math.floor(timeDifference / 3600);
    const numColumns: number = hours * 2 + 4;
    const numberOfSquares: number = numColumns * 5;
    this.numberofSquares = numberOfSquares;
    this.columnAmount = numColumns;
    this.hourDifference = hours;
  }

  private setHours() {
    const startDate: Date = new Date(this.unixStartDate * 1000);
    const endDate: Date = new Date(this.unixEndDate * 1000);

    const startHour: number = startDate.getHours();
    const endHour: number = endDate.getHours();

    this.startHour = startHour;
    this.endHour = endHour;
  }

  private setGridTemplate() {
    const square: string = "square ";
    const rowString: string = `"${square.repeat(
      this.columnAmount - 1
    )} square"`;
    this.templateAreas = `${rowString.repeat(5)}`;
  }

  private setHoursHeader() {
    let hourCounter: number = 0;
    let startHourCounter: number = this.startHour;

    const hourNumbers: number[] = [];

    while (hourCounter <= this.hourDifference) {
      hourNumbers.push(startHourCounter);
      hourCounter++;
      startHourCounter < 24 ? startHourCounter++ : (startHourCounter = 1);
    }

    const hourStrings: string[] = [];

    hourNumbers.forEach((hour) => {
      if (hour === 24) {
        return hourStrings.push("12:00 a.m");
      } else if (hour === 12) {
        return hourStrings.push("12:00 p.m");
      } else {
        return hour < 12
          ? hourStrings.push(`${hour}:00 a.m`)
          : hourStrings.push(`${hour - 12}:00 p.m`);
      }
    });
    this.hourStrings = hourStrings;
  }

  public setGrid() {
    this.setSquares();
    this.setHours();
    this.setGridTemplate();
    this.setHoursHeader();
  }
}

export default function setSquares(
  unixStartDate: number,
  unixEndDate: number
): void {
  const newDate = new ScheduleGrid(unixStartDate, unixEndDate);
  newDate.setGrid();
  return useGridDispatch()({ type: "" });
}
