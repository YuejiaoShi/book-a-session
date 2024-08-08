import { ReactNode, useReducer } from "react";

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

function reducer(state: SessionState, action) {
  switch (action.type) {
    case "BOOK_SESSION":
      if (
        state.upcomingSessions.some(
          (session) => session.id === action.session.id
        )
      ) {
        return state;
      }
      return {
        upcomingSessions: [...state.upcomingSessions, action.session],
      };
    case "CANCEL_SESSION":
      return {
        upcomingSessions: state.upcomingSessions.filter(
          (session) => session.id !== action.sessionId
        ),
      };
    default:
      return state;
  }
}
function SessionsContextProvider({ children }: { children: ReactNode }) {
  const [sessionsState, dispatch] = useReducer(reducer, {
    upcomingSessions: [],
  });

  function bookSession(session: Session) {
    dispatch({ type: "BOOK_SESSION", session });
  }

  function cancelSession(sessionId: string) {
    dispatch({ type: "CANCEL_SESSION", sessionId });
  }

  return <div>// component content</div>;
}

export default SessionsContextProvider;
