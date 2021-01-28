import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupFormPage from '../SignupFormPage/index'

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        id='button'
        className="button pure-button"
        onClick={() => setShowModal(true)}
      >
        Sign up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal
