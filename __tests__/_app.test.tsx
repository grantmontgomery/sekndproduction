import React from "react";
import { render } from "../test-utils";
import Index from "../pages/index";

test("renders deploy link", () => {
  const component = render(<Index />);

  expect(component).toMatchSnapshot();
});
