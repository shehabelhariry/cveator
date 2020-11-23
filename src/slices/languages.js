import { createSlice } from "@reduxjs/toolkit";

export const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    items: [{ id: 0, label: "English" }],
  },
  reducers: {
    addLanguage: (state, action) => {
      state.items = [
        ...state.items,
        { id: Date.now(), label: action.payload.label },
      ];
    },
    removeLanguage: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
  },
});

export const { addLanguage, removeLanguage } = languagesSlice.actions;

export default languagesSlice.reducer;
