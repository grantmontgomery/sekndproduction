import * as React from "react";
import Cookies from "js-cookie";
import { useRectanglesDispatch } from "./GridRectanglesContext";
import CustomDocument from "../pages/_document";

type State = {
  hourStrings: string[];
  gridTemplate: string;
  startDate: Date | null;
  endDate: Date | null;
  hourStringsTrue: string[];
};

type Action = {
  type: string;
  payload: {
    gridTemplate: string;
    hourStrings: string[];
    hourStringsTrue: string[];
    startDate: Date | null;
    endDate: Date | null;
  };
};

const gridReducer: React.Reducer<State, Action> = (state: State, action) => {
  switch (action.type) {
    case "ADD_GRID_TEMPLATE":
      return {
        hourStrings: action.payload.hourStrings,
        gridTemplate: action.payload.gridTemplate,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        hourStringsTrue: action.payload.hourStringsTrue,
      };

    default:
      return state;
  }
};

const GridStateContext: React.Context<State | any> = React.createContext(
  undefined
);

const GridDispatchContext: React.Context<
  React.Dispatch<Action> | any
> = React.createContext(undefined);

export const GridProvider: ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: (State & { numberOfSquares: number }) | undefined;
}) => JSX.Element = ({ children, initialState }) => {
  const [state, dispatch] = React.useReducer(
    gridReducer,
    initialState ?? {
      gridTemplate: "",
      hourStrings: [],
      hourStringsTrue: [],
      endDate: null,
      startDate: null,
    }
  );

  React.useEffect(() => {
    document.cookie = `grid=${JSON.stringify({
      ...state,
      numberOfSquares: (state.hourStrings.length + 1) * 2,
    })};samesite=strict, secure`;
  }, [state]);

  const rectanglesDispatch = useRectanglesDispatch();

  React.useEffect(() => {
    if (!window.sessionStorage.getItem("rectangles")) {
      initialState &&
        rectanglesDispatch({
          type: "ADD_RECTANGLES",
          payload: { numberOfRectangles: initialState.numberOfSquares },
        });
    }
  }, []);

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

  if (context === undefined) {
    throw new Error("Please use within GridProvider");
  }
  return context;
};

export const useGridDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(GridDispatchContext);

  if (context === undefined) {
    throw new Error("Please use within GridProvider");
  }
  return context;
};
