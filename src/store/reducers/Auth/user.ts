import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "../../../lib/api/users";
import { User } from "../../../routes/nonLogin/nonLoginLogIn";
import { useCookies } from "react-cookie";

const initialState = {
  user: {
    id: "",
    name: "진언",
    email: "example@naver.com",
  },
  token: "",
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
  async (data, thunkAPI) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    // 토큰값 가져오기
    const token = cookies['authToken'];
    const response = await logout(token);
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
      state.token = action.payload.token;
      state.isUser = true;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.user.id = "";
      state.user.name = "";
      state.user.email = "";
      state.token ="";
      state.isUser = false;
    });
  },
});

export default userSlice.reducer;
