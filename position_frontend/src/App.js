import React, { useState } from 'react';
import logo from './components/images/logo-02.png';
import './App.css';
import Main from './components/Main';
import HeaderBar from './components/HeaderBar';

// colors = ["#FF5702","#F20A01","#F5C7C8","#72A7FF","#BAC2E5","#438A70","#B3D8D6","#F39854"];
// 여기서 로그인 컴포넌트 , headercomponents, main 다르게 해줄 것



function App() {

return (
    <div className="app-body">
      <img className="logo-img" src={logo}/>
      <div className="back-img"></div>
      <div className="main-page">
        <HeaderBar/>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
