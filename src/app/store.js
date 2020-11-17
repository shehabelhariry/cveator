import { configureStore } from "@reduxjs/toolkit";
import templateSelectionReducer from "../features/templateSelection/TemplateSelection";
import basicInfoReducer from "../features/basicInfo/basicInfo";
import socialLinksReducer from "../features/socialLinks/socialLinks";
import workExperienceReducer from "../features/workExperience/workExperience";
import educationReducer from "../features/education/education";
import stepsReducer from "../features/steps/steps";
import skillsReducer from "../features/skills/skills";
import languagesReducer from "../features/languages/languages";

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
