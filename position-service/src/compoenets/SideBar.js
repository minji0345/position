import React from 'react';
import styled from 'styled-components';

const SideBarBlock = styled.div`
    width:11%;
    height:65%;
    background: #ffffff;
    position:relative;
    border-radius:5px;
    padding:10px;
    margin:20px;

`;

function SideBar({children}) {
    return (
    <SideBarBlock>{children}</SideBarBlock>
    );
}

export default SideBar
