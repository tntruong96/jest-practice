import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("application test", () => {
  test("render correctly", () => {
    render(<Application />);

    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toBeInTheDocument();

    const h2Element = screen.getByRole("heading", {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();

    const textElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(textElement).toBeInTheDocument();

    const nameLabelElement = screen.getByLabelText("Name");
    expect(nameLabelElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();

    const termElement = screen.getByRole("checkbox");
    expect(termElement).toBeInTheDocument();

    const termLabelElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termLabelElement).toBeInTheDocument();

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();

    // multiple label text
    const multipleAbcLabel = screen.getByLabelText("abc");
    expect(multipleAbcLabel).toBeInTheDocument();

    // placeholder text element test

    const placeholderTextElement = screen.getByPlaceholderText("Fullname");
    expect(placeholderTextElement).toBeInTheDocument();

    // find by text

    const textEle = screen.getByText("All fields are mandatory", {
      selector: "p",
    });
    expect(textEle).toBeInTheDocument();
    const textSpanEle = screen.getByText("All fields are mandatory", {
      selector: "span",
    });
    expect(textSpanEle).toBeInTheDocument();

    // find by display value

    const vishwasValueEle = screen.getByDisplayValue("Vishwas");
    expect(vishwasValueEle).toBeInTheDocument();

    // find by alt

    const altElement = screen.getByAltText("a person with a laptop");
    expect(altElement).toBeInTheDocument();

    //get by text id

    const textIdEle = screen.getByTestId("custom-element");
    expect(textIdEle).toBeInTheDocument();
  });
});
