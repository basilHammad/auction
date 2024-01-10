import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = commonSlice.actions;

export default commonSlice.reducer;
