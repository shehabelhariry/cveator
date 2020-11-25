import { createSlice } from "@reduxjs/toolkit";

export const educationSlice = createSlice({
  name: "education",
  initialState: {
    entries: [
      {
        id: 0,
        school: "Alexandria University",
        degree: "Bacherlor's Degree",
        country: "Egypt",
        state: "Alexandria",
        start: "2020-11-04",
        end: "2020-11-04",
        description: "",
      },
    ],
  },
  reducers: {
    updateEducationEntry: (state, action) => {
      const { id, key, value } = action.payload;
      const educationIndex = state.entries.findIndex((e) => e.id === id);
      state.entries[educationIndex][key] = value;
    },
    addEducationEntry: (state) => {
      state.entries = [
        ...state.entries,
        {
          id: Date.now(),
          school: "",
          degree: "Bacherlor's Degree",
          country: "",
          state: "",
          start: "",
          end: "",
          description: "",
        },
      ];
    },
    removeEducationEntry: (state, action) => {
      const { id } = action.payload;
      state.entries = state.entries.filter((e) => e.id !== id);
    },
  },
});

export const {
  updateEducationEntry,
  addEducationEntry,
  removeEducationEntry,
} = educationSlice.actions;

export default educationSlice.reducer;
