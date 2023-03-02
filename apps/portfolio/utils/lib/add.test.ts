import add from "./add";

describe("add function", () => {
  test("adds two numbers correctly", () => {
    expect(add(2, 8)).toBe(10);
  });
});
