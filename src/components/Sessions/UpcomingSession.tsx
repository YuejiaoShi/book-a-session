import React from "react";
import { Session } from "../../store/sessions-context";

type UpcomingSessionProps = {
  session: Session;
};

const UpcomingSession: React.FC<UpcomingSessionProps> = ({ session }) => {
  return (
    <article className="upcoming-session">
      <div>
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
      </div>
    </article>
  );
};

export default UpcomingSession;
