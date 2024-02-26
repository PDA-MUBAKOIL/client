import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "../../../lib/api/users";
import { User } from "../../../routes/nonLogin/nonLoginLogIn";

const initialState = {
  id: "",
  name: "진언",
  email: "example@naver.com",
  isUser: false,
};

type SignupType = {
  email: string;
  password: string;
  name: string;
}

export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async (data: SignupType, thunkAPI) => {
    const response = await signup(data);
    return response.data;
  }
);

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (data: User, thunkAPI) => {
    const response = await login(data);
    return response.data;
  }
);

export const userLogout = createAsyncThunk(
  "auth/userLogout",
  async (data: string, thunkAPI) => {
    const response = await logout(data);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isUser = true;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.isUser = false;
    });
  },
});

export default userSlice.reducer;
