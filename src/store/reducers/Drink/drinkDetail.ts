import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDrinkDetail as reqGetDrinkDetail } from "../../../lib/api/drinks";



const initialState={
    detail:{
    "_id": "65dc134f16170b4ea7a12a84",
    "name": "포엠 화이트와인",
    "percent": "12%",
    "spercent": [
        12
    ],
    "imgUrl": "https://thesool.com/common/imageView.do?targetId=PR00000776&targetNm=PRODUCT",
    "tags": [
        "해산물",
        "찜/탕"
    ],
    "description": "청수와 나아이가라를 블랜딩하여 만든 세미 스위트와인으로, 청포도의 새콤하면서도 깔끔한 맛과 향이 부드럽고 달콤하며 균형감이 좋다. 옐로 다이아몬드의 색을 그대로 가진 화이트 와인이다. 달콤함과 산뜻함을 가진 향, 더불어 잘 익은 청포도의 향이 뒷받쳐 준다. 입속에 머금은 순간 잘 익은 포도를 깨무는 듯한 식감이 펼쳐지며 마지막에 떨어지는 신맛은 식욕을 더욱 돋우는 매력이 있다.",
    "brewerId": {
        "_id": "65dc134f16170b4ea7a1284a",
        "name": "갈기산농업회사",
        "link": "https://smartstore.naver.com/galgisanwine",
        "tel": "01047153100",
        "__v": 0,
        "id": "65dc134f16170b4ea7a1284a"
    },
    "region": "충북",
    "material": "포도, 백설탕, 효모",
    "capacity": "750ml",
    "__v": 0,
    "id": "65dc134f16170b4ea7a12a84"}
}



export const setDrinkDetail = createAsyncThunk(
    'drinkDetail/setDrinkDetail',
    async (data:{drinkId:string}, thunkAPI)=>{
        const response = await reqGetDrinkDetail(data.drinkId)
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