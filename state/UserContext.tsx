import * as React from "react";
import { NextRouter, Router, useRouter } from "next/router";

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

export const UserProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, { user: null });

  const router: NextRouter = useRouter();

  React.useEffect(() => {
    fetch(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/handleAuth"
        : "",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.username) dispatch({ type: "SET_USER", payload: data });
      })
      .catch((err) => {
        return err;
      });
  }, []);
  React.useEffect(() => {
    if (state.user) {
      router.push(`/user/${state.user.username}`);
    }
  }, [state]);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};
