/** @jsx jsx */

import { jsx } from "theme-ui";

const StepsIndicator = ({ allSteps, currentStep }) => {
  const stepsLabels = [
    "Template Selection",
    "Contact Information",
    "Social Links",
    "Work Experience",
    "Education",
    "Skills",
    "Languages",
  ];
  return (
    <div>
      <p
        sx={{
          color: "#195a75",
          display: "flex",
          alignItems: "center",
          mb: "-3px",
        }}
      >
        <span
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: "10px",
            p: "5px",
            fontWeight: "bolder",
          }}
        >
          {currentStep + 1} / {allSteps}
        </span>
        <span sx={{ display: "flex" }}>{stepsLabels[currentStep]}</span>
      </p>
      <div sx={{ display: "flex" }}>
        {new Array(allSteps).fill(1).map((step, index) => (
          <div
            sx={{
              variant: index === currentStep ? "stepCompleted" : "stepPending",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StepsIndicator;
