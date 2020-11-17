import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    items: [{ id: 0, label: "HTML" }],
  },
  reducers: {
    addSkill: (state, action) => {
      state.items = [
        ...state.items,
        { id: Date.now(), label: action.payload.label },
      ];
    },
    removeSkill: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;

export default skillsSlice.reducer;
