import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEmail: false,
};

const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {
    setIsEmail(state, action) {
      state.isEmail = action.payload;
    },
  },
});

const { setIsEmail } = emailSlice.actions;
export { setIsEmail };

export default emailSlice.reducer;
