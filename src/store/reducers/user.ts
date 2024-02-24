import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name: '진언',
    id: '',
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{
        setUser(state,action){
            state.name = action.payload.name;
            state.id = action.payload.id;
        }
    }
})

const {setUser} = userSlice.actions;
export {setUser};
export default userSlice.reducer;