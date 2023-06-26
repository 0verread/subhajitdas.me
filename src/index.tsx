import { render } from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter> 
    </React.StrictMode>, document.getElementById('root'))