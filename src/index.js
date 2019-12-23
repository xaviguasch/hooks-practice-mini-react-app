import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

let count = 0

const increase = () => {
    console.log('I got clicked!')
}

ReactDOM.render(<App />, document.getElementById('root'))
