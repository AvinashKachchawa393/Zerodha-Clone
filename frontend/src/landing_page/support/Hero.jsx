import React from 'react'

function Hero() {
  return (
    <section className='container-fluid' id='support-hero'>
      <div className='  p-5' id='support-wrapper'>
        <h4>Support Portal</h4>
        <a href="">Track ticket</a>
      </div>
      <div className='row' style={{paddingInline:'10rem',margin:'1rem',paddingBottom:'1rem'}} >
        <div className='col-5  ' id='support-link' style={{paddingLeft:'1rem'}}>
          <h1 className='fs-3'> Search for an answer or browse help topics to create a ticket</h1>
          <input type="text" placeholder='Eg. How do i activate F&O, why is my order gettting rejected ' /><br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation </a>
          <a href="">Intraday margin</a>
          <a href="">Kite user manual</a>
        </div>
        <div className='col-2'></div>
        <div className='col-5'>
          <h1 className='fs-3'>Features</h1>
          <ol>
            <li> <a href="">Current Takeovers and Delistings - January 2024</a></li>
            <li> <a href="">Latest Intraday leverage - MIS & CO</a></li>
          </ol>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
