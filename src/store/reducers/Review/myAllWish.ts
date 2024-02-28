import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMyWishes } from "../../../lib/api/wish";

type AllWish = {
  _id: string;
  userId: string;
  drinkId: {
    _id: string;
    name: string;
    percent: string;
    spercent: Array<number>;
    imgUrl: string;
    tags: Array<string>;
    description: string;
    brewerId: {
      _id: string;
      name: string;
      link: string;
      tel: string;
      __v: number;
      id: string;
    },
    region: string;
    material: string;
    capacity: string;
    __v: number;
    id: string;
  },
  review: string;
  imgUrl: null;
  isPublic: boolean;
  __v: number;
  id: string;
}

const initialState = {
  myWishes : [
    {
      _id: "",
      name: "",
      percent: "",
      spercent: [0],
      imgUrl: "",
      tags: [""],
      description: "",
      brewerId: {
        _id: "",
        name: "",
        link: "",
        tel: "",
        __v: 0,
        id: "",
      },
      region: "",
      material: "",
      capacity: "",
      __v: 0,
      id: "",
    },
  ],
  isLike: true,
};

type GetProp = {
  region: string | null;
  token: string;
}

export const getMyWishAll = createAsyncThunk(
  "wish/getMyWishAll",
  async (data: GetProp, thunkAPI) => {
    const { region, token } = data;
    const response = await getMyWishes(region, token);
    return response.data;
  }
);

const wishSlice = createSlice({
  name: "wishes",
  initialState: initialState,
  reducers: {
    setLikeState(state, action) {
      state.isLike = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMyWishAll.fulfilled, (state, action) => {
      console.log('이게뭐지',action.payload.map((item: AllWish) => item.drinkId));
      state.myWishes = action.payload.map((item: AllWish) => item.drinkId);
    });
  },
});

const { setLikeState } = wishSlice.actions;
export { setLikeState };

export default wishSlice.reducer;
