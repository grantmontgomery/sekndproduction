import * as React from "react";
import Cookie from "js-cookie";
import { useRectanglesDispatch } from "./GridRectanglesContext";

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
    startDate: Date;
    endDate: Date;
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

const GridStateContext: React.Context<State> = React.createContext(undefined);

const GridDispatchContext: React.Context<
  React.Dispatch<Action> | undefined
> = React.createContext(undefined);

export const GridProvider: ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: State & { numberOfSquares: number };
}) => JSX.Element = ({ children, initialState }) => {
  const [state, dispatch] = React.useReducer(
    gridReducer,
    initialState
      ? {
          gridTemplate: initialState.gridTemplate,
          hourStrings: initialState.hourStrings,
          hourStringsTrue: initialState.hourStringsTrue,
          endDate: initialState.endDate,
          startDate: initialState.startDate,
        }
      : {
          gridTemplate: "",
          hourStrings: [],
          hourStringsTrue: [],
          endDate: null,
          startDate: null,
        }
  );

  React.useEffect(() => {
    Cookie.set(
      "grid",
      JSON.stringify({
        ...state,
        numberOfSquares: (state.hourStrings.length + 1) * 2,
      })
    );
  }, [state]);

  const rectanglesDispatch = useRectanglesDispatch();

  React.useEffect(() => {
    if (!window.sessionStorage.getItem("rectangles")) {
      console.log("initializing state maybe with Cookies.");
      initialState
        ? rectanglesDispatch({
            type: "ADD_RECTANGLES",
            payload: { numberOfRectangles: initialState.numberOfSquares },
          })
        : null;
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
