import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "Feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    deleteFeed: () => {
      return null;
    },
  },
});
export const { addFeed, deleteFeed } = feedSlice.actions;
export default feedSlice.reducer;
