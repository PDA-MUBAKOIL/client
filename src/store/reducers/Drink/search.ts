import { createSlice } from "@reduxjs/toolkit";


const initialState={
    search:''
}


const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers:{
        setSearch(state,action){
            state.search = action.payload;
        }
    }
})

const {setSearch} = searchSlice.actions;
export {setSearch};
export default searchSlice.reducer;