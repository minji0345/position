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


const DateBox = () => {
    return (
        <div className="date-box">
            datebox
        </div>
    )
}

function MainCalendar() {
    //const dateBoxList = 
    //map  으로 넘겨주면 되지 않을까?
    return (
    <MainCalendarBlock>
        <DateBox/>
    </MainCalendarBlock>
    );
}

export default MainCalendar