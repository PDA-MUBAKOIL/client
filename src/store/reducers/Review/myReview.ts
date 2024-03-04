import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteMyWish, getMyWish, getMyWishes, updateMyWish, writeMyWish } from "../../../lib/api/wish";

const initialState = {
  _id: "",
  drinkId: "",
  userId: "",
  review: "",
  imgUrl: "",
  isPublic: false
};

type DataProp = {
  drinkId: string;
  item : {
    token: string;
    review: string;
    imgUrl: string;
    isPublic: boolean;
  }
}

type GetProp = {
  drinkId: string;
  token: string;
}

export const writeWish = createAsyncThunk(
  "review/writeWish",
  async (data: DataProp, thunkAPI) => {
    const { drinkId, item } = data;
    const response = await writeMyWish(drinkId, item);
    return response.data;
  }
);

export const deletedWish = createAsyncThunk(
  "review/deleteWish",
  async (data: GetProp, thunkAPI) => {
    const { drinkId, token } = data;
    const response = await deleteMyWish(drinkId, token);
    return response.data;
  }
);

export const updateWish = createAsyncThunk(
  "review/updateWish",
  async (data: DataProp, thunkAPI) => {
    const { drinkId, item } = data;
    const response = await updateMyWish(drinkId, item);
    console.log('my review: ', response.data)
    return response.data;
  }
);

export const getWish = createAsyncThunk(
  "review/getWish",
  async (data: GetProp, thunkAPI) => {
    const { drinkId, token } = data;
    const response = await getMyWish(drinkId, token);
    console.log('마이리뷰 리스폰스', response)
    return response.data;
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(writeWish.fulfilled, (state, action) => {
      state._id = action.payload?.id;
      state.drinkId = action.payload?.drinkId;
      state.userId = action.payload?.userId;
      state.review = action.payload?.review;
      state.imgUrl = action.payload?.imgUrl;
      state.isPublic = action.payload?.isPublic;
    });
    builder.addCase(updateWish.fulfilled, (state, action) => {
      state._id = action.payload?.id;
      state.drinkId = action.payload?.drinkId;
      state.userId = action.payload?.userId;
      state.review = action.payload?.review;
      state.imgUrl = action.payload?.imgUrl;
      state.isPublic = action.payload?.isPublic;
    });
    builder.addCase(getWish.fulfilled, (state, action) => {
      state._id = action.payload?.id;
      state.drinkId = action.payload?.drinkId;
      state.userId = action.payload?.userId;
      state.review = action.payload?.review;
      state.imgUrl = action.payload?.imgUrl;
      state.isPublic = action.payload?.isPublic;
    });
  },
});

export default reviewSlice.reducer;
