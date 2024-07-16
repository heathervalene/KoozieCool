import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'; 
import 'materialize-css/dist/js/materialize.min.js'


const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap";
document.head.appendChild(googleFontsLink);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
