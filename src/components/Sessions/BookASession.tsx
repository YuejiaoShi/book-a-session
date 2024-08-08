import React, { useRef } from "react";
import { Session } from "../../store/sessions-context";
import { ModalHandle } from "../UI/Modal";

type BookASessionProps = {
  session: Session;
  // onDone called to remove the BookASession compo
  onDone: () => void;
};

const BookASession: React.FC<BookASessionProps> = ({ session, onDone }) => {
  const modal = useRef<ModalHandle>(null);

  return <div>// component content</div>;
};

export default BookASession;
