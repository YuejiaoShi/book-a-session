import React, { useEffect, useRef } from "react";
import { Session } from "../../store/sessions-context";
import Modal, { ModalHandle } from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";

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
      <form>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <Button>Book Session</Button>
      </form>
    </Modal>
  );
};

export default BookASession;
