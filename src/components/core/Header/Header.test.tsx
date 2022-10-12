import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it } from "vitest";
import { Header } from "./Header";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={children} />
      </Routes>
    </MemoryRouter>
  );
}

describe("Header Component Test", () => {
  it("Show show Nav Links", () => {
    render(<Header />, {
      wrapper: Wrapper,
    });
    const heading = screen.getAllByRole("link");
    expect(heading[0]).toHaveTextContent("Home");
    expect(heading[1]).toHaveTextContent("Login");
  });
});
