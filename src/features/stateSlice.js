import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
    name:'state',
    initialState:{
        email:'rivkalevynf@gmail.com',
        mobile:'+33695047951',
       
    },
    reducers:{
            // setState:(state, {payload})=>{
            //     state.data = payload
            // }
        }
})

// export const { setState } = stateSlice.actions;
export default stateSlice.reducer;