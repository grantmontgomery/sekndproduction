import * as React from "react";
import Cookie from "js-cookie";

type State = {
  rectangles: { part: boolean }[];
};
type Action = {
  type: string;
  payload: {
    numberOfRectangles?: number;
    index?: number;
  };
};

const rectanglesReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "ADD_RECTANGLES":
      return {
        rectangles: [...new Array(action.payload.numberOfRectangles)].map(
          () => ({
            part: null,
          })
        ),
      };
    case "ADD_PART_TO_RECTANGLE":
      return {
        rectangles: state.rectangles.map((rectangle, i) =>
          i !== action.payload.index ? rectangle : { part: true }
        ),
      };
    case "REMOVE_PART_FROM_RECTANGLE":
      return {
        rectangles: state.rectangles.map((rectangle, i) =>
          i !== action.payload.index ? rectangle : { part: false }
        ),
      };
    default:
      return state;
  }
};

const RectanglesContext: React.Context<State> = React.createContext(undefined);

const RectanglesDispatch: React.Context<
  React.Dispatch<Action> | undefined
> = React.createContext(undefined);

export const RectanglesProvider: ({
  children,
  initialRectanglesState,
}: {
  children: React.ReactNode;
  initialRectanglesState?: State;
}) => JSX.Element = ({ children, initialRectanglesState }) => {
  const [state, dispatch] = React.useReducer(
    rectanglesReducer,
    initialRectanglesState
      ? initialRectanglesState
      : {
          rectangles: [],
        }
  );

  React.useEffect(() => {
    Cookie.set("rectangles", state);
  }, [state]);

  return (
    <RectanglesContext.Provider value={state}>
      <RectanglesDispatch.Provider value={dispatch}>
        {children}
      </RectanglesDispatch.Provider>
    </RectanglesContext.Provider>
  );
};

export const useRectanglesState = (): State => {
  const context = React.useContext(RectanglesContext);
  if (context === undefined) {
    throw new Error("Please use within Rectangles Provider");
  }
  return context;
};

export const useRectanglesDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(RectanglesDispatch);

  if (context === undefined) {
    throw new Error("Please use within Rectangles Provider");
  }
  return context;
};
