import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import UploadSongForm from '../UploadSongForm'
import './UploadModal.css'

function UploadModal({track}) {
  const [showModal, setShowModal] = useState(false);
  if (track) {
    setShowModal(true)
  }
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadSongForm track={track}/>
        </Modal>
      )}
    </>
  );
}

export default UploadModal;
