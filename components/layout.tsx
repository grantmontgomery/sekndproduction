import * as React from "react";
import { ModalDark } from "./ModalDark";
import { useModalDispatch } from "../state/ModalContext";
import { useModalState } from "../state/ModalContext";
import { Nav } from "./Nav";

export const Layout: React.FC = ({ children }) => {
  const { modalOpen, allowToggle } = useModalState();
  const modalDispatch = useModalDispatch();
  React.useEffect(() => {
    return modalDispatch({ type: "CLOSE_MODAL" });
  }, []);
  console.log(allowToggle);
  return (
    <React.Fragment>
      {/* {modalOpen ? <ModalDark></ModalDark> : null} */}
      <Nav></Nav>
      {children}
    </React.Fragment>
  );
};
