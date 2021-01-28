import React from 'react';
import styled from 'styled-components';
import './SideBar.css';

const SideBarBlock = styled.div`
    width:12%;
    height:600px;
    background: #ffffff;
    position:relative;
    border-radius:5px;
    padding:10px;
    margin:20px;

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
            <h2>Team</h2>
            {teamList}
    </SideBarBlock>
    );
}

export default SideBar
