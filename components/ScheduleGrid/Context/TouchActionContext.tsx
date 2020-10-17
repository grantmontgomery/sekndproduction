import * as React from "react";

type State = {
  stopTouchScroll: boolean;
  customPiece: boolean;
};
type Action = {
  type: string;
};

const touchReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "STOP_TOUCH_SCROLL":
      return { ...state, stopTouchScroll: true };
    case "ACTIVATE_TOUCH_SCROLL":
      return { ...state, stopTouchScroll: false };
    case "CUSTOM_PIECE":
      return { ...state, customPiece: true };
    default:
      return { stopTouchScroll: false, customPiece: false };
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
    stopTouchScroll: false,
    customPiece: false,
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
