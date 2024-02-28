import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "../../../lib/api/users";
import { User } from "../../../routes/nonLogin/nonLoginLogIn";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    token: "",
  },
  isUser: false,
  isError: false,
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
    console.log("user: ", data)
    const response = await login(data);
    return response.data;
  }
);

export const userLogout = createAsyncThunk(
  "auth/userLogout",
  async (data, thunkAPI) => {
    const response = await logout();
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user.id = action.payload.user._id;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.user.token = action.payload.user.token;
      state.isUser = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isError = true;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.user.id = "";
      state.user.name = "";
      state.user.email = "";
      state.user.token ="";
      state.isUser = false;
    });
  },
});

export default userSlice.reducer;
