import React from "react";
import Session, { type SessionItemProps } from "./Session";

type SessionsListProps = {
  sessions: SessionItemProps[];
};

const SessionsList: React.FC<SessionsListProps> = ({ sessions }) => {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <Session {...session} />
        </li>
      ))}
    </ul>
  );
};

export default SessionsList;
