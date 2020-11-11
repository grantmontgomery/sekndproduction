import * as React from "react";

type State = {
  allowToggle: { mobileLinks: boolean; dateParts: boolean; searchBox: boolean };
  allowDisplay: {
    mobileLinks: boolean;
    dateParts: boolean;
    searchBox: boolean;
  };
  modalOpen: boolean;
};

type Action = {
  type: string;
};

const modalReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "MOBILE_LINKS":
      return {
        allowToggle: { mobileLinks: true, dateParts: false, searchBox: false },
        allowDisplay: { mobileLinks: true, dateParts: false, searchBox: false },
        modalOpen: true,
      };
    case "DATE_PARTS":
      return {
        allowToggle: { dateParts: true, mobileLinks: false, searchBox: false },
        allowDisplay: { dateParts: true, mobileLinks: false, searchBox: false },
        modalOpen: true,
      };
    case "SEARCH_BOX":
      return {
        allowToggle: { searchBox: true, mobileLinks: false, dateParts: false },
        allowDisplay: { searchBox: true, mobileLinks: false, dateParts: false },

        modalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        allowToggle: { mobileLinks: true, dateParts: true, searchBox: true },
        allowDisplay: {
          mobileLinks: false,
          dateParts: false,
          searchBox: false,
        },

        modalOpen: false,
      };
  }
};

const ModalContext: React.Context<State | undefined> = React.createContext(
  undefined
);
const ModalDispatch: React.Context<
  React.Dispatch<Action> | undefined
> = React.createContext(undefined);

export const ModalProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }) => {
  const [state, dispatch] = React.useReducer(modalReducer, {
    allowToggle: { mobileLinks: true, dateParts: true, searchBox: true },
    allowDisplay: { mobileLinks: false, dateParts: false, searchBox: false },
    modalOpen: false,
  });

  React.useEffect(() => {
    state.modalOpen
      ? (document.querySelector("body").style.overflowY = "hidden")
      : (document.querySelector("body").style.overflowY = "scroll");
  }, [state.modalOpen]);

  return (
    <ModalContext.Provider value={state}>
      <ModalDispatch.Provider value={dispatch}>
        {children}
      </ModalDispatch.Provider>
    </ModalContext.Provider>
  );
};

export const useModalState = (): State => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("Please use within Modal Provider");
  }
  return context;
};

export const useModalDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(ModalDispatch);
  if (context === undefined) {
    throw new Error("Please use within Modal Dispatch Provider");
  }
  return context;
};
