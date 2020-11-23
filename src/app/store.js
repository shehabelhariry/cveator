import { configureStore } from "@reduxjs/toolkit";
import templateSelectionReducer from "../slices/templateSelection";
import basicInfoReducer from "../slices/basicInfo";
import socialLinksReducer from "../slices/socialLinks";
import workExperienceReducer from "../slices/workExperience";
import educationReducer from "../slices/education";
import stepsReducer from "../slices/steps";
import skillsReducer from "../slices/skills";
import languagesReducer from "../slices/languages";

export default configureStore({
  reducer: {
    template: templateSelectionReducer,
    basicInfo: basicInfoReducer,
    socialLinks: socialLinksReducer,
    experiences: workExperienceReducer,
    education: educationReducer,
    steps: stepsReducer,
    skills: skillsReducer,
    languages: languagesReducer,
  },
});
