import { render, screen } from "@testing-library/react";
import React from "react";

import { Accordion } from ".";

const mockItems = [
  {
    header: "Header 1",
    content: "Content 1",
  },
  {
    header: "Header 2",
    content: "Content 2",
  },
];

describe("Accordion", () => {
  it("renders all headers", () => {
    render(<Accordion items={mockItems} />);
    const headers = screen.getAllByRole("button", { name: /^Header \d$/ });

    expect(headers).toHaveLength(2);
  });

  it("renders content after clicking header", async () => {
    render(<Accordion items={mockItems} />);
    const header2 = screen.getByRole("button", { name: "Header 2" });

    header2.click();
    const content = await screen.findByText("Content 2");

    expect(content).toBeInTheDocument();
  });
});
