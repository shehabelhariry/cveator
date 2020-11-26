import { createSlice } from "@reduxjs/toolkit";

export const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState: {
    entries: [
      {
        id: 0,
        title: "Frontend Developer",
        employer: "Incorta",
        country: "Egypt",
        state: "Alexandria",
        current: true,
        start: "2020-11-04",
        end: "2020-11-04",
        description: `Building reusable, scalable components with React js and integrating them into the Incorta product
Building and maintaining geo-spatial support to the Incorta product using mapbox
Building a simple file system to achieve dashboard browsing
Writing integeration tests for the features using react-testing-library`,
      },
    ],
  },
  reducers: {
    updateExperience: (state, action) => {
      const { id, key, value } = action.payload;
      const experienceIndex = state.entries.findIndex((e) => e.id === id);
      state.entries[experienceIndex][key] = value;
    },
    addExperience: (state) => {
      state.entries = [
        ...state.entries,
        {
          id: Date.now(),
          title: "",
          employer: "",
          country: "",
          state: "",
          current: false,
          start: "2020-11-04",
          end: "2020-11-04",
          description: "",
        },
      ];
    },
    removeExperience: (state, action) => {
      const { id } = action.payload;
      state.entries = state.entries.filter((e) => e.id !== id);
    },
  },
});

export const {
  updateExperience,
  addExperience,
  removeExperience,
} = workExperienceSlice.actions;

export default workExperienceSlice.reducer;
