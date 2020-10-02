import * as React from "react";

type Squares = { part: JSX.Element }[];

type GridTimes = {
  startTime: number;
  startDate: string;
  endTime: number;
  endDate: string;
};

type State = {
  squares: Squares
} & GridTimes

type Action = {
  type: string;
  payload: {
    id?: string,
    squares?:number,
    startTime?:string,
    
  }
}

//squares for the grid
//grid template string
//grid template columns
//grid template width?
//grid start and end dates

const gridReducer:React.Reducer<State, 