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

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 3000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
