import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GeneralContext from './GeneralContext';
import "./BuyActionWindow.css";
import { useContext } from 'react';
// import { set } from 'mongoose';
function BuyActionWindow({uid}) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const navigate = useNavigate();
let {closeBuyWindow} = useContext(GeneralContext);
  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  }

  const handleFormSubmit = async (e) => {
    //write a function to save data in databases
    e.preventDefault();
    // let data = {

    // };
    let result = await axios.post("http://localhost:3000/orders", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "Buy"
    });
    if(result.status === 200) {
      navigate("/orders");
      
      closeBuyWindow();
    }
    console.log(result.status);
  }

  return (
    <div className='container' >
      <form style={{ textAlign: "center" }} onSubmit={handleFormSubmit}>
        <h4 style={{ textAlign: "center" }}>Buy Stock</h4>
        <div className='row'>
          <div className='col ' style={{ textAlign: "center", fontSize: "1.2rem" }}>
            <label htmlFor="stock-quantity" >Quantity</label><br />
            <input type="number" style={{ width: "80%", paddingInline: "1rem", paddingBlock: "8px", marginTop: "10px", marginLeft: "5px", borderRadius: "5px", border: "none" }} required name="stockQuantity" id="stock-quantity" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} />
          </div>
          <div className='col ' style={{ textAlign: "center", fontSize: "1.2rem" }}>
            <label htmlFor="stock-price" >Price</label> <br />
            <input type="number" style={{ width: "80%", paddingInline: "1rem", paddingBlock: "8px", marginTop: "10px", marginRight: "5px", borderRadius: "5px", border: "none" }} required name="stockPrice" id="stock-price" value={stockPrice} onChange={(e) => setStockPrice(e.target.value)} />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <button type="submit" className='btn btn-primary buy-btn' style={{ border: "none", paddingInline: "1rem", marginLeft: "6px", width: "95%", borderRadius: "6px" }}>Buy</button> <br />
          </div>
          <div className='col'>
            <Link to="" onClick={handleCancelClick}>
              <button type="button" className='btn cancel-btn' onClick={handleCancelClick} style={{ border: "none", paddingInline: "1rem", marginRight: "6px", width: "95%", borderRadius: "6px", backgroundColor: "#6c757d" }}>Cancel</button>
            </Link>
          </div>
        </div>


      </form>

    </div>
  )
}

export default BuyActionWindow
