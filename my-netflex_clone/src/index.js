import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// function Header() {
//   return (
//     <div className="header">
//       <img src="/path/to/netflix-logo.png" alt="Netflix Logo" className="logo" />
//     </div>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
