import React from 'react';
import styled from 'styled-components';

const MainCalendarBlock = styled.div`
    width:100%;
    height:65%;
    background: #ffffff;
    position:relative;
    margin:50px;
    border-radius:5px;
    padding:10px;

`;

function MainCalendar({children}) {
    return (
    <MainCalendarBlock>{children}</MainCalendarBlock>
    );
}

export default MainCalendar