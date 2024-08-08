import React from "react";
import Session, { type SessionItemProps } from "./Session";

type SessionsListProps = {
  sessions: SessionItemProps[];
};

const SessionsList: React.FC<SessionsListProps> = ({ sessions }) => {
  return  <ul>
  {sessions.map((session) => (
    <li>
      <Session {...session} />
    </li>
  ))}
</ul>;
};

export default SessionsList;
