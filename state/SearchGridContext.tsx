import * as React from "react";

type Squares = { part: JSX.Element }[];

type GridTimes = {
  startTime: number;
  startDate: string;
  endTime: number;
  endDate: string;
};

type State = {
  squares: Squares;
} & GridTimes;

type Action = {
  type: string;
  payload: {
    id?: string;
    index?: number;
    squares?: number;
    startDate?: string;
    startTime?: number;
    endDate?: string;
    endTime?: number;
  };
};

//squares for the grid
//grid template string
//grid template columns
//grid template width?
//grid start and end dates

const gridReducer: React.Reducer<State, Action> = (state: State, action) => {
  switch (action.type) {
    case "ADD_SQUARES":
      return { ...state, squares: action.payload.squares };
    case "ADD_TIMES":
      return {
        ...state,
        startTime: action.payload.startTime,
        startDate: action.payload.startDate,
        endTime: action.payload.endTime,
        endDate: action.payload.endDate,
      };
    case "ADD_PART_TO_SQUARE":
      return {
        ...state,
        squares: state.squares.map((square, index) => index),
      };
    default:
      return state;
  }
};
