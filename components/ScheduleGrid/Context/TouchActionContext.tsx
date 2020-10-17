import * as React from "react";

type State = {
  stopTouchScroll: boolean;
};
type Action = {
  stopTouchScroll: boolean;
};

const touchReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.stopTouchScroll) {
    case true:
      return { stopTouchScroll: true };
    case false:
      return { stopTouchScroll: false };
    default:
      return { stopTouchScroll: false };
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
