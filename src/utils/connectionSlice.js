import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    },
    deleteConnections: () => {
      return null;
    },
  },
});

export const { addConnections, deleteConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
