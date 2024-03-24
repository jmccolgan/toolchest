import { createSlice } from '@reduxjs/toolkit';


export const calculatorSlice = createSlice({
    name:'calculator',
    initialState: {
        currentTotal: 0,
        currentInput: 0,
    },
    reducers: {
        addition: (state, action ) => {
            
        },
        subtraction: (state, action ) => {

        },
        division: (state, action ) => {

        },
        total: (state, action ) => {
            
        },
        reset: (state, action ) => {
            state = initialState;
        },

    }

});

export const { addition, subtraction, division, total, reset} = calculatorSlice.actions;
export default calculatorSlice.reducer;