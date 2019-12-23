import React, { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = React.useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div className='App'>
            <div className='container'>
                <h1>{count}</h1>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default App
