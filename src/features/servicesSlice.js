import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
    name:'services',
    initialState:{
        services:[],
       
    },
    reducers:{
        setServices:(state, {payload})=>{
                state.services = payload
            }
        }
})

export const {setServices} = servicesSlice.actions;
export default servicesSlice.reducer