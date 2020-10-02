import { useGridDispatch } from "../../../state/SearchGridContext";

class ScheduleGrid {
  startTime: number;
  startDate: string;
  endTime: number;
  endDate: string;
  numberofSquares: number;
  startHour: string;
  endHour: string;

  constructor(unixStartDate, unixEndDate) {
    this.startDate = "";
    this.startTime = unixStartDate;
    this.endDate = "";
    this.endTime = unixEndDate;
    this.startHour = "";
    this.endHour = "";
    this.numberofSquares = 0;
  }

  public setSquares() {
    const timeDifference: number = this.endTime - this.startTime;
    const hours: number = Math.floor(timeDifference / 3600000);

    const numColumns: number = hours * 2 + 4;
    const numSquares: number = numColumns * 5;
    this.numberofSquares = numSquares;
  }

  public name() {}
}
