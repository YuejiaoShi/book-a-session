import { createContext, ReactNode, useContext, useReducer } from "react";

export type Session = {
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

type SessionContextProps = SessionState & {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};
const SessionsContext = createContext<SessionContextProps | null>(null);

export function useSessionsContext() {
  const context = useContext(SessionsContext);
  if (!context)
    throw new Error(
      "useSessionsContext hook must be used within a SessionsContextProvider."
    );
  return context;
}
type BookSessionAction = {
  type: "BOOK_SESSION";
  session: Session;
};

type CancelSessionAction = {
  type: "CANCEL_SESSION";
  sessionId: string;
};

type SessionsAction = BookSessionAction | CancelSessionAction;

function reducer(state: SessionState, action: SessionsAction) {
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
  const contextValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    bookSession,
    cancelSession,
  };
  return (
    <SessionsContext.Provider value={contextValue}>
      {children}
    </SessionsContext.Provider>
  );
}

export default SessionsContextProvider;
