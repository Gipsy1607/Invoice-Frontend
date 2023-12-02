import './App.css';
import {Routes, Route } from 'react-dom';
import InvoiceCalculator from './InvoiceCalculator';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello To the Invoice Calculating website!!!</h1>
       <button onClick={InvoiceCalculator}>Invoice Calculator</button>
      </div>
    </div>
  );
}

export default App;
