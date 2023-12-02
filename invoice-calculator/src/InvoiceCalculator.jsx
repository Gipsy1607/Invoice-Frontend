import React, {useState} from 'react';

function InvoiceCalculator() {
    const InvoiceCalculator = ()=>{
        const [quantity, setQuantity] =useState(0);
        const [costPrice, setCostPrice] =useState(0);
        const [margin, setMargin] = useState(0);
        const [discount, setDiscount] =useState(0);
        const [tax, setTax] =useState(0);

        const handleQuantityChange = (e) =>{
            setQuantity(e.target.value);
        }
        const handleCostPriceChange = (e) =>{
            setCostPrice(e.target.value);
        }
        const handleMarginChange = (e) =>{
            setMargin(e.target.value);
        }
        const handleDiscountChange = (e) =>{
            setDiscount(e.target.value);
        }
        const calculateTax = () =>{
            const taxWithoutDiscount = quantity * costPrice;
            const taxWithDiscount = taxWithoutDiscount - (taxWithoutDiscount * (discount/100));
            setTax(taxWithDiscount)
        }
    }

  return (
    <div className='calculator-box'>
      <label>Quantity</label>
      <input type="number" value={quantity} onChange={handleQuantityChange}/>
      <label>Cost Price</label>
      <input type="number" value={costPrice} onChange={handleCostPriceChange}/>
      <label>Margin %</label>
      <input type="number" value={Margin} onChange={handleMarginChange} />
      <label>Discount %</label>
      <input type="number" value={Margin} onChange={handleChange} />

    </div>
  )
}

export default InvoiceCalculator
