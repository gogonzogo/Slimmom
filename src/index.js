import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* delete basename for development but replace prior to your commit*/}
    <BrowserRouter > 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
