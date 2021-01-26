import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import SideBar from './compoenets/SideBar'
import logo from './compoenets/images/logo-02.png';
import './App.css';
import Main from './compoenets/Main';
import MainCalendar from './compoenets/MainCalendar';
import HeaderBar from './compoenets/HeaderBar';


const teams = ["멋사", "Position", "Cont,", "연인"];
const colors = ["#FF5702","#F20A01","#F5C7C8","#72A7FF","#BAC2E5","#438A70","#B3D8D6","#F39854"];

function App() {

  const [team, setTeam ] = useState(teams);

  const [color, setColor] = useState("blue");

  const handleColor = (color) => {
    setColor(color);
  };

  const handleTeam = (team) => {
    setColor(team);
  };

  return (
    <body>
      <img className="logo-img" src={logo}/>
      <div className="back-img"></div>
      <div className="main-page">
        <HeaderBar/>
        <Main color={color} colors={colors} teams={teams}></Main>
      </div>
    </body>
  );
}

export default App;
