import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { confirmAuthNumber, sendEmailAuthNumber } from "../../../lib/api/mail";

const initialState = {
  isEmail: false,
};

export const sendEmail = createAsyncThunk(
  "mail/sendEmail",
  async (data: string, thunkAPI) => {
    const response = await sendEmailAuthNumber(data);
    return response.data;
  }
);

export const checkEmail = createAsyncThunk(
  "mail/checkEmail",
  async (data: string, thunkAPI) => {
    const response = await confirmAuthNumber(data);
    return response.data;
  }
);

const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendEmail.fulfilled, (state, action) => {
      // state.isEmail = action.payload.result;
    });
    builder.addCase(checkEmail.fulfilled, (state, action) => {
      state.isEmail = action.payload.result;
    });
  },
});

export default emailSlice.reducer;
