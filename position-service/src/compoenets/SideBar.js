import React from 'react';
import styled from 'styled-components';
import './SideBar.css';

const SideBarBlock = styled.div`
    display:flex;
    width:12%;
    height:70vh;
    background: #ffffff;
    position:relative;
    border-radius:5px;
    padding:10px;
    margin: auto 0;
`;

const TeamList = ({team, color}) => {

    return (
        <div className="team-list">
        <div className="tag-button" style={{ background: color }}></div><div className="team-name">{team}</div>
        </div>
    )
}

function SideBar({Team}) {
    
    const teamList = Team.map(
        (team) => (<TeamList team={team.name} color={team.tag_color}/>)
    )
    return (
    <SideBarBlock>
            <div className="side-bar">
                <div className="public-team-list">
                    <h2>Public</h2>
                    {teamList}
                </div>
                <div className="add-button"><a>+ Add</a></div>
            </div>
    </SideBarBlock>
    );
}

export default SideBar
