import React, { useState } from 'react';
import './custom.css';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setResult(result + value);
    };

    const handleClear = () => {
        setResult('');
    };

    const handleEqual = () => {
        try {
            setResult(eval(result)); 
        } catch {
            setResult('Error');
        }
    };

    return (
        <>
        <h2 style={{textAlign: 'center'}}>Make your calculation</h2>
        <div className="calculator">
            <div className="display">{result}</div>
            <div className="buttons">
                 <button onClick={() => handleClick('(')}>(</button>
                <button onClick={() => handleClick(')')}>)</button>
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={handleClear}>AC</button>
               
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                
                    
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                

                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={handleEqual}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
                
            </div>
        </div>

        </>
    );
};

export default Calculator;
