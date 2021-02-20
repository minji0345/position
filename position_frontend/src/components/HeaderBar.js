import React from 'react';
import styled from 'styled-components';
import './HeaderBar.css'
// import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom"

const HeaderBarBlock = styled.div`
    position:relative;
    border-radius:5px;
    left:12%;
    display:flex;
    width:80%;
    height:10%;
    display:flex;
    justify-content:space-between;
`;

function HeaderBar({ children }) {
    return (
    <HeaderBarBlock>
        <div className="mode">
            <div>All</div>
            <div>Public</div>
            <div>Private</div>
        </div>
        <div className="login">
            <div>Logout</div>
        </div>
    </HeaderBarBlock>
    );
}

export default HeaderBar
