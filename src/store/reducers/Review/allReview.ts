import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWishes, updateMyWish, writeMyWish } from "../../../lib/api/wish";
import { useCookies } from "react-cookie";

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
  async (data: string, thunkAPI) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    // 토큰값 가져오기
    const token = cookies['authToken'];
    const response = await getAllWishes(data, token);
    console.log('리스폰스',response.data)
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
