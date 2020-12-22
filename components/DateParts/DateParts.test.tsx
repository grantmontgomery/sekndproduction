import * as React from "react";
import { DateParts } from "./DateParts";
import { PartsProvider } from "../../state/DatePartsContext";
import { fireEvent, render } from "@testing-library/react";

test("testing DatParts input", () => {
  const { getByTestId } = render(
    <PartsProvider>
      <DateParts location="nav"></DateParts>
    </PartsProvider>
  );

  const inputElement = getByTestId("partsInput") as HTMLInputElement;

  fireEvent.change(inputElement, {
    target: { value: "Hike Hollywood!" },
  });

  const inputValue: string = inputElement.value;

  expect(inputValue).toBe("Hike Hollywood!");
});
