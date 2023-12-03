// src/Calculator.js
import React, { useState } from 'react';
import {evaluate} from 'math.js';

const InvoiceCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(evaluate(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div>
      
    </div>
  );
};

export default InvoiceCalculator;

