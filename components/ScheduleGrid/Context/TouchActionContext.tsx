import * as React from "react";

type State = {
  stopTouch: boolean;
  customPiece: boolean;
  pieceStartIndex: number | null;
};

type Action = {
  type: string;
  payload: {
    stopTouch?: boolean;
    index?: number;
  };
};

const touchReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "STOP_SCROLL":
      return { ...state, stopTouch: true };
    case "ACTIVATE_SCROLL":
      return { ...state, stopTouch: false };
    case "SET_CUSTOM_PIECE":
      return {
        ...state,
        pieceStartIndex: action.payload.index,
        customPiece: true,
      };
    default:
      return { customPiece: false, stopTouch: false, pieceStartIndex: null };
  }
};

const TouchContext: React.Context<State> = React.createContext(undefined);

const TouchDispatch: React.Context<
  React.Dispatch<Action> | undefined
> = React.createContext(undefined);

export const TouchProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }) => {
  const [state, dispatch] = React.useReducer(touchReducer, {
    stopTouch: false,
    customPiece: false,
    pieceStartIndex: null,
  });

  return (
    <TouchContext.Provider value={state}>
      <TouchDispatch.Provider value={dispatch}>
        {children}
      </TouchDispatch.Provider>
    </TouchContext.Provider>
  );
};

export const useTouchState = (): State => {
  const context = React.useContext(TouchContext);
  if (context === undefined) {
    throw new Error("Please use within Touch Provider");
  }
  return context;
};

export const useTouchDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(TouchDispatch);

  if (context === undefined) {
    throw new Error("Please use within Rectangles Provider");
  }
  return context;
};
