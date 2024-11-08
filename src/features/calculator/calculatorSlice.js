import { createSlice } from '@reduxjs/toolkit';


export const calculatorSlice = createSlice({
    name:'calculator',
    initialState: {
        currentTotal: 0,
        currentInput: [],
        decimalActive: false,
        operatorActive: "",
    },
    reducers: {
        input:( state, action ) => {

            if(action.payload === `.` && state.decimalActive === false){

                // console.log(`period used ${state.decimalActive} setting to true`)
                
                state.decimalActive = !state.decimalActive
                
                // console.log(`now set to ${state.decimalActive}`)

            }else if(action.payload === `.` && state.decimalActive === true) {
                
                // console.log(`period already used. can't use again`)

                return state;

            }

            state.currentInput.push(action.payload)

            console.log(state.currentInput.join(""))
        },
        setOperator: (state, action) => {
            console.log(`operator set to ${Object.entries(state.operatorActive)}`)
            state.operatorActive = action.payload
            console.log(`operator set to ${state.operatorActive}`)
            state.decimalActive = false;
            state.currentTotal = Number(state.currentInput.join(""))
            state.currentInput = [];
        },
        total: (state) => {
            if(state.operatorActive != 0 && state.currentTotal > 0 ){
                // console.log(state.operatorActive)
                let calculation = 0;
                switch(state.operatorActive){
                    case `/`:
                        calculation = state.currentTotal / Number(state.currentInput.join(""))  
                        state.currentInput = [calculation]
                        state.currentTotal = 0
                        state.operatorActive = ""
                        state.decimalActive = false;

                        break

                    case '*':
                        calculation = state.currentTotal * Number(state.currentInput.join(""))
                        state.currentInput = [calculation]
                        state.currentTotal = 0
                        state.operatorActive = ""
                        state.decimalActive = false;
                        break

                    case '+':
                        calculation = state.currentTotal + Number(state.currentInput.join("")) 
                        state.currentInput = [calculation]
                        state.currentTotal = 0
                        state.operatorActive = ""
                        state.decimalActive = false;
                        break

                    case '-':
                        calculation = state.currentTotal - Number(state.currentInput.join(""))
                        state.currentInput = [calculation]
                        state.currentTotal = 0
                        state.operatorActive = ""
                        state.decimalActive = false;
                        break;
                        
                    
                    default:

                        break;
                }

            } 
        },
        reset: (state) => {
            console.log(`reset`)
            state.currentTotal = [];
            state.currentInput = [];
            state.decimalActive = false;
        },

    }

});

export const { input, setOperator, total, reset} = calculatorSlice.actions;
export default calculatorSlice.reducer;