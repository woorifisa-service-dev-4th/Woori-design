import React, { useState } from "react";
import Modal from "./lib/modals/WooriModal";
import "./App.css";

const modalTypes = ["basic", "warning", "multiChoice", "autoClose"];

function App() {
  const [modalStates, setModalStates] = useState(
    Object.fromEntries(modalTypes.map((type) => [type, false]))
  );

  const handleModal = (modalType, isOpen) => {
    setModalStates((prev) => ({ ...prev, [modalType]: isOpen }));
  };

  return (
    <div>
      {modalTypes.map((type) => (
        <button
          key={type}
          className="custom-button"
          onClick={() => handleModal(type, true)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} Modal
        </button>
      ))}

      <Modal
        isOpen={modalStates.basic}
        onClose={() => handleModal("basic", false)}
        contentStyle={{ backgroundColor: "white" }}
      >
        <Modal.Header>
          <h2>Title</h2>
        </Modal.Header>
        <Modal.Body>
          <p>This is the modal content ...</p>
          <p>This is the modal content ...</p>
          <p>This is the modal content ...</p>
          <p>This is the modal content ...</p>
          <p>This is the modal content ...</p>
          <p>This is the modal content ...</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="custom-button"
            onClick={() => handleModal("basic", false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={modalStates.warning}
        onClose={() => handleModal("warning", false)}
        type="warning"
        title="Warning!"
        message="This is a warning message ..."
      />

      <Modal
        isOpen={modalStates.multiChoice}
        onClose={() => handleModal("multiChoice", false)}
        type="multiChoice"
        title="Confirm!"
        message="Are you sure?"
        buttons={[
          {
            text: "Yes",
            onClick: () => {
              console.log("Yes clicked");
              handleModal("multiChoice", false);
            },
          },
          { text: "No", onClick: () => handleModal("multiChoice", false) },
        ]}
      />

      <Modal
        isOpen={modalStates.autoClose}
        onClose={() => handleModal("autoClose", false)}
        type="alert"
        title="Auto Closing"
        autoClose={true}
        autoCloseTime={5000}
      />
    </div>
  );
}

export default App;
