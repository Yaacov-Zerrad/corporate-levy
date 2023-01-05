import { createSlice } from "@reduxjs/toolkit";

const THEME = {
    dark: {
        name: "Dark",
        minHeight: "1000px",
        backgroundColor: "#1E1E1E",
        colorText: " text-light",
        textShadow: {textShadow:'1px 1px #585858 ',  fontWeight: 400}

    },
    light: {
        name: "Light",
        minHeight: "1000px",
        colorText: " text-dark",
        textShadow: {textShadow:'1px 1px #92909066' ,  fontWeight: 400  }
    },
};

export const modeSlice = createSlice({
    name:'mode',
    initialState:{
        mode: THEME.dark,
       
    },
    reducers:{
            setMode:(state)=>{
                if ( state.mode.name === 'Light'){
                state.mode =  THEME.dark 
            } else {
                state.mode =  THEME.light
            }
            }
        }
})

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;