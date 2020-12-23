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

const component = render(<DateParts location="nav"></DateParts>, {
  wrapper: PartsProvider,
});
const textInput = component.getByTestId("partText") as HTMLInputElement;
const colorInput = component.getByTestId("partColor") as HTMLElement;
const addButton = component.getByTestId("addPart") as HTMLElement;
const partsList: HTMLElement = component.getByTestId("partsList");

describe("DateParts", () => {
  it("should render", () => {
    expect(screen.queryByText("Date Parts").textContent).toBe("Date Parts");
  });
  it("should type in text input", () => {
    fireEvent.change(textInput, {
      target: { value: "Hike Hollywood!" },
    });

    expect(textInput.value).toBe("Hike Hollywood!");
  });

  it("should create new element", () => {
    fireEvent.change(textInput, {
      target: { value: "Hike Hollywood!" },
    });

    fireEvent.click(colorInput);
    fireEvent.click(addButton);

    // component.getByText("Hike Hollywood!");
    // expect(partsList.childNodes).toContain(
    //   <DatePart
    //     part={{
    //       name: "Hike Hollywood!",
    //       color: "linear-gradient(45deg, #155799, #159957)",
    //       details: "",
    //       id: randomId,
    //       type: "custom",
    //     }}
    //     location=""
    //   ></DatePart>
    // );
  });
});
