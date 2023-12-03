// src/Calculator.js
import React, { useState } from 'react';
import './InvoiceCalculator.css';

function InvoiceCalculator(){
  const [quantity, setQuantity] = useState({});
  const [costPrice, setCostPrice] = useState({});
  const [discount, setDiscount] = useState({});
  const [margin, setMargin] = useState({});
  const [tax, setTax] = useState({});

  function calculateInvoice(discount, margin, tax, costPrice, quantity) {
    // calculate the cost after discount
    let costAfterDiscount = costPrice * (1 - discount / 100);
   
    // calculate the selling price after margin
    let sellingPrice = costAfterDiscount * (1 + margin / 100);
   
    // calculate the price after adding tax
    let totalPrice = sellingPrice * (1 + tax / 100);
   
    // calculate the total invoice
    let totalInvoice = totalPrice * quantity;
   
    return totalInvoice;
   }
  return (
    <div>
      <div className="calculator">
      <h1>Invoice Calculator</h1>
      <label htmlFor="quantity">Quantity</label>
      <input type="number" onChange={setQuantity} /><br/>
      <label htmlFor="costPrice">Cost Price</label>
      <input type="number" onChange={setCostPrice} /><br/>
      <label htmlFor="margin">Margin %</label>
      <input type="number" onChange={setMargin}/><br/>
      <label htmlFor="discount">Discount %</label>
      <input type="number" onChange={setDiscount}/><br/>
      <label htmlFor="tax">Tax %</label>
      <input type="number" onChange={setTax}/><br/>
      <button onClick={calculateInvoice}>Submit</button>
      </div>
      <div className="display">
        <h1>The Reasults are as follows:</h1>
        <table>
          <tr><th>Quantity</th></tr>
          <tr><td>{quantity}</td></tr>
          <tr><th>Cost Price</th></tr>
          <tr><td>{costPrice}</td></tr>
          <tr><th>Margin %</th></tr>
          <tr><td>{margin}%</td></tr>
          <tr><th>Margin </th></tr>
          <tr><td>{sellingPrice}</td></tr>
          <tr><th>Sales Price</th></tr>
          <tr><td>{salesPrice}</td></tr>
          <tr><th>Total Sales Price</th></tr>
          <tr><td>{}</td></tr>
          <tr><th>Discount %</th></tr>
          <tr><td>{discount}%</td></tr>
          <tr><th>Discount</th></tr>
          <tr><td>{costAfterDiscount}</td></tr>
          <tr><th>Tax %</th></tr>
          <tr><td>{tax}%</td></tr>
          <tr><th>Tax</th></tr>
          <tr><td>{totalPrice}</td></tr>
          <tr><th>Final Sales Price</th></tr>
          <tr><td>{calculateInvoice}</td></tr>
        </table>
      </div>
    </div>
  );
};
export default InvoiceCalculator;

