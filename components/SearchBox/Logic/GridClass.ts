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
  hourStringsTrue: string[];

  constructor(unixStartDate: number, unixEndDate: number) {
    this.unixStartDate = unixStartDate;
    this.unixEndDate = unixEndDate;
    this.startHour = 0;
    this.hourDifference = 0;
    this.templateAreas = "";
    this.rowAmount = 0;
    this.endHour = 0;
    this.hourStrings = [];
    this.hourStringsTrue = [];
    this.numberofRectangles = 0;
  }

  private setRectangles() {
    const timeDifference: number = this.unixEndDate - this.unixStartDate;
    const hours: number = Math.floor(timeDifference / 3600) + 1;
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

      if (rowCount % 2 === 0 && rowCount !== 0) hourIndex++;
      rowCount++;
    }
    this.templateAreas = templateAreas;
  }

  private setHoursHeader() {
    let hourCounter: number = 0;
    let startHourCounter: number = this.startHour;

    const hourNumbers: number[] = [];

    while (hourCounter < this.hourDifference) {
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
        editableArr.splice(
          0,
          0,
          `11:00 ${startAmPm === "a.m" ? "p.m" : "a.m"}`
        );
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
        editableArr.splice(
          editableArr.length,
          0,
          `${endHourInt + 1}:00 ${endAmPm}`
        );
    }

    this.hourStrings = hourStrings;
    this.hourStringsTrue = editableArr;
  }

  public setGrid() {
    this.setRectangles();
    this.setHours();
    this.setHoursHeader();
    this.setGridTemplate();
  }
}
