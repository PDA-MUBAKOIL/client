import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMyWish, updateMyWish, writeMyWish } from "../../../lib/api/wish";
import { useCookies } from "react-cookie";

const initialState = {
  _id: "",
  drinkId: "",
  userId: "진언",
  review: "좋아요!",
  imgUrl: "",
  isPublic: false
};

type DataProp = {
  drinkId: string;
  item : {
    userId: string;
    review: string;
    imgUrl: string;
    isPublic: boolean;
  }
}

type GetProp = {
  drinkId: string;
  userId: string;
}

export const writeWish = createAsyncThunk(
  "review/writeWish",
  async (data: DataProp, thunkAPI) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    // 토큰값 가져오기
    const token = cookies['authToken'];
    const { drinkId, item } = data;
    const response = await writeMyWish(drinkId, item, token);
    return response.data;
  }
);

export const updateWish = createAsyncThunk(
  "review/updateWish",
  async (data: DataProp, thunkAPI) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    // 토큰값 가져오기
    const token = cookies['authToken'];
    const { drinkId, item } = data;
    const response = await updateMyWish(drinkId, item, token);
    return response.data;
  }
);

export const getWish = createAsyncThunk(
  "review/getWish",
  async (data: GetProp, thunkAPI) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    // 토큰값 가져오기
    const token = cookies['authToken'];
    const { drinkId, userId } = data;
    console.log('drinkId: ', drinkId);
    console.log('userId: ', userId);
    const response = await getMyWish(drinkId, userId, token);
    return response.data;
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(writeWish.fulfilled, (state, action) => {
      state._id = action.payload._id;
      state.drinkId = action.payload.drinkId;
      state.userId = action.payload.userId;
      state.review = action.payload.review;
      state.imgUrl = action.payload.imgUrl;
      state.isPublic = action.payload.isPublic;
    });
    builder.addCase(updateWish.fulfilled, (state, action) => {
      state._id = action.payload._id;
      state.drinkId = action.payload.drinkId;
      state.userId = action.payload.userId;
      state.review = action.payload.review;
      state.imgUrl = action.payload.imgUrl;
      state.isPublic = action.payload.isPublic;
    });
    builder.addCase(getWish.fulfilled, (state, action) => {
      state._id = action.payload._id;
      state.drinkId = action.payload.drinkId;
      state.userId = action.payload.userId;
      state.review = action.payload.review;
      state.imgUrl = action.payload.imgUrl;
      state.isPublic = action.payload.isPublic;
    });
  },
});

export default reviewSlice.reducer;
