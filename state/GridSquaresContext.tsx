import * as React from "react";

type State = {
  squares: { part: { [key: string]: any } | null }[];
};
type Action = {
  type: string;
  payload: {
    numberOfSquares?: number;
    part?: { [key: string]: any };
    index?: number;
    id?: string;
  };
};

const squaresReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "ADD_SQUARES":
      const squares: State["squares"] = [];
      let numberOfSquares: number = 0;
      while (numberOfSquares < action.payload.numberOfSquares) {
        squares.push({ part: null });
      }
      return { squares };
    case "ADD_PART_TO_SQUARE":
      return {
        squares: state.squares.map((square, i) => {
          return i !== action.payload.index
            ? square
            : { part: action.payload.part };
        }),
      };
    case "REMOVE_PART_FROM_SQUARE":
      return {
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

const SquaresContext: React.Context<State> = React.createContext(undefined);

const SquaresDispatch: React.Context<
  React.Dispatch<Action> | undefined
> = React.createContext(undefined);

export const SquaresProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(squaresReducer, {
    squares: [],
  });
  return (
    <SquaresContext.Provider value={state}>
      <SquaresDispatch.Provider value={dispatch}>
        {children}
      </SquaresDispatch.Provider>
    </SquaresContext.Provider>
  );
};

export const useSquaresState = (): State => {
  const context = React.useContext(SquaresContext);
  if (context === undefined) {
    throw new Error("Please use within Squares Provider");
  }
  return context;
};

export const useSquaresDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(SquaresDispatch);

  if (context === undefined) {
    throw new Error("Please use within Squares Provider");
  }
  return context;
};
