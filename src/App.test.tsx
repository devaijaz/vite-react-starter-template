import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import App from "./App";

describe("Testing App All Routes", () => {
  it("Verify Home Page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const homePage = await waitFor(() => screen.getByTestId("home-page"));
    expect(homePage).toBeInTheDocument();
  });
  it("Verify Login Page", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]} initialIndex={0}>
        <App />
      </MemoryRouter>
    );
    const loginPage = await waitFor(() => screen.getByTestId("login-page"));
    expect(loginPage).toBeInTheDocument();
  });
});
