import * as React from "react";
import Cookie from "js-cookie";

type PartsState = {
  parts: { [key: string]: any }[];
};
type Action = {
  type: string;
  payload?: {
    id?: string;
    part?: { [key: string]: any };
    details?: string;
    parts?: PartsState["parts"];
  };
};
const partsReducer: React.Reducer<PartsState, Action> = (
  state: PartsState,
  action
) => {
  switch (action.type) {
    case "ADD_PART":
      if (state.parts.length < 5)
        return { parts: [...state.parts, action.payload.part] };
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
    case "CLEAR_PARTS":
      return { parts: [] };
    case "UPDATE_FROM_CACHE":
      return { parts: action.payload.parts };
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
}) => JSX.Element = ({ children }) => {
  const [state, dispatch] = React.useReducer(partsReducer, { parts: [] });

  const windowObject: React.MutableRefObject<
    Window | undefined
  > = React.useRef();

  React.useEffect(() => {
    if (windowObject.current)
      localStorage.setItem("parts", JSON.stringify(state));
  }, [state]);

  React.useEffect(() => {
    windowObject.current = window;
    if (windowObject.current.localStorage.getItem("parts"))
      dispatch({
        type: "UPDATE_FROM_CACHE",
        payload: {
          parts: Array.from(
            JSON.parse(windowObject.current.localStorage.getItem("parts")).parts
          ),
        },
      });
  }, []);

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
