import React, { FormEvent, useState } from "react";

export function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={formSubmitHandler} className="flex flex-col gap-3 bg-gray-100 w-[400px] m-auto p-3 shadow-md">
        <div className="form-group">
          <label htmlFor="username" id="lblUsername">
            <div>Username</div>
            <input
              value={formData.username}
              onChange={onChangeHandler}
              type="text"
              className="border w-full"
              name="username"
              id="username"
              autoComplete="off"
              aria-labelledby="lblUsername"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <div>Password</div>
            <input
              value={formData.password}
              onChange={onChangeHandler}
              type="password"
              className="border w-full"
              name="password"
              id="password"
            />
          </label>
        </div>
        <div className="form-controls">
          <button
            type="submit"
            name="login-button"
            className="border py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-800"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
