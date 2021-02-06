import React from 'react';
import styled from 'styled-components';
import MainCalendar from './MainCalendar';
import SideBar from './SideBar';

const MainBlock = styled.div`
    width:100%
    height:100%;
    position:relative;
    border-radius:5px;
    padding:10px;
    display:flex;
    justify-content:space-around;
    margin-top:3%;
`;

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

function Main() {
    return (
    <MainBlock>
        <SideBar Team={Team} ></SideBar>
        <MainCalendar >MainCalendar</MainCalendar>
    </MainBlock>
    );
      
}

export default Main