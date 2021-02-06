import React, { useState } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom"
import './Start.css'
import logo from './compoenets/images/logo-02.png';
import styled from 'styled-components'
import App from './App'
import SignUpModal from './compoenets/SignUpModal';

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

function Login() {

    return (
        <>
            <img className="start-logo-img" src={logo}/>
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
            <Router>
                <Login></Login>
                    <LoginBox>
                        <input placeholder="E-mail"></input>
                        <input placeholder="Password"></input>
                        <div>
                            <Link to="/App">
                                <button>login</button>
                            </Link>
                            <button onClick={openModal}>Signin</button>
                            {
                            modalVisible && <SignUpModal
                            visible={modalVisible}
                            closable={true}
                            maskClosable={true}
                            onClose={closeModal}/>
                        }
                        </div>
                    </LoginBox>
                <Switch>
                    <Route exact path="/App" component={App} />
                </Switch>
            </Router>
        </div>
        );
    }
    
export default Start;