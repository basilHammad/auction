import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colleges: [],
};

export const CollegeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getColleges: (state, action) => {
      state.colleges = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getColleges } = CollegeSlice.actions;

export default CollegeSlice.reducer;
