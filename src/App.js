/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSelector } from "react-redux";
import Logo from "./assets/images/logo.png";

import Navigation from "./components/Navigation/Navigation";
import Steps from "./components/Creator/Steps/Steps";
import StepsIndicator from "./components/Creator/Steps/StepsIndicator/StepsIndicator";
import { getStepIndex } from "./slices/steps";

import "./App.css";
import "pattern.css/dist/pattern.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { steps, currentStep } = useSelector((state) => {
    return { steps: state.steps.steps, currentStep: state.steps.currentStep };
  });
  const stepIndex = useSelector((state) => getStepIndex(state.steps));

  return (
    <div>
      <Navigation
        position="top"
        children={
          <div
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              width: "100%",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div />
            <div>
              <img alt="logo" src={Logo} sx={{ width: 200 }} />
            </div>
            {currentStep ? (
              <StepsIndicator allSteps={steps.length} currentStep={stepIndex} />
            ) : null}
          </div>
        }
      />
      <div
        sx={{
          height: "calc(100vh - 82px)",
          position: "relative",
          top: 82,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Steps currentStep={currentStep} />
      </div>
    </div>
  );
}

export default App;
