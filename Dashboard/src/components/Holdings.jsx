import {React,useEffect,useState} from 'react'
import { holdings } from '../data/data'
import axios from 'axios';
import { VerticalGraph } from './VerticalGraph';


function Holdings() {
  
  let [allHoldings,setAllHoldings] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:3000/allHoldings').then((res)=>{
    //  console.log(res.data);
      setAllHoldings(res.data);
    });
  },[]);

  let labels = allHoldings.map((subArray)=>subArray['name']);

  let data = {
    labels,
    datasets: [{
      label:"Stock Price",
      data:allHoldings.map((stock)=> stock.price),
      backgroundColor:"rgba(255,99,132,0.5)",
    }
    ],
    
  }
  return (
    <>
      <h3 className='title'>Holdings ({allHoldings.length})</h3>
      <div className='order-table'>
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>
          <tbody>
          {allHoldings.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? 'profit' : 'loss';
            const dayClass = stock.isLoss ? 'Loss' : 'profit';

            return (
              <tr key={index} >
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      <VerticalGraph data={data}/>
    </>
  )
}

export default Holdings;
