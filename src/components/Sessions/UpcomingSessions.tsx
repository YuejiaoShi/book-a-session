import React, { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import { useSessionsContext } from "../../store/sessions-context";
import Button from "../UI/Button";
import UpcomingSession from "./UpcomingSession";

type UpcomingSessionsProps = {
  onClose: () => void;
};

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ onClose }) => {
  const modal = useRef<ModalHandle>(null);
  const sessionsContext = useSessionsContext();
  const hasSessions = sessionsContext.upcomingSessions.length > 0;

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string) {
    sessionsContext.cancelSession(sessionId);
  }

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsContext.upcomingSessions.map((session) => (
            <li>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
};

export default UpcomingSessions;
