import React, { useState } from 'react'
import { watchlist } from '../data/data';
import { Tooltip, Grow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { DoughnoutChart } from './DoughnoutChart';
import { useContext } from 'react';
import GeneralContext from './GeneralContext';

const labels = watchlist.map((subArray) => subArray['name']);
const data = {
  labels,
  datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function WatchList() {
  return (
    <div className='watchlist-container'>
      <div className='search-container'>
        <input type="text" name='search' id='search' className='search' placeholder='Search eg. infy, bse, nifty fut weekly, gold mcx' />
        <span className='counts'> {watchlist.length} / 50</span>
      </div>
      <ul className='list'>
        {watchlist.map((stock, index) => {
          return (<WatchListItem stock={stock} key={index} />);
        })}
      </ul>
      <DoughnoutChart data={data} />
    </div>
  )
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setWatchListActions] = useState(false);
  const handleMouseEnter = () => {
    setWatchListActions(true);
  }
  const handleMouseExit = () => {
    setWatchListActions(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className='item'>
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className='itemInfo'>
          <span className='percent'>{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDownIcon className="down" />) : (<KeyboardArrowUpIcon className="up" />)}
          <span className='price'>{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
}

const WatchListActions = ({ uid }) => {

  const generalContext = useContext(GeneralContext);
  const handleBuyClick = ()=>{
    generalContext.openBuyWindow(uid); 
  }

  return (
    <span className='actions'>
      <Tooltip title="Buy {B}" placement='top' arrow TransitionComponent={Grow} style={{ marginLeft: '8px', padding: '8px' }} onClick={handleBuyClick}>
        <button className='buy'>Buy</button>
      </Tooltip>
      <Tooltip title="Sell {S}" placement='top' arrow TransitionComponent={Grow} style={{ marginLeft: '8px', padding: '8px' }}>
        <button className='sell'>Sell</button>
      </Tooltip>
      <Tooltip title="Analytics {A}" placement='top' arrow TransitionComponent={Grow} style={{ marginLeft: '8px' }}>
        <button className='action'><BarChartOutlinedIcon className='icon' /> </button>
      </Tooltip>
      <Tooltip title="More" placement='top' arrow TransitionComponent={Grow} style={{ marginLeft: '8px' }}>
        <button className='action'><MoreHorizOutlinedIcon className='icon' /></button>
      </Tooltip>
    </span>
  );
};