import * as React from "react";

type PartsState = {
  parts: { [key: string]: any }[];
};
type Action = {
  type: string;
  payload: { id?: string; part?: { [key: string]: any }; details?: string };
};
const partsReducer: React.Reducer<PartsState, Action> = (
  state: PartsState,
  action
) => {
  switch (action.type) {
    case "ADD_PART":
      return state.parts.length < 7
        ? { parts: [...state.parts, action.payload.part] }
        : null;
    case "REMOVE_PART":
      return {
        parts: state.parts.filter((part) => part.id !== action.payload.id),
      };
    case "CHANGE_CUSTOM_DETAIL":
      return {
        parts: state.parts.map((part) => {
          if (part.id !== action.payload.id) return part;

          return { ...part, details: action.payload.details };
        }),
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
  if (context === undefined) {
    throw new Error("Please use within PartsProvider");
  }
  return context;
};

export const usePartsDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(PartsDispatchContext);
  if (context === undefined) {
    throw new Error("Please use within PartsProvider");
  }
  return context;
};
