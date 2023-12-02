import './App.css';
import InvoiceCalculator from './InvoiceCalculator';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Invoice Calculator</h1>
        <p>This app calculates the total cost of an invoice based on a list of items and their prices.</p>
        <InvoiceCalculator/>
      </div>
    </div>
  );
}

export default App;
