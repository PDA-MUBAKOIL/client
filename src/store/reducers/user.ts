import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../lib/api/users";
import { User } from "../../routes/nonLogin/nonLoginLogIn";

const initialState = {
  id: "",
  name: "진언",
  email: "",
  isUser: false,
};

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (data: User, thunkAPI) => {
    const response = await login(data);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isUser = true;
    });
  },
});

export default userSlice.reducer;
