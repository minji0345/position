import React from 'react';
import styled from 'styled-components';
import './HeaderBar.css'

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

function HeaderBar({children, onClick}) {
    return (
    <HeaderBarBlock>
        <div className="mode">
            <a onClick={onClick}>All</a>
            <a>Public</a>
            <a>Private</a>
        </div>
        <div className="mode">
            <a>Logout</a>
        </div>
    </HeaderBarBlock>
    );
}

export default HeaderBar