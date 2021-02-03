import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './Modal.css'
import { MdClose } from 'react-icons/md';

const tagColors1 = ["#FF5702","#F20A01","#F5C7C8","#72A7FF","#BAC2E5","#438A70","#B3D8D6","#F39854"];

const TagColor = ({ color, selected }) => {
    return (
        <button style={{ background: color}} className="team-tagcolor" onClick={selected}></button>
    )
}
//selected로 color의 key값을 전달

function Modal({ className,
    onClose,
    maskClosable,
    closable,
    visible,}) {

    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
        return () => {
            const scrollY = document.body.style.top
            document.body.style.cssText = `position: ""; top: "";`
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [])

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

        //컬러 값 받아와서 매핑해주는 코드

        const colorList = tagColors1.map(
            (color) => (<TagColor 
                color={color} key={color} 
                // onChange={() => onSelect(color)} 
                />)
        );

        //input 값 관리
        const [inputs, setInputs] = useState({
            team_name: '',
            team_info:'',
        })

        const { team_name, team_info } = inputs

        const onChange = (e) => {

        const { name, value } = e.target   

        const nextInputs = {            
            ...inputs,  
            [name]: value,
        }

        setInputs(nextInputs)       

    }
    
    //추후에 구현 예정
    const onReset = () => {			
        
        const resetInputs = {       
            team_name: '',
            tag_color: '',
        }
        setInputs(resetInputs)      	  
    }

    //team_name, team_info 로 백으로 값 넘겨주기

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
                <div className="modal-inner-box">
                    <input placeholder="Team Name" name="team_name" onChange={onChange} value={team_name}></input>
                    <input placeholder="Team Info" name="team_info" onChange={onChange} value={team_info}></input>
                    <div className="team-tagcolor-list">
                        {colorList}
                    </div>
                    <div> {team_name},{team_info} </div>
                    <button className="modal-btn">Add</button>
                </div>
            </ModalInner>
            </ModalWrapper>
        </>
    )
}


    Modal.propTypes = {
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

export default Modal