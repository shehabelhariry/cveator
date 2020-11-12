/** @jsx jsx */
import { useState } from "react";
import { jsx, Button } from "theme-ui";
import Navigation from "../Navigation/Navigation";
import TemplateSelection from "./TemplateSelection/TemplateSelection";
import BasicInfo from "./BasicInfo/BasicInfo";
import SocialLinks from "./SocialLinks/SocialLinks";
import WorkExperience from "./WorkExperience/WorkExperience";
import Education from "./Education/Education";

const step = "STEP_1";

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(step);
  const STEPS = {
    STEP_1: <TemplateSelection />,
    STEP_2: <BasicInfo />,
    STEP_3: <SocialLinks />,
    STEP_4: <WorkExperience />,
    STEP_5: <Education />,
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
