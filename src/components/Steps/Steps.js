/** @jsx jsx */
import { useState } from "react";
import { jsx, Button } from "theme-ui";
import Template1 from "../../assets/images/template-1.png";
import Navigation from "../Navigation/Navigation";
import TemplateSelection from "./TemplateSelection/TemplateSelection";
import BasicInfo from "./BasicInfo/BasicInfo";

const step = "STEP_1";

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(step);
  const STEPS = {
    STEP_1: <TemplateSelection />,
    STEP_2: <BasicInfo />,
  };
  return (
    <div>
      <div sx={{ variant: "container" }}>{STEPS[currentStep]}</div>
      <Navigation
        position="bottom"
        children={
          <Button
            onClick={() => {
              const stepKeys = Object.keys(STEPS);
              const index = stepKeys.findIndex((i) => i === currentStep);
              console.log(stepKeys[index + 1]);
              setCurrentStep(stepKeys[index + 1]);
            }}
          >
            Next
          </Button>
        }
      />
    </div>
  );
};

export default Steps;
