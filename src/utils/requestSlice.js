import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    deleteRequest: (state, action) => {
      console.log(state, action);
      const newArr = state.filter((i) => i._id !== action.payload);
      return newArr;
    },
    deleteRequests: () => {
      return null;
    },
  },
});

export const { addRequests, deleteRequests, deleteRequest } =
  requestSlice.actions;
export default requestSlice.reducer;
