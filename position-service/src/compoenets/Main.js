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

function Main({teams, colors, color}) {
    return (
    <MainBlock>
        <SideBar color={color} colors={colors} teams={teams}>sidebar</SideBar>
        <MainCalendar colors={colors} teams={teams}>MainCalendar</MainCalendar>
    </MainBlock>
    );
}

export default Main