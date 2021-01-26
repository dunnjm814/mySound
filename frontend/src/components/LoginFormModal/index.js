import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginFormPage from "../LoginFormPage/index";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='button' className='button pure-button' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginFormPage />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
