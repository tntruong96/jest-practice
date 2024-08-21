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

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const increaseButton = screen.getByRole("button", {
      name: "Increment",
    });
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const amountInput = screen.getByRole("spinbutton");

    await user.tab();
    expect(increaseButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const countElement = screen.getByRole("heading");

    await user.type(amountInput, "10");
    await user.click(setButton);
    expect(amountInput).toHaveValue(10);
    expect(countElement).toHaveTextContent("10");
  });
});
