import { createSlice } from "@reduxjs/toolkit";



const initialState={
    title:'',
    list:[],
}

const cardListSlice = createSlice({
    name: "cardList",
    initialState: initialState,
    reducers:{
        setCardList(state,action){
            state.title = action.payload.title;
            state.list = action.payload.list;
        }
    }
})

const {setCardList} = cardListSlice.actions;
export {setCardList};
export default cardListSlice.reducer;