import { useDispatch, useSelector } from 'react-redux';
import {
    input,
    reset,
    total,
    setOperator,
 } from './calculatorSlice';

const Calculator = () => {

    const currentInput = useSelector((state) => state.calculator.currentInput)
    const dispatch = useDispatch()

    const buttonPress = ({target}) => {
        dispatch(input(target.value))
    }
    const operatorPress = ({target}) => {

        dispatch(setOperator(target.value))
        
        if(target.className === 'active' ){
            target.className = ''
        } else{
            target.className = 'active'
        }
        
    }
    
    return (
        <div className='calculator'>
            <div className='calculatorButtonsExcludingOperators'>
                
                <div className='calculatorValue'>
                    <p>{currentInput}</p>
                    {/* <button disabled>{currentInput}</button> */}
                </div>

                <div className='calculatorInput'>
                    <div>
                        <button value={7} onClick={buttonPress} >7</button>
                        <button value={8} onClick={buttonPress} >8</button>
                        <button value={9} onClick={buttonPress} >9</button>
                    </div> 
                    <div>
                        <button value={4} onClick={buttonPress} >4</button>
                        <button value={5} onClick={buttonPress} >5</button>
                        <button value={6} onClick={buttonPress} >6</button>
                    </div>
                    <div>
                        <button value={1} onClick={buttonPress} >1</button>
                        <button value={2} onClick={buttonPress} >2</button>
                        <button value={3} onClick={buttonPress} >3</button>  
                    </div>
                    <div>
                        <div>
                            <button value={0} onClick={buttonPress} >0</button>
                            <button value={'.'} onClick={buttonPress} >.</button>
                            <button className='calculatorReset' onClick={() => dispatch(reset())}>C</button>
                        </div>                   
                    </div>
                </div>
            </div>

            <div className='calculatorOperations'>
                <button value={'/'} onClick={operatorPress}>÷</button>
                <button value={'*'} onClick={operatorPress}>x</button>
                <button value={'+'} onClick={operatorPress}>+</button>
                <button value={'-'} onClick={operatorPress}>-</button>
                <button onClick={() => dispatch(total())}>=</button>      
            </div>
        </div>
    )
}

export default Calculator
