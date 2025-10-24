import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { Modal } from "./Modal";
import { UncontrolledForm } from "./UncontrolledForm";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ControlledModal
        shouldShow={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <ControlledForm
          initialName="gita"
          initialAge={123}
          initialHairColor="Brown"
        />
      </ControlledModal>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
    </>
  );
}

export default App;
