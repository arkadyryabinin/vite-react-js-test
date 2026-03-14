import { useNavigate } from 'react-router-dom';
import { backdrop, modal } from './Modal.module.css';

function Modal({ children  }) {
  const navigate = useNavigate();
  function close() {
    navigate('..');
  }
  return (
    <>
      <div className={backdrop} onClick={close}/>
      <dialog open={true} className={modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;