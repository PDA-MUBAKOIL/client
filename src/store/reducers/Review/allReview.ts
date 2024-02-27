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
      review: "",
      imgUrl: "",
      isPublic: false,
      __v: 0,
      userId: {
        email: "",
        id: "",
        name: "",
        password: "",
        visibleUser: {_id: '', email: '', name: ''},
        __v: 0,
        _id: "",
      },
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
