import React from "react";
import { render } from "@testing-library/react";
import { PartsProvider } from "./state/DatePartsContext";
import { GridProvider } from "./state/SearchGridContext";
import Cookie from "js-cookie";
import { RectanglesProvider } from "./state/GridRectanglesContext";
import { ModalProvider } from "./state/ModalContext";
import { UserProvider } from "./state/UserContext";

const AllProviders = ({ children }) => {
  return (
    <PartsProvider>
      <ModalProvider>
        <GridProvider
          initialState={
            Cookie.get("grid") ? JSON.parse(Cookie.get("grid")) : null
          }
        >
          <RectanglesProvider>
            <UserProvider>{children}</UserProvider>
          </RectanglesProvider>
        </GridProvider>
      </ModalProvider>
    </PartsProvider>
  );
};

const customRender = (ui, options) => {
  render(ui, { wrapper: AllProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
