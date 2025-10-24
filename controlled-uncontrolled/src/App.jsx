import { ControlledForm } from "./ControlledForm";
import { UncontrolledForm } from "./UncontrolledForm";

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm
        initialName="geetha"
        initialAge="20"
        initialHairColor="Brown"
      />
    </>
  );
}

export default App;
