import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

const { setPage } = modalSlice.actions;
export { setPage };

export default modalSlice.reducer;
