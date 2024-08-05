import { forwardRef, useImperativeHandle } from "react";


type ModalProps {
  // define props here
}

const Modal = forwardRef((props, ref) => {

    useImperativeHandle(ref, ()=>{});

  return <div></div>;
})

export default Modal;
