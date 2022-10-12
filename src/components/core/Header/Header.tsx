import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-slate-200 p-2 shadow-md flex">
      <ul className="flex gap-3">
        <li>
          <Link to="/" className="header-nav-link">
            Home
          </Link>
        </li>
      </ul>
      <ul className="ml-auto flex gap-3">
        <li>
          <Link to="/login" className="header-nav-link">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
