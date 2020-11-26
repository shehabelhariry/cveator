import { createSlice } from "@reduxjs/toolkit";

export const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState: {
    entries: [
      {
        id: 0,
        firstName: "Shehab",
        lastName: "Elhariry",
        title: "Frontend Developer",
        phone: "01115567736",
        email: "cheha6@gmail.com",
      },
    ],
  },
  reducers: {
    updadteBasicInfo: (state, action) => {
      const { key, value } = action.payload;
      state.entries[0][key] = value;
    },
  },
});

export const { updadteBasicInfo } = basicInfoSlice.actions;

export default basicInfoSlice.reducer;
