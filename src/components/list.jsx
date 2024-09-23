import React from 'react'

const List = ({setFont}) => {
  const arial = ()=>{setFont('Arial')}
  const calibri = ()=>{setFont('Calibri')}
  const caesar = ()=>{setFont('Caesar Dressing')}

  return (
    <>
    <div className='lifont'>
        <button className='controlbtns' onClick={arial}>Arial</button>
        <button onClick={calibri}>Calibri</button>
        <button onClick={caesar}>Caesar Dressing</button>
        </div>
        </>
  )
}
export default List