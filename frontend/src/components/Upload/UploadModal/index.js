import React, { useEffect, useState } from "react";
import { Modal } from "../../../context/Modal";
import UploadSongForm from '../UploadSongForm'
import './UploadModal.css'

function UploadModal({ track }) {
  console.log(track[0].path)
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (track.length) {
      setShowModal(true);
    } else {
      setShowModal(false)
    }
  }, [track]);
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadSongForm track={track} />
        </Modal>
      )}
    </>
  );
}

export default UploadModal;
