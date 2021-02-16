import React, { useState } from 'react';
import styled from 'styled-components';
import './SideBar.css';
import AddTeamModal from './modals/AddTeamModal';

const SideBarBlock = styled.div`
    display:flex;
    justify-content: center;
    width:12%;
    height:70vh;
    background: #ffffff;
    position:relative;
    border-radius:5px;
    padding:10px;
    margin: auto 0;
`;

const TeamList = ({ team, color }) => {

  return (
    <div className="team-list">
      <div className="tag-button" style={{ background: color }}></div><div className="team-name">{team}</div>
    </div>
  )
}

function SideBar({ Team }) {

  const teamList = Team.map(
    (team) => (<TeamList team={team.name} color={team.tag_color} />)

  )

  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }

  AddTeamModal.defaultProps = {
    closable: true,
    maskClosable: true,
    visible: false
  }

  return (
    <SideBarBlock>
      <div className="side-bar">
        <div className="public-team-list">
          <h2>Public</h2>
          {teamList}
        </div>
        <div className="add-button">
          <a onClick={openModal}>+ Add</a>
          {
            modalVisible && <AddTeamModal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal} />
          }
        </div>
      </div>
    </SideBarBlock>
  );
}

export default SideBar
