import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateMyWish, writeMyWish } from "../../../lib/api/wish";

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
  userId: string;
  item : {
    review: string;
    imgUrl: string;
    isPublic: boolean;
  }
}

export const writeWish = createAsyncThunk(
  "review/writeWish",
  async (data: DataProp, thunkAPI) => {
    const { drinkId, userId, item } = data;
    const response = await writeMyWish(drinkId, userId, item);
    return response.data;
  }
);

export const updateWish = createAsyncThunk(
  "review/updateWish",
  async (data: DataProp, thunkAPI) => {
    const { drinkId, userId, item } = data;
    const response = await updateMyWish(drinkId, userId, item);
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
  },
});

export default reviewSlice.reducer;
