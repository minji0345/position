import React from 'react';
import { createGlobalStyle } from 'styled-components'
import SideBar from './compoenets/SideBar'
import logo from './compoenets/images/logo-02.png';
import './App.css';
import MainCalendar from './compoenets/MainCalendar';
import Main from './compoenets/Main';

const GlonbalStyle = createGlobalStyle`
  body {
    
  }
`;


function App() {
  return (
    <body>
      <img className="logo-img" src={logo}/>
      <div className="back-img"></div>
      <Main></Main>
    </body>
  );
}

export default App;
