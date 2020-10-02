import * as React from "react";

type Squares = { part: { [key: string]: any } | null }[];

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
    numberOfSquares?: number;
    startDate?: string;
    startTime?: number;
    endDate?: string;
    endTime?: number;
    part?: { [key: string]: any };
  };
};

const gridReducer: React.Reducer<State, Action> = (state: State, action) => {
  switch (action.type) {
    case "ADD_SQUARES":
      const squares: Squares = [];
      let numberOfSquares: number = 0;
      while (numberOfSquares < action.payload.numberOfSquares) {
        squares.push({ part: null });
      }
      return { ...state, squares };
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
        squares: state.squares.map((square, i) => {
          return i !== action.payload.index
            ? square
            : { part: action.payload.part };
        }),
      };
    case "REMOVE_PART_FROM_SQUARE":
      return {
        ...state,
        squares: state.squares.map((square, i) => {
          return i !== action.payload.index
            ? { part: action.payload.part }
            : square;
        }),
      };
    default:
      return state;
  }
};

const GridStateContext: React.Context<State> = React.createContext(undefined);

const GridDispatchContext: React.Context<
  React.Dispatch<Action> | undefined
> = React.createContext(undefined);

export const GridProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(gridReducer, {
    squares: [],
    startDate: "",
    startTime: 0,
    endDate: "",
    endTime: 0,
  });

  return (
    <GridStateContext.Provider value={state}>
      <GridDispatchContext.Provider value={dispatch}>
        {children}
      </GridDispatchContext.Provider>
    </GridStateContext.Provider>
  );
};

export const useGridState = (): State => {
  const context = React.useContext(GridStateContext);

  if (undefined === context) {
    throw new Error("Please use within GridProvider");
  }
  return context;
};

export const useGridDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(GridDispatchContext);

  if (undefined === context) {
    throw new Error("Please use within GridProvider");
  }
  return context;
};
