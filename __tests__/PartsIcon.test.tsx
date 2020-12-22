import * as React from "react";
import { PartsIcon } from "../components/PartsIcon/PartsIcon";
import { ModalProvider } from "../state/ModalContext";
import { PartsProvider } from "../state/DatePartsContext";
import { render } from "@testing-library/react";

test("Test render of PartsIcon", () => {
  const component = render(
    <PartsProvider>
      <ModalProvider>
        <PartsIcon></PartsIcon>
      </ModalProvider>
    </PartsProvider>
  );

  expect(component).toMatchSnapshot();
});
