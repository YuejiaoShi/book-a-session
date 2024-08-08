import React from "react";
import { Session } from "../../store/sessions-context";
import Button from "../UI/Button";

type UpcomingSessionProps = {
  session: Session;
  onCancel: () => void;
};

const UpcomingSession: React.FC<UpcomingSessionProps> = ({
  session,
  onCancel,
}) => {
  return (
    <article className="upcoming-session">
      <div>
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
        <time dateTime={new Date(session.date).toISOString()}>
          {new Date(session.date).toLocaleDateString("en", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <p className="actions">
        <Button textOnly onClick={onCancel}>
          Cancel
        </Button>
      </p>
    </article>
  );
};

export default UpcomingSession;
