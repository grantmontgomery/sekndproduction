import * as React from "react";
import { DateParts } from "./DateParts";
import { PartsProvider } from "../../state/DatePartsContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

const component = render(<DateParts location="nav"></DateParts>, {
  wrapper: PartsProvider,
});
const textInput = component.getByTestId("partText") as HTMLInputElement;
// const ColorInput = component.getByTestId("partColor");

describe("DateParts", () => {
  // it("should render", () => {
  //   expect(component)();
  // });

  it("should type in text input", () => {
    fireEvent.change(textInput, {
      target: { value: "Hike Hollywood!" },
    });

    expect(textInput.value).toBe("Hike Hollywood!");
  });

  // it("should click on color", () => {
  //   const mockCallBack = jest.fn();
  //   fireEvent.click(ColorInput);
  // });
});
