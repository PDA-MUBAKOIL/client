import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWishes, updateMyWish, writeMyWish } from "../../../lib/api/wish";

const initialState = {
  allReview: [
    {
      _id: "",
      drinkId: "",
      userId: "진언",
      review: "좋아요!",
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001206&targetNm=PRODUCT",
      isPublic: false
    },
    {
      _id: "",
      drinkId: "",
      userId: "진언",
      review: "좋아요!",
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001206&targetNm=PRODUCT",
      isPublic: false
    },
    {
      _id: "",
      drinkId: "",
      userId: "진언",
      review: "좋아요!",
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001206&targetNm=PRODUCT",
      isPublic: false
    },
    {
      _id: "",
      drinkId: "",
      userId: "진언",
      review: "좋아요!",
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001206&targetNm=PRODUCT",
      isPublic: false
    },
    {
      _id: "",
      drinkId: "",
      userId: "진언",
      review: "좋아요!",
      imgUrl: "",
      isPublic: false
    },
    {
      _id: "",
      drinkId: "",
      userId: "진언",
      review: "좋아요!",
      imgUrl: "",
      isPublic: false
    },
  ],
};

export const getAllWish = createAsyncThunk(
  "review/getAllWish",
  async (data: string, thunkAPI) => {
    const response = await getAllWishes(data);
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
