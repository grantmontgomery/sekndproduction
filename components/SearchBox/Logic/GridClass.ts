export default class GridClass {
  unixStartDate: number;
  unixEndDate: number;
  numberofRectangles: number;
  templateAreas: string;
  startHour: number;
  hourDifference: number;
  rowAmount: number;
  endHour: number;
  hourStrings: string[];

  constructor(unixStartDate: number, unixEndDate: number) {
    this.unixStartDate = unixStartDate;
    this.unixEndDate = unixEndDate;
    this.startHour = 0;
    this.hourDifference = 0;
    this.templateAreas = "";
    this.rowAmount = 0;
    this.endHour = 0;
    this.hourStrings = [];
    this.numberofRectangles = 0;
  }

  private setRectangles() {
    const timeDifference: number = this.unixEndDate - this.unixStartDate;
    const hours: number = Math.floor(timeDifference / 3600);
    const numRows: number = hours * 2 + 2;
    this.numberofRectangles = numRows;
    this.rowAmount = numRows;
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
    let templateAreas = "";
    let rowCount = 0;
    let hourIndex = 0;

    while (rowCount < this.rowAmount) {
      if (rowCount === 0 || rowCount === this.rowAmount - 1) {
        templateAreas = templateAreas.concat(`". rectangle${rowCount}"`);
      } else {
        templateAreas = templateAreas.concat(
          `"hour${hourIndex} rectangle${rowCount}"`
        );
      }

      rowCount % 2 === 0 && rowCount !== 0 ? hourIndex++ : null;
      rowCount++;
    }
    this.templateAreas = templateAreas;
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
    this.setRectangles();
    this.setHours();
    this.setHoursHeader();
    this.setGridTemplate();
  }
}
