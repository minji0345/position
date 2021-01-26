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

const TeamName = ({teams}) => {

    return (
        <div className="team-name" teams={teams}>
            {/*   리스트 만들어 넣기 */}
        </div>
    )
}

function SideBar({teams, colors, color}) {
    
    // const TeamList = teams.map(
    //     (team) => (<TeamName team={team}/>)
    // )
    //tag-button props로 넘겨줄것
    return (
    <SideBarBlock>
            <h2>Team</h2>
            <div className="team-list">
                <div className="tag-button" style={{ background: color }}></div><div className="team-name">{teams[0]}</div>
            </div>
            <div className="team-list">
                <div className="tag-button"></div><div className="team-name">{teams[1]}</div>
            </div>
            <div className="team-list">
                <div className="tag-button"></div><div className="team-name">{teams[2]}</div>
            </div>
            <div className="team-list">
                <div className="tag-button"></div><div className="team-name">{teams[3]}</div>
            </div>
    </SideBarBlock>
    );
}

export default SideBar
