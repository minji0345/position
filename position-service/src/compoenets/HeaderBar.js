import React from 'react';
import styled from 'styled-components';

const HeaderBarBlock = styled.div`
    width:11%;
    height:65%;
    background: #ffffff;
    position:relative;
    margin:50px;
    border-radius:5px;
    padding:10px;

`;

function HeaderBar({children}) {
    return (
    <HeaderBarBlock>{children}</HeaderBarBlock>
    );
}

export default HeaderBar