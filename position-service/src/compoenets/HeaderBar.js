import React from 'react';
import styled from 'styled-components';

const HeaderBarBlock = styled.div`
    position:relative;
    border-radius:5px;
    padding:10px;
    left:20%;
    display:flex;
    width:80%;
    height:30%;
`;

function HeaderBar({children}) {
    return (
    <HeaderBarBlock>
        <div>
            <button>All</button>
            <button>Public</button>
            <button>Private</button>
        </div>
        <div>
            <button>Logout</button>
        </div>
    </HeaderBarBlock>
    );
}

export default HeaderBar