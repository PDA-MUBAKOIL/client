import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDrinkDetail as reqGetDrinkDetail } from "../../../lib/api/drinks";



const initialState={
    detail : {
        _id: "",
        name: "",
        percent: "",
        spercent: [
            0,
        ],
        imgUrl: "",
        tags: [
            "",
        ],
        description: "",
        brewerId: {
            "_id": "",
            "name": "",
            "link": "",
            "tel": "",
            "__v": 0,
            "id": ""
        },
        region: "",
        material: "",
        capacity: "",
        __v: 0,
        id: ""
    }
}


export const setDrinkDetail = createAsyncThunk(
    'drinkDetail/setDrinkDetail',
    async (data:{drinkId:string}, thunkAPI)=>{
        const response = await reqGetDrinkDetail(data.drinkId);
        console.log("디테일", response.data)
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