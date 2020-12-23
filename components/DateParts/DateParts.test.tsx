import * as React from "react";
import { DateParts } from "./DateParts";
import { DatePart } from "../DatePart/DatePart";
import { PartsProvider } from "../../state/DatePartsContext";
import {
  createEvent,
  fireEvent,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import { shallow } from "enzyme";

describe("DateParts", () => {
  it("should render", () => {
    const component = render(<DateParts location="nav"></DateParts>, {
      wrapper: PartsProvider,
    });
    expect(screen.queryByText("Date Parts").textContent).toBe("Date Parts");
    expect(component).toMatchSnapshot();
  });
  it("should type in text input", () => {
    const component = render(<DateParts location="nav"></DateParts>, {
      wrapper: PartsProvider,
    });
    const textInput = component.getByTestId("partText") as HTMLInputElement;

    fireEvent.change(textInput, {
      target: { value: "Hike Hollywood!" },
    });

    expect(textInput.value).toBe("Hike Hollywood!");
  });

  it("should throw error on missing text field", () => {
    const component = render(<DateParts location="nav"></DateParts>, {
      wrapper: PartsProvider,
    });

    const colorInput = component.getByTestId("partColor") as HTMLElement;
    const addButton = component.getByTestId("addPart") as HTMLElement;

    fireEvent.click(colorInput);
    // fireEvent.click(addButton);

    expect(fireEvent.click(addButton)).toThrow();
  });

  it("should create new Date Part", () => {
    const component = render(<DateParts location="nav"></DateParts>, {
      wrapper: PartsProvider,
    });
    const textInput = component.getByTestId("partText") as HTMLInputElement;
    const colorInput = component.getByTestId("partColor") as HTMLElement;
    const addButton = component.getByTestId("addPart") as HTMLElement;

    fireEvent.change(textInput, {
      target: { value: "Hike Hollywood!" },
    });
    fireEvent.click(colorInput);
    fireEvent.click(addButton);

    expect(component.getAllByText("Hike Hollywood!").length).toBe(1);
  });
});
