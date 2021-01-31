import React, { useState } from 'react';
import logo from './compoenets/images/logo-02.png';
import './App.css';
import Main from './compoenets/Main';
import HeaderBar from './compoenets/HeaderBar';
// import SideBar from './compoenets/SideBar'
// import MainCalendar from './compoenets/MainCalendar';

// colors = ["#FF5702","#F20A01","#F5C7C8","#72A7FF","#BAC2E5","#438A70","#B3D8D6","#F39854"];

const Team = [
  {
    name : "멋사",
    tag_color : "#FF5702",
    users: []
  },
  {
    name : "Position",
    tag_color : "#F20A01",
    users: []
  },
  {
    name : "Cont,",
    tag_color : "#F5C7C8",
    users: []
  },
  {
    name : "연인",
    tag_color : "#BAC2E5",
    users: []
  }
]

function App() {

  // const [team, setTeam ] = useState(teams);

  // const [color, setColor] = useState(colors);


  // const handleColor = (color) => {
  //   setColor(color);
  // };

  // const handleTeam = (team) => {
  //   setColor(team);
  // };

  return (
    <body>
      <img className="logo-img" src={logo}/>
      <div className="back-img"></div>
      <div className="main-page">
        <HeaderBar/>
        <Main Team={Team}></Main>
      </div>
    </body>
  );
}

export default App;
