import React, { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";

type UpcomingSessionsProps = {
  onClose: () => void;
};

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ onClose }) => {
  const modal = useRef<ModalHandle>(null);
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
    </Modal>
  );
};

export default UpcomingSessions;
