import * as React from "react";

interface State {
  allowToggle: {
    mobileLinks: boolean;
    dateParts: boolean;
    searchBox: boolean;
    signIn: boolean;
  };
  allowDisplay: {
    mobileLinks: boolean;
    dateParts: boolean;
    searchBox: boolean;
    signIn: boolean;
  };
  modalOpen: boolean;
}

interface Action {
  type: string;
}

const modalReducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "MOBILE_LINKS":
      return {
        allowToggle: {
          mobileLinks: true,
          dateParts: false,
          searchBox: false,
          signIn: false,
        },
        allowDisplay: {
          mobileLinks: true,
          dateParts: false,
          searchBox: false,
          signIn: false,
        },
        modalOpen: true,
      };
    case "DATE_PARTS":
      return {
        allowToggle: {
          dateParts: true,
          mobileLinks: false,
          searchBox: false,
          signIn: false,
        },
        allowDisplay: {
          dateParts: true,
          mobileLinks: false,
          searchBox: false,
          signIn: false,
        },
        modalOpen: true,
      };
    case "SEARCH_BOX":
      return {
        allowToggle: {
          searchBox: true,
          mobileLinks: false,
          dateParts: false,
          signIn: false,
        },
        allowDisplay: {
          searchBox: true,
          mobileLinks: false,
          dateParts: false,
          signIn: false,
        },

        modalOpen: true,
      };
    case "SIGN_IN":
      return {
        allowToggle: {
          signIn: true,
          mobileLinks: false,
          dateParts: false,
          searchBox: false,
        },
        allowDisplay: {
          mobileLinks: false,
          dateParts: false,
          searchBox: false,
          signIn: true,
        },
        modalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        allowToggle: {
          mobileLinks: true,
          dateParts: true,
          searchBox: true,
          signIn: true,
        },
        allowDisplay: {
          mobileLinks: false,
          dateParts: false,
          searchBox: false,
          signIn: false,
        },

        modalOpen: false,
      };
    default:
      return state;
  }
};

const ModalContext: React.Context<State | any> = React.createContext(undefined);
const ModalDispatch: React.Context<
  React.Dispatch<Action> | any
> = React.createContext(undefined);

export const ModalProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }) => {
  const [state, dispatch] = React.useReducer(modalReducer, {
    allowToggle: {
      mobileLinks: true,
      dateParts: true,
      searchBox: true,
      signIn: true,
    },
    allowDisplay: {
      mobileLinks: false,
      dateParts: false,
      searchBox: false,
      signIn: false,
    },
    modalOpen: false,
  });

  React.useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      state.modalOpen
        ? (body.style.overflowY = "hidden")
        : (body.style.overflowY = "scroll");
    }
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
