import React from 'react';
import { createGlobalStyle } from 'styled-components'
import SideBar from './compoenets/SideBar'
import logo from './compoenets/images/logo-02.png';
import './App.css';
import Main from './compoenets/Main';
import MainCalendar from './compoenets/MainCalendar';
import HeaderBar from './compoenets/HeaderBar';

// const GlonbalStyle = createGlobalStyle`
//   body {
    
//   }
// `;


function App() {
  return (
    <body>
      <img className="logo-img" src={logo}/>
      <div className="back-img"></div>
      <div className="main-page">
        <HeaderBar/>
        <Main></Main>
      </div>
    </body>
  );
}

export default App;
