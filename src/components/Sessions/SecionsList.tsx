import React from "react";
import { type SessionItemProps } from "./Session";

type SessionsListProps = {
  sessions: SessionItemProps[];
};

const SessionsList: React.FC<SessionsListProps> = ({ sessions }) => {
  return <div>// component content</div>;
};

export default SessionsList;
