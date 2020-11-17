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
          ml: "10px",
          color: "#195a75",
          display: "flex",
          alignItem: "center",
          mb: "5px",
        }}
      >
        <span
          sx={{
            // height: "25px",
            // width: "25px",
            // borderRadius: "100%",
            border: "1px solid",
            borderColor: "primary",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: "10px",
            p: "5px",
          }}
        >
          {currentStep + 1} / {allSteps}
        </span>
        <span sx={{ display: "flex", lineHeight: "35px" }}>
          {stepsLabels[currentStep]}
        </span>
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
