import { createSlice } from "@reduxjs/toolkit";

export const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState: {
    firstName: "",
    lastName: "",
    title: "",
    phone: "",
    email: "",
  },
  reducers: {
    updadteBasicInfo: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { updadteBasicInfo } = basicInfoSlice.actions;

export default basicInfoSlice.reducer;
