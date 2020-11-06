import { createSlice } from "@reduxjs/toolkit";

export const socialLinksSlice = createSlice({
  name: "socialLinks",
  initialState: {
    links: [{ id: 0, type: "linkedIn", url: "" }],
  },
  reducers: {
    updateLink: (state, action) => {
      const { id, newLink } = action.payload;
      const linkIndex = state.links.findIndex((l) => l.id === id);
      state.links[linkIndex] = newLink;
    },
    addLink: (state) => {
      state.links = [
        ...state.links,
        { id: Date.now(), type: "linkedIn", url: "" },
      ];
    },
    removeLink: (state, action) => {
      const { id } = action.payload;
      state.links = state.links.filter((l) => l.id !== id);
    },
  },
});

export const { updateLink, addLink, removeLink } = socialLinksSlice.actions;

export default socialLinksSlice.reducer;
