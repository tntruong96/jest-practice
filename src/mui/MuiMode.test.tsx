import { render, screen } from "../utils/test-utils";
import { MuiMode } from "./MuiMode";

describe("Mui Mode", () => {
  test("render test correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
