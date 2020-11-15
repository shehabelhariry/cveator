import { createSlice } from "@reduxjs/toolkit";

export const stepsSlice = createSlice({
  name: "steps",
  initialState: {
    currentStep: "STEP_1",
    steps: ["STEP_1", "STEP_2", "STEP_3", "STEP_4", "STEPS_5"],
  },
  reducers: {
    goToNextStep: (state) => {
      const currentStepIndex = getStepIndex(state);
      state.currentStep =
        currentStepIndex === state.steps.length
          ? state.steps[0]
          : state.steps[currentStepIndex + 1];
    },
    goToPrevStep: (state) => {
      const currentStepIndex = getStepIndex(state);
      if (currentStepIndex !== 0) {
        state.currentStep = state.steps[currentStepIndex - 1];
      }
    },
  },
});

export const getStepIndex = (state) =>
  state.steps.findIndex((s) => s === state.currentStep);

export const { goToNextStep, goToPrevStep } = stepsSlice.actions;

export default stepsSlice.reducer;
