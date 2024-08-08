import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        {" "}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Our Mission
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sessions"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Browse Sessions
          </NavLink>
        </li>
      </nav>
    </header>
  );
}

export default Header;
