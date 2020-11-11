import * as React from "react";
import { ModalDark } from "./ModalDark";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useModalDispatch } from "../state/ModalContext";
import { useModalState } from "../state/ModalContext";
import { Nav } from "./Nav";
import css from "../styles/Layout.module.scss";

export const Layout: React.FC = ({ children }) => {
  const { modalOpen, allowToggle } = useModalState();
  const modalDispatch = useModalDispatch();
  React.useEffect(() => {
    return modalDispatch({ type: "CLOSE_MODAL" });
  }, []);

  const applyModalTransitions: () => JSX.Element | null = () => {
    return modalOpen ? (
      <CSSTransition
        timeout={250}
        classNames={{
          enter: `${css["modal-enter"]}`,
          enterActive: `${css["modal-enter-active"]}`,
          exit: `${css["modal-exit"]}`,
          exitActive: `${css["modal-exit-active"]}`,
        }}
      >
        <ModalDark></ModalDark>
      </CSSTransition>
    ) : null;
  };

  return (
    <React.Fragment>
      <TransitionGroup>{applyModalTransitions()}</TransitionGroup>
      <Nav></Nav>
      {children}
    </React.Fragment>
  );
};
