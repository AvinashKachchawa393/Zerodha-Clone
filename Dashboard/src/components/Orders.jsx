import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Orders() {

  const [allOrders, setAllOrders] = useState([]);
  // const navigate = useNavigate();
  const handleDelete = async (id)=>{
    try{
      let result = await axios.delete(`http://localhost:3000/orders/${id}`);
      // console.log(result.data);
      alert("Order deleted successfully");
      const fetchOrders = async () => {
      try {
        let result = await axios.get("http://localhost:3000/orders");
        console.log(result.data);
        setAllOrders(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchOrders();


      // navigate("/orders");

    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let result = await axios.get("http://localhost:3000/orders");
        console.log(result.data);
        setAllOrders(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchOrders();

  }, []);

  return (
    <div className='orders'>

      {(allOrders.length > 0 ? <div>
        <h4>Orders {allOrders.length}</h4>
        <table className='table table-striped' style={{width: "100%",borderCollapse: "collapse",border: "1px solid #ddd"}}>
          <thead style={{borderBottom: "2px solid #ddd"}}>
            <tr >
              <th scope="col" style={{paddingBlock:"1rem"}}>
                Name
              </th>
              <th scope="col">
                Price
              </th>
              <th scope="col">
                Qty
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index) => (
              <tr  key={index} style={index % 2 === 0 ? { backgroundColor: "#eee6e6" } : {}}>
                <td scope='row' style={{paddingLeft:"40px"}}>{stock.name}</td>
                <td style={{paddingLeft:"40px"}}>{stock.qty}</td>
                <td style={{paddingLeft:"40px"}}>{stock.price}</td>
                <td style={{paddingLeft:"40px"}}><button className='btn btn-primary' onClick={()=> handleDelete(stock._id)} style={{border:"none",borderRadius:"6px",paddingInline:"2rem",marginBottom:"4px"}}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        : <div className='no-orders'>
          <p>You have'nt placed any order today</p>
          <Link to={'/'} className='btn'>Get Started</Link>
        </div>)}
    </div>
  )
}

export default Orders;
