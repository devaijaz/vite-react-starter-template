import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer Component Test", () => {
  it("Should show CopyRight Icon", () => {
    render(<Footer />);
    const heading = screen.getByTestId("copyright-icon");
    expect(heading).toHaveTextContent("©");
  });
  it("Verify the company name", () => {
    const { container } = render(<Footer />);
    const companyName = container.querySelector(".footer-company-name");
    expect(companyName).toHaveTextContent("Company Name 2022");
  });
});
