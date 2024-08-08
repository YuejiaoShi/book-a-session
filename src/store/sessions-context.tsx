import React from "react";

type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionState = {
  upcomingSessions: Session[];
};

const SessionsContextProvider: React.FC<Props> = ({}) => {
  return <div>// component content</div>;
};

export default SessionsContextProvider;
