import React, { useEffect, useRef } from "react";
import { Session } from "../../store/sessions-context";
import Modal, { ModalHandle } from "../UI/Modal";

type BookASessionProps = {
  session: Session;
  // onDone called to remove the BookASession compo
  onDone: () => void;
};

const BookASession: React.FC<BookASessionProps> = ({ session, onDone }) => {
  const modal = useRef<ModalHandle>(null);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);
  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <from></from>
    </Modal>
  );
};

export default BookASession;
