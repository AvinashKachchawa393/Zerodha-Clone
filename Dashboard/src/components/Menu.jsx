import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdjustIcon from '@mui/icons-material/Adjust';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import HelpIcon from '@mui/icons-material/Help';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Menu() {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropDownOpen);
  }

  const menuClass= 'menu';
  const activeMenuClass = 'menu selected';

  const handleSidemenuClick = ()=>{
    document.querySelector('.sidemenu').classList.toggle('active');
  }

  return (
    <div className='menu-container'>
      <img src="logo.png" alt="logo" style={{width:'50px'}} />
        <div className='menus'>
          <ul>
            <li>
              <Link to='/' style={{textDecoration:'none'}} onClick={()=>{handleMenuClick(0)}}>
                <p className={selectMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link to='/orders' style={{textDecoration:'none'}} onClick={()=>{handleMenuClick(1)}}>
                <p className={selectMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
              </Link>
            </li>
            <li>
              <Link to='/holdings' style={{textDecoration:'none'}} onClick={()=>{handleMenuClick(2)}}>
                <p className={selectMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
              </Link>
            </li>
            <li>
              <Link to='/positions' style={{textDecoration:'none'}} onClick={()=>{handleMenuClick(3)}}>
                <p className={selectMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
              </Link>
            </li>
            <li>
              <Link to='/funds' style={{textDecoration:'none'}} onClick={()=>{handleMenuClick(4)}}>
                <p className={selectMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
              </Link>
            </li>
            <li>
              <Link to='/apps' style={{textDecoration:'none'}} onClick={()=>{handleMenuClick(5)}}>
                <p className={selectMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
              </Link>
            </li>
          </ul>
          <hr />
          <div className='profile' onClick={()=>{handleProfileClick(),handleSidemenuClick()}}>
            <div className='avatar'>ZU</div>
            <p className='username'>USERID</p>
          </div>
        </div>

        <div className='sidemenu '>
          <p style={{marginLeft:"10px",fontSize:"1.2rem",marginBottom:"0px "}}>Zerodha User</p>
          <p  style={{marginLeft:"10px",fontSize:"10px",color:"#6c757d"}}>hello@zerodha.com</p>
          <hr style={{height:"0px"}}/>
          <p  className="userProfile" style={{ display: 'flex', alignItems: 'center', gap: '8px',color:"#6c757d",paddingLeft:"10px" }}><AccountCircleIcon />My profile</p>
          <hr style={{height:"0px"}}/>
          <ul style={{color:"#6c757d",fontSize:"0.9rem",listStyleType:"none",paddingLeft:"10px"}}>
            {/* <li  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>/li> */}
            <li  style={{ display: 'flex', alignItems: 'center', gap: '8px',marginBlock:"4px" }}><AdjustIcon/>Console</li>
            <li  style={{ display: 'flex', alignItems: 'center', gap: '8px',marginBlock:"4px" }}><AdjustIcon/>Coin</li>
            <li  style={{ display: 'flex', alignItems: 'center', gap: '8px',marginBlock:"4px" }}><ThumbsUpDownIcon/>Support</li>
            <li  style={{ display: 'flex', alignItems: 'center', gap: '8px',marginBlock:"4px" }}><PersonAddIcon/>Invite friends</li>
          </ul>
          <hr style={{height:"0px"}}/>
          <ul style={{color:"#6c757d",fontSize:"0.9rem",listStyleType:"none",paddingLeft:"10px"}}>
            <li  style={{ display: 'flex', alignItems: 'center', gap: '8px',marginBlock:"4px" }}><PersonAddIcon/>Tour Kite</li>
            <li  style={{ display: 'flex', alignItems: 'center', gap: '8px',marginBlock:"4px" }}><KeyboardIcon/>Keyboard shortcuts</li>
            <li  style={{ display: 'flex', alignItems: 'center', gap: '8px',marginBlock:"4px" }}><HelpIcon/>Help</li>
            <li  style={{ display: 'flex', alignItems: 'center', gap: '8px',marginBlock:"4px" }}> <Link to="http://localhost:3000/logout" style={{textDecoration:'none'}}><ArrowCircleRightOutlinedIcon/>Logout</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Menu;