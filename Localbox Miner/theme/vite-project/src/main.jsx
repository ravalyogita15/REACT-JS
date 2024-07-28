import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProviderFuction } from './Context/Themecontex.jsx'
import {AuthcontexproviderFunction} from "./Context/Authcontex.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthcontexproviderFunction>
  <ThemeContextProviderFuction>
    <App />
  </ThemeContextProviderFuction>,
  </AuthcontexproviderFunction>

)
