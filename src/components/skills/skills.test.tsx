import { render, screen } from "@testing-library/react";
import { Skills } from ".";

describe("Skills render", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("test length item", () => {
    render(<Skills skills={skills} />);
    const lengthElm = screen.getAllByRole("listitem");
    expect(lengthElm).toHaveLength(3);
  });
});
