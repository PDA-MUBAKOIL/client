import { createSlice } from "@reduxjs/toolkit";


const initialState={
    search:'',
    isSearch: false,
}


const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers:{
        setSearch(state,action){
            state.search = action.payload;
        },
        setIsSearch(state, action) {
            state.isSearch = action.payload;
        }
    }
})

const {setSearch, setIsSearch} = searchSlice.actions;
export {setSearch, setIsSearch};
export default searchSlice.reducer;