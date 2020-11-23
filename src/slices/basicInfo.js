import { createSlice } from "@reduxjs/toolkit";

export const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState: {
    entries: [
      {
        id: 0,
        firstName: "",
        lastName: "",
        title: "",
        phone: "",
        email: "",
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
