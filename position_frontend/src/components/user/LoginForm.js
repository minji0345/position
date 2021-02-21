import React, { useState } from "react";
import axios from 'axios';
// import useForm from "../forms/useForm";
// import styled from 'styled-components'
import "./form.css"
import '../modals/Modal.css'
import { useUserDispatchContext } from './UserContext';

function LoginForm() {
  const [ inputs, setInputs ] = useState({
    username: "",
    password: ""
  });

  const dispatch = useUserDispatchContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = inputs;

    axios.post('api/users/signin/', {
      username,
      password
    })
    .then(response => {
      const {token} = response.data;
      dispatch({
        type: 'LOGIN_USER',
        data: {
          username,
          password,
          token
        }
      });
    })
    .catch((e) => {
      alert('잘못된 정보를 입력했거나, 회원이 아닙니다.')
    })

    setInputs({
      ...inputs,
      username: "",
      password: ""
    });
  }

  return (
    <div className="modal-inner-box">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="username" name="username" value={inputs.username} onChange={handleChange} />
        </label>
        <label>
          <input type="password" name="password" value={inputs.password} onChange={handleChange} />
        </label>
        <button className="modal-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm