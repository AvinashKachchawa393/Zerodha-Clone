import React from 'react'

function Universe() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <h1>The Zerodha Universe</h1>
        <p className='mt-3 mb-3'>Extend your trading and investment experience even further with our
          partner platforms</p>
        <div className='col-4 p-3 mt-3'>
          <img src="media/images/smallcaseLogo.png" alt="small case logo" />
          <p className='text-muted text-small mt-2'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-3'>
          <img src="media/images/streakLogo.png" alt="streak logo" style={{width:'40%'}}/>
          <p className='text-muted text-small mt-1'>Alogo & strategy platform</p>
        </div>
        <div className='col-4 p-3 mt-3'>
          <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" style={{width:'60%'}}/>
          <p className='text-small text-muted mt-3'>Optional trading platform</p>
        </div>
        <div className='col-4 p-3 mt-3'>
          <img src="media/images/zerodhaFundhouse.png" alt="zerodha fund house" style={{width:'60%'}}/>
          <p className='text-muted text-small mt-1'>Asset management</p>
        </div>
        <div className='col-4 p-3 mt-3'>
          <img src="media/images/goldenpiLogo.png" alt="streak logo" style={{width:'50%'}} />
          <p className='text-muted text-small mt-2'>Bond trading platform</p>
        </div>
        <div className='col-4 p-3 mt-3'>
          <img src="media/images/dittoLogo.png" alt="sensibullLogo" style={{width:'40%'}}/>
          <p className='text-small text-muted mt-1'>Insurance</p>
        </div>
         <button className='btn btn-primary fs-5 p-2 mb-5 mt-3' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Universe
