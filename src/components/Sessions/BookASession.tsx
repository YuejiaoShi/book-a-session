import React, { FormEvent, useEffect, useRef } from "react";
import { Session, useSessionsContext } from "../../store/sessions-context";
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
  const sessionsContext = useSessionsContext();

  // open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    sessionsContext.bookSession(session);
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookASession;
