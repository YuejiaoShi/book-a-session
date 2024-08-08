import React, { useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";

type UpcomingSessionsProps = {
  onClose: () => void;
};

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ onClose }) => {
  const modal = useRef<ModalHandle>(null);

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
    </Modal>
  );
};

export default UpcomingSessions;
