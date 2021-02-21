import React, { useState } from 'react';
import './Start.css'
import logo from './components/images/logo-02.png';
import styled from 'styled-components'
import SignUpModal from './components/user/SignUpModal';
import LoginForm from './components/user/LoginForm';

const LoginBox = styled.div`
    box-sizing: border-box;
    position:relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 10px;
    width: 50vh;
    height: 60vh;
    top:20vh;
    left:90vh;
    margin: 0 auto;
    padding: 10px 20px;
    `

function Logo() {
  return (
    <>
      <img className="start-logo-img" alt="start-logo"src={logo} />
      <div className="start-back-img"></div>
    </>
  );
}

function Start() {

  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }

  SignUpModal.defaultProps = {
    closable: true,
    maskClosable: true,
    visible: false
  }

  return (
    <div className="start-body">
      <Logo></Logo>
      <LoginBox>
        <div className="signup-btn">
          <LoginForm />
          <button onClick={openModal}>SignUp</button>
          {
            modalVisible && <SignUpModal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal} />
          }
        </div>
      </LoginBox>
    </div>
  );
}

export default Start;