import { render } from "@testing-library/react";
import React from "react";

import { Button } from "./Button";

describe("Button", () => {
  test("renders with the correct name", () => {
    const name = "test name";
    const { getByText } = render(<Button name={name} />);
    const buttonElement = getByText(/Let's get it/i);
    const nameElement = getByText(name);

    expect(buttonElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });
});
