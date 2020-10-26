import * as React from "react";
import Cookie from "js-cookie";

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
  initialGridState,
}: {
  children: React.ReactNode;
  initialGridState?: State;
}) => JSX.Element = ({ children, initialGridState }) => {
  const [state, dispatch] = React.useReducer(
    gridReducer,
    initialGridState
      ? initialGridState
      : {
          gridTemplate: "",
          hourStrings: [],
          hourStringsTrue: [],
          endDate: null,
          startDate: null,
        }
  );

  React.useEffect(() => {
    Cookie.set("grid", state);
    localStorage.setItem("gridTemplate", state.gridTemplate);
  }, [state]);

  React.useEffect(() => {
    console.log(localStorage.getItem("gridTemplate"));
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
