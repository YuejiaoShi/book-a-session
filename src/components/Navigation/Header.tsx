import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import UpcomingSessions from "../Sessions/UpcomingSessions";

function Header() {
  const [isSessionsVisible, setIsSessionsVisible] = useState(false);

  function showSessions() {
    setIsSessionsVisible(true);
  }

  function closeUpcomingSessions() {
    setIsSessionsVisible(false);
  }

  return (
    <>
      {isSessionsVisible && (
        <UpcomingSessions onClose={closeUpcomingSessions} />
      )}
      <header id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
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
          <li>
            <Button onClick={showSessions}>Upcoming Sessions</Button>
          </li>
        </nav>
      </header>
    </>
  );
}

export default Header;
