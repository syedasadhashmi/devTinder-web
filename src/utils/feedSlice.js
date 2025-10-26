import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    deleteUserFeed: (state, action) => {
      const newArr = state.filter((data) => data._id !== action.payload);
      return newArr;
    },
    deleteFeed: () => {
      return null;
    },
  },
});
export const { addFeed, deleteFeed, deleteUserFeed } = feedSlice.actions;
export default feedSlice.reducer;
