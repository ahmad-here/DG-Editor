import React, { useState } from 'react'

import Controllers from './controllers';
const Home = ({style , togglestyle}) => {
  
    return (
    <div style={style} togglestyle={togglestyle}>
    <Controllers mystyle={style} togglestyle={togglestyle}></Controllers>
    
    </div>
  )
}

export default Home
