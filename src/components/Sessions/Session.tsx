import React from "react";

type SessionItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

const Session: React.FC<SessionItemProps> = ({ id, title, summary, image }) => {
  return <article className="session-item"></article>;
};

export default Session;
