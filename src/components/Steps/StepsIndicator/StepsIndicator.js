/** @jsx jsx */

import { jsx } from "theme-ui";

const StepsIndicator = ({ allSteps, currentStep }) => {
  return (
    <div sx={{ display: "flex" }}>
      {new Array(allSteps).fill(1).map((step, index) => (
        <div
          sx={{
            variant: index === currentStep ? "stepCompleted" : "stepPending",
          }}
        ></div>
      ))}
    </div>
  );
};

export default StepsIndicator;
