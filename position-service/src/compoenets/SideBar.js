import React from 'react';
import styled from 'styled-components';

const SideBarBlock = styled.div`
    width:11%;
    height:65%;
    background: #ffffff;
    position:relative;
    margin:50px;
    border-radius:5px;
    padding:10px;
    display:flex;

`;

function SideBar({children}) {
    return (
    <SideBarBlock>{children}</SideBarBlock>
    );
}

export default SideBar
