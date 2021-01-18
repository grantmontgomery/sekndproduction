import * as React from "react";
import css from "./UserIcon.module.scss";
import { useRouter, NextRouter } from "next/router";
import { useUserState } from "../../state/UserContext";
import { useModalDispatch, useModalState } from "../../state/ModalContext";

export const UserIcon: React.FC = () => {
  const { user } = useUserState();
  const modalDispatch = useModalDispatch();
  const { allowToggle, allowDisplay } = useModalState();
  const router: NextRouter = useRouter();

  const handleSignInModal: () => void = () => {
    modalDispatch({ type: allowDisplay.signIn ? "CLOSE_MODAL" : "SIGN_IN" });
  };
  return (
    <svg
      className={css.userIcon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 171.62 190"
      onClick={() =>
        user ? router.push(`/user/${user.username}`) : handleSignInModal()
      }
    >
      <path d="M85.81,1a53,53,0,1,1-53,53,53.07,53.07,0,0,1,53-53m0-1a54,54,0,1,0,54,54,54,54,0,0,0-54-54Z" />
      {user && (
        <path d="M26.81,91v18h18v7h-18v18h-7V116h-18v-7h18V91h7m1-1h-9v18H.81v9h18v18h9V117h18v-9h-18V90Z" />
      )}
      <path d="M85.81,127.36a87.88,87.88,0,0,1,53.3,17.81A89.37,89.37,0,0,1,170.26,189H1.36a89.37,89.37,0,0,1,31.15-43.83,87.88,87.88,0,0,1,53.3-17.81m0-1A89.67,89.67,0,0,0,0,190H171.62a89.67,89.67,0,0,0-85.81-63.64Z" />
    </svg>
  );
};
