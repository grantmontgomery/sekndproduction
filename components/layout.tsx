import * as React from "react";
import { Nav } from "./Nav";

export const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Nav></Nav>
    </React.Fragment>
  );
};
