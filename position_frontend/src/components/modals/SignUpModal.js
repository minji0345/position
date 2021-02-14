import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './Modal.css'
import { MdClose } from 'react-icons/md';
import LoginForm from '../forms/LoginForm';

//selected로 color의 key값을 전달

function SignUpModal({ className,
    onClose,
    maskClosable,
    closable,
    visible,}) {

    
    //modal창 열림 & 닫힘 관리
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
            }
        }
        
        const close = (e) => {
            if (onClose) {
            onClose(e)
            }
        }

        //지정된 컬러 값 받아와서 매핑해주는 코드

    //input 값 관리 -> 다시도전
    //     const [inputs, setInputs] = useState({
    //         username: '',
    //         password:'',
    //         password_check:'',
    //     })

    //     const { username, password, password_check } = inputs

    //     const onChange = (e) => {

    //     const { name, value } = e.target   

    //     const nextInputs = {            
    //         ...inputs,  
    //         [name]: value,
    //     }

    //     setInputs(nextInputs)       

    // }
    
    //추후에 구현 예정
    // const onReset = () => {			
        
    //     const resetInputs = {       
    //         username: '',
    //         password:'',
    //         password_check:'',
    //     }
    //     setInputs(resetInputs)      	  
    // }

    //add버튼 누르면 team_name, team_info 명으로 백으로 값 넘겨주기! -> 구현 해야함

    return (
        <>
        <ModalOverlay visible={visible} />
        <ModalWrapper
            className={className}
            onClick={maskClosable ? onMaskClick : null}
            tabIndex="-1"
            visible={visible}
            >
            <ModalInner tabIndex="0" className="modal-inner">
                {closable && <MdClose className="modal-close" onClick={close} />}
                <LoginForm/>
            </ModalInner>
            </ModalWrapper>
        </>
    )
}


    SignUpModal.propTypes = {
    visible: PropTypes.bool,
    }


    const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
    `

    const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    `

    const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 10px;
    width: 40%;
    height: 40%;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 10px 20px;
`

export default SignUpModal