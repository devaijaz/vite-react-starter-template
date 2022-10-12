import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

describe("Test login form component", () => {
  it("Verify Change Handler", async () => {
    render(<LoginForm />);
    const event = userEvent.setup();
    const inputField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    await event.type(inputField, "user");
    expect(inputField).toHaveValue("user");
    await event.type(passwordField, "pass");
    expect(passwordField).toHaveValue("pass");
    // fireEvent.change(inputField, {
    //   target: {
    //     value: "User1",
    //   },
    // });
    // fireEvent.change(passwordField, {
    //   target: {
    //     value: "Password1",
    //   },
    // });
    fireEvent.click(screen.getByRole("button", {}));
  });
});
