import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { colors, createTheme } from '@mui/material'

const theme = createTheme({
  palette:{
    primary:{
      main:colors.cyan[500]
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
