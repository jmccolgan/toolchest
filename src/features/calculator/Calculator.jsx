import React from 'react'

const Calculator = () => {
  return (
    <div className='calculator'>
        <div className='calculatorButtonsExcludingOperators'>
            <div>
                
                <div className='calculatorValue'>
                    <button >Value</button>
                </div>

                <div className='calculatorReset'>
                    <button >reset</button>
                </div>
            </div>

            <div className='calculatorInput'>
                <div>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                </div> 
                <div>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>  
                </div>
            </div>
        </div>

        <div className='calculatorOperations'>
            <button>÷</button>
            <button>x</button>
            <button>+</button>
            <button>-</button>
            <button>=</button>      
        </div>
    </div>
  )
}

export default Calculator
