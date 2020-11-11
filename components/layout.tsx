import * as React from "react";
import { ModalDark } from "./ModalDark";
import { useModalState } from "../state/ModalContext";
import { Nav } from "./Nav";

export const Layout: React.FC = ({ children }) => {
  const { modalOpen } = useModalState();
  return (
    <React.Fragment>
      {/* {modalOpen ? <ModalDark></ModalDark> : null} */}
      <Nav></Nav>
      {children}
    </React.Fragment>
  );
};
