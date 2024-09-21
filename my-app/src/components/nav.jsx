import React, { useState } from 'react'
import Home from './home'
const Nav = ({style , togglestyle}) => {
  const [home,sethome] = useState(false)
  
  return (
    <>
    <div className='nav' style={style}>
      <div className='head'><button className='btnstyle'>DG Editer</button></div>
      <div className='navbtn'>
      <button className='btnstyle' onClick={()=>{sethome(!home)}}>home</button>
      <button className='btnstyle'>about</button>
      <button className='btnstyle' onClick={togglestyle}>dark mode</button>
      </div>
    </div>
    {home && <Home style={style}></Home>}
    </>
  )
}

export default Nav