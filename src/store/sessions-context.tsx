import React, { ReactNode, useReducer } from "react";

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

function reducer(state: SessionState, action) {}
function SessionsContextProvider({ children }: { children: ReactNode }) {
  const [sessionsState, dispatch] = useReducer(reducer, {
    upcomingSessions: [],
  });
  return <div>// component content</div>;
}

export default SessionsContextProvider;
