import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isDetail: false,
    isShow: false
}

const showModalSlice = createSlice({
    name: "cardList",
    initialState: initialState,
    reducers:{
        setIsDetail(state,action){
            state.isDetail =  action.payload;
        },
        setIsShow(state,action){
            state.isShow =  action.payload;
        },
    }
})

const {setIsDetail, setIsShow} = showModalSlice.actions;
export {setIsDetail, setIsShow};
export default showModalSlice.reducer;