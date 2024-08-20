import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("Counters", () => {
  test("render correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const increaseButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(increaseButton).toBeInTheDocument();

    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    expect(setButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const increaseButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(increaseButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
});
