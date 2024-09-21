import React from 'react'

const Patel = ({color}) => {
    const red = ()=>{color('red')}
    const blue = ()=>{color('blue')}
    const green = ()=>{color('green')}
    const yellow = ()=>{color('yellow')}
    const orange = ()=>{color('orange')}
    const black = ()=>{color('black')}
    const white = ()=>{color('white')}
    const brown = ()=>{color('brown')}
    const purple = ()=>{color('purple')}


    return (
        <>
            <div>

                <div>
                    <button onClick={red}>red</button>
                    <button onClick={blue}>blue</button>
                    <button onClick={green}>green</button>
                </div>

                <div>
                    <button onClick={yellow}>yellow</button>
                    <button onClick={orange}>orange</button>
                    <button onClick={black}>black</button>
                </div>

                <div>
                    <button onClick={white}>white</button>
                    <button onClick={brown}>brown</button>
                    <button onClick={purple}>purple</button>
                </div>

            </div>


        </>
    )
}

export default Patel