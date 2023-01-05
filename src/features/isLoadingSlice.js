import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
    name:'isLoading',
    initialState:{
        isLoading:false,
       
    },
    reducers:{
            setIsLoading:(state, {payload})=>{
                state.isLoading = payload
            }
        }
})

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;