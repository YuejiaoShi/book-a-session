import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children, onClose }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          if (dialog.current) {
            dialog.current.showModal();
          }
        },
      };
    });

    return (
      <dialog ref={dialog} onClose={onClose}>
        {children}
      </dialog>
    );
  }
);

export default Modal;
