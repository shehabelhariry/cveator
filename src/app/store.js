import { configureStore } from "@reduxjs/toolkit";
import templateSelectionReducer from "../features/templateSelection/TemplateSelection";

export default configureStore({
  reducer: {
    template: templateSelectionReducer,
  },
});
