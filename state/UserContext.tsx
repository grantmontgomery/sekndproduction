import * as React from "react";

type State = {
  user: any | null;
};

type Action = {
  type: string;
  payload?: {
    name: string;
    id: string;
    email: string;
    username: string;
    dates: any;
  };
};

const userReducer: React.Reducer<State, Action> = (state: State, action) => {
  switch (action.type) {
    case "SET_USER":
      return { user: { ...action.payload } };
    case "LOG_OUT":
      return { user: null };
  }
};

const UserStateContext: React.Context<State | undefined> = React.createContext(
  undefined
);
const UserDispatchContext: React.Context<
  React.Dispatch<Action> | undefined
> = React.createContext(undefined);

export const UserProvider: ({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: any;
}) => JSX.Element = ({ children, initialUser }) => {
  const [state, dispatch] = React.useReducer(
    userReducer,
    initialUser ? initialUser : { user: null }
  );

  console.log(state);
  console.log(initialUser);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = (): State => {
  const context: State = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("Please use within UserProvider");
  }
  return context;
};

export const useUserDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("Please use within UserProvider");
  }
  return context;
};
