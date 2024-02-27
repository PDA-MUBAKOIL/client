import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { confirmAuthNumber, sendEmailAuthNumber } from "../../../lib/api/mail";
import { authEmail } from "../../../lib/api/users";

const initialState = {
  isEmail: false,
  email: "",
};

export const alreadyEmail = createAsyncThunk(
  "mail/alreadyEmail",
  async (data: string, thunkAPI) => {
    const response = await authEmail(data);
    return response.data;
  }
);

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
  reducers: {
    setUserEmail(state, action){
      console.log('액션 페이로드', action.payload)
      state.email = action.payload;
    },
    setIsEmail(state, action){
      console.log('액션 페이로드', action.payload)
      state.isEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendEmail.fulfilled, (state, action) => {
      // state.isEmail = action.payload.result;
    });
    builder.addCase(checkEmail.fulfilled, (state, action) => {
      state.isEmail = true;
    });
    builder.addCase(checkEmail.rejected, (state, action) => {
      state.isEmail = false;
      // state.email = action.payload;
    });
  },
});

const { setUserEmail, setIsEmail } = emailSlice.actions;
export { setUserEmail, setIsEmail };

export default emailSlice.reducer;
