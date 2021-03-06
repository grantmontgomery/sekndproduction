import * as React from "react";

interface State {
  rectangles: { part: { [key: string]: any } | null }[] | any;
}

type Action = {
  type: string;
  payload: {
    numberOfRectangles?: number;
    part?: { [key: string]: any } | null;
    index?: number | null;
    pieceHeight?: number;
    id?: string;
    cache?: { part: { [key: string]: any } | null }[];
  };
};

const rectanglesReducer: React.Reducer<State, Action> = (state, action) => {
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
        rectangles: state.rectangles.map((rectangle: any, i: number) => {
          return i !== action.payload.index
            ? rectangle
            : { part: action.payload.part };
        }),
      };
    case "REMOVE_PART_FROM_RECTANGLE":
      return {
        rectangles: state.rectangles.map((rectangle: any, i: number) => {
          return i !== action.payload.index ? rectangle : { part: null };
        }),
      };

    case "CHANGE_PIECE_HEIGHT":
      return {
        rectangles: state.rectangles.map((rectangle: any, i: number) => {
          return i !== action.payload.index
            ? rectangle
            : {
                part: {
                  ...rectangle.part,
                  pieceHeight: action.payload.pieceHeight,
                },
              };
        }),
      };
    case "SET_PIECE":
      return {
        rectangles: state.rectangles.map((rectangle: any, i: number) => {
          return i !== action.payload.index
            ? rectangle
            : {
                part: {
                  ...rectangle.part,
                  ...action.payload.part,
                },
              };
        }),
      };
    case "UPDATE_FROM_CACHE":
      return {
        rectangles: action.payload.cache,
      };
    default:
      return state;
  }
};

const RectanglesContext: React.Context<State | any> = React.createContext(
  undefined
);

const RectanglesDispatch: React.Context<
  React.Dispatch<Action> | any
> = React.createContext(undefined);

export const RectanglesProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }) => {
  const [state, dispatch] = React.useReducer(rectanglesReducer, {
    rectangles: [],
  });

  const windowObject: React.MutableRefObject<
    Window | undefined
  > = React.useRef();

  React.useEffect(() => {
    if (windowObject.current)
      sessionStorage.setItem("rectangles", JSON.stringify(state));
  }, [state]);

  React.useEffect(() => {
    windowObject.current = window;

    if (windowObject.current.sessionStorage.getItem("rectangles")) {
      const rectanglesSessionStorageObject = sessionStorage.getItem(
        "rectangles"
      );

      const { rectangles } = JSON.parse(
        rectanglesSessionStorageObject ? rectanglesSessionStorageObject : ""
      );
      dispatch({ type: "UPDATE_FROM_CACHE", payload: { cache: rectangles } });
    }
  }, []);

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
