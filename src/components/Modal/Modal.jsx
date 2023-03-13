import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, bigImg }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return createPortal(
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <img src={bigImg} alt="modalimage" />
      </div>
    </div>,
    modalRoot
  );
};
Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
