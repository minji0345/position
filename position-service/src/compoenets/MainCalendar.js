import React from 'react';
import styled from 'styled-components';

const MainCalendarBlock = styled.div`
    width:70%;
    height:600px;
    background: #ffffff;
    position:relative;
    border-radius:5px;
    padding:10px;
    margin:20px;

`;

function MainCalendar({children}) {
    return (
    <MainCalendarBlock>{children}</MainCalendarBlock>
    );
}

export default MainCalendar