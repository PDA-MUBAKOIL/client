import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDrinkDetail as reqGetDrinkDetail } from "../../../lib/api/drinks";



const initialState={
    detail : {
        _id:"",
        tags: ['dd','dd'],
        brewerId: 'd',
        region: '울산',
        capacity: 'dd',
        imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001219&targetNm=PRODUCT",
        name: "이천미 예술",
        materials: "백미(국산), 밀누룩(국산), 정제수 밀(누룩)함유",
        percent: "14%",
        volume: "750ml",
        description:
          "국내산 이천 쌀과 500년 전통 누룩으로 빚어 전통 누룩의 깊은 향과 쌀 고유의 자연스러운 단 맛, 부드러운 목 넘김이 좋습니다.",
      }
    }


export const setDrinkDetail = createAsyncThunk(
    'drinkDetail/setDrinkDetail',
    async (data:{drinkId:string}, thunkAPI)=>{
        const response = await reqGetDrinkDetail(data.drinkId);
        return response.data;
    }
)

const drinkDetailSlice = createSlice({
    name: "drinkDetail",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(setDrinkDetail.fulfilled,(state,action)=>{
            state.detail = action.payload;
        })
    }
})


export default drinkDetailSlice.reducer;