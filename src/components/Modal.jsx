import { backdrop, modal } from './Modal.module.css';

function Modal({ children, onClickHandler }) {
  return (
    <>
      <div className={backdrop} onClick={onClickHandler}/>
      <dialog open={true} className={modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;