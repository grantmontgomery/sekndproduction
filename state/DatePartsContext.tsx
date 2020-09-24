import * as React from "react";

type PartsState = {
  parts: { [key: string]: any }[];
};
type Action = {
  type: string;
  payload: { id?: string; part?: { [key: string]: any } };
};
const partsReducer: React.Reducer<PartsState, Action> = (
  state: PartsState,
  action
) => {
  switch (action.type) {
    case "ADD_PART":
      return { parts: [...state.parts, action.payload.part] };
    case "REMOVE_PART":
      return {
        parts: state.parts.filter((part) => part.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const PartsStateContext: React.Context<PartsState> = React.createContext(
  undefined
);

const PartsDispatchContext: React.Context<
  React.Dispatch<Action> | undefined
> = React.createContext(undefined);

export const PartsProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(partsReducer, {
    parts: [],
  });

  return (
    <PartsStateContext.Provider value={state}>
      <PartsDispatchContext.Provider value={dispatch}>
        {children}
      </PartsDispatchContext.Provider>
    </PartsStateContext.Provider>
  );
};

export const usePartsState = (): PartsState => {
  const context: PartsState = React.useContext(PartsStateContext);
  if (undefined === context) {
    throw new Error("Please use within PartsProvider");
  }
  return context;
};

export const usePartsDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(PartsDispatchContext);
  if (undefined === context) {
    throw new Error("Please use within PartsProvider");
  }
  return context;
};
