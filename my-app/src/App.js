import './App.css';
import Nav from './components/nav';
import { useState } from 'react';
function App() {

  const [mystyle , setstyle] = useState( {
    color: 'black',
    backgroundColor:'white'
    })
let  togglestyle = ()=>{
    if (mystyle.color === 'black'){
      setstyle({
        color: 'white',
        backgroundColor:'black'
        })
    }else if (mystyle.color === 'white'){
      setstyle({
        color: 'black',
        backgroundColor:'white'
        })
    }
  }

  return (
    <div className="App">
      
      <Nav style={mystyle} togglestyle={togglestyle}>

      </Nav>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
