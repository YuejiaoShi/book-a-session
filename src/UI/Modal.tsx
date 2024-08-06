import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
};

const Modal = forwardRef<ModalHandle, ModalProps>(({ children }, ref) => {
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

  return <dialog>{children}</dialog>;
});

export default Modal;
