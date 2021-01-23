import React from 'react';
import styled from 'styled-components';
import MainCalendar from './MainCalendar';
import SideBar from './SideBar';

const MainBlock = styled.div`
    width:100%
    height:100%;
    position:relative;
    margin:50px;
    border-radius:5px;
    padding:10px;
    display:flex;

`;

function Main() {
    return (
    <MainBlock>
        <SideBar>sidebar</SideBar>
        <MainCalendar>MainCalendar</MainCalendar>
    </MainBlock>
    );
}

export default Main