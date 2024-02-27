import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWishes, updateMyWish, writeMyWish } from "../../../lib/api/wish";
import { useCookies } from "react-cookie";

type DataType = {
  drinkId: string;
  token: string;
}

const initialState = {
  allReview: [
    {
      _id: "",
      drinkId: "",
      userId: "",
      review: "",
      imgUrl: "",
      isPublic: false
    },
  ],
};

export const getAllWish = createAsyncThunk(
  "review/getAllWish",
  async (data: DataType, thunkAPI) => {
    const response = await getAllWishes(data.drinkId, data.token);
    return response.data;
  }
);

const allReviewSlice = createSlice({
  name: "review",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllWish.fulfilled, (state, action) => {
      state.allReview = action.payload;
    });
  },
});

export default allReviewSlice.reducer;
