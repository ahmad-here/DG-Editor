import React, { useState } from 'react'
import List from './list';
import Patel from './patel';

const Controllers = ({ mystyle, togglestyle }) => {
  const [text, settext] = useState('enter text here');
  const [fontFamily , setFontFamily] = useState('')

  const click = () => {
    let newtext = text.toUpperCase();
    settext(newtext)
  }

  const handle = (event) => {
    settext(event.target.value)
  };

  const lower = () => {
    let news = text.toLowerCase();
    settext(news)
  }

  const clear = () => {
    settext("")
  }

  const [size, setsize] = useState(15)
  let sizeup = () => { setsize(size + 2) }
  let sizedown = () => { setsize(size - 2) }

  const [font, setfont] = useState(false)
  const [palet , showpalet] = useState(false)
  const [color , setcolor] = useState('')
  return (
    <>
      <div id="organizer">
        <div>
          <p>Resizer</p>
          <div>
            <div>
              <button onClick={click} style={mystyle}>^ABC</button>
              <button onClick={lower} style={mystyle}>abc</button>
              <button onClick={clear} style={mystyle}> Clear</button>
            </div>
            <div>
              <button style={mystyle} onClick={sizeup}>SIZE++</button>
              <button style={mystyle} onClick={sizedown}>SIZE--</button>
            </div>
          </div>
        </div>

        <div>
          <p>Designer</p>
            <button style={mystyle} onClick={() => { setfont(!font) }}>Fonts</button>
            {font && <List setFont={setFontFamily}/>}
        </div>

        <div>
          <p>Palet</p>
          <button style={mystyle} onClick={() => { showpalet(!palet) }}>Colors</button>
          {palet && <Patel color={setcolor}/>}
        </div>

      </div>
      
      

      <div className="writer" style={mystyle}>
        <h1 className='test' style={mystyle}>enter text here</h1>


        <textarea 
  className='board' 
  name="box" 
  value={text} 
  onChange={handle} 
  style={{ 
    ...mystyle, 
    fontSize: `${size}px`, 
    fontFamily: fontFamily, 
    color: color || mystyle.color, // Ensure text color applies from dark mode
    backgroundColor: mystyle.backgroundColor // Ensure background changes with dark mode
  }} 
  id="box" 
  rows="10">
</textarea>      </div>
    </>
  )
}

export default Controllers