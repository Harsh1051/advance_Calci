import React, { useState } from "react";
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');

  const calculateResult = (input) => {
    try {
      const operators = ['+', '-', '*', '/', '%'];
      let operator = null;
      let operatorIndex = -1;

      // Start loop from index 1 to allow a negative first operand
      for (let i = 1; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          operatorIndex = i;
          break;
        }
      }

      // If no operator found, try converting the whole input to a number
      if (operatorIndex === -1) {
        setInput(parseFloat(input).toString());
        return;
      }

      // Get operand strings using operator's index
      const operand1String = input.slice(0, operatorIndex);
      const operand2String = input.slice(operatorIndex + 1);

      const operand1 = parseFloat(operand1String);
      const operand2 = parseFloat(operand2String);

      let result;

      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        case '%':
          result = operand1 % operand2;
          break;
        default:
          throw new Error("Invalid Operator");
      }
      setInput(result.toString());
    }
    catch (error) {
      setInput('Error');
    }
  };

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === '<') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      calculateResult(input);
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <div className="Container">
      <h2 className="title">CALCI</h2>

      <div className="calc">
        <h1 id='input'>{input}</h1>
        <div>
          <button onClick={() => handleButtonClick('AC')}>AC</button>
          <button onClick={() => handleButtonClick('<')}>&lt;</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('00')}>00</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>

      <div className="footer">
        <a
          href="https://github.com/Harsh1051"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub Logo"
            className="github-logo"
          />
        </a>
        <span>Developed by - <strong>Harsh1051</strong></span>
      </div>
    </div>
  );
};

export default App;
