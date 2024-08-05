import { forwardRef, useImperativeHandle, useRef } from "react";


type ModalProps {
  // define props here
}

const Modal = forwardRef((props, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);
    
    useImperativeHandle(ref, ()=>{});

  return <div></div>;
})

export default Modal;
