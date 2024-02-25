import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listUp } from "../../../lib/api/drinks";

const initialState = {
  data: [
    {
      _id: "65d8413288669a99299535ed",
      name: "포엠 드라이",
      imgUrl:
        "https://thesool.com/common/imageView.do?targetId=PR00001206&targetNm=PRODUCT",
      tags: ["양식", "기름진음식"],
      description:
        "오크에 숙성했기 때문에 깊은 향과 맛을 가지고 있답니다.색은 루비처럼 붉은빛을 띠며 약간의 단맛이 입안을 감싼 후에 상큼한 신맛으로 마무리됩니다.",
      brewerId: "65d8413188669a992995342e",
      region: "충북",
      capacity: "750ml",
      material: "머루, 포도, 백설탕, 효모, 메타중아황산칼륨, 아황산함유",
      __v: 0,
      id: "65d8413288669a99299535ed",
    },
  ],
};

export const setDrinkList = createAsyncThunk(
  "drinkList/setDrinkList",
  async (data, thunkAPI) => {
    const response = await listUp();
    return response.data;
  }
);

const drinkListSlice = createSlice({
  name: "drinkList",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setDrinkList.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default drinkListSlice.reducer;
