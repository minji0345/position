import React, { useState } from "react";
import useForm from "./useForm";
import styled from 'styled-components'
import "./form.css"
import '../modals/Modal.css'


function LoginForm() {
  //error는 구현 안함.
  const { values, submitting, handleChange, handleSubmit } = useForm({
    initValue:
    {
      username: "",
      password: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })


  return (
    <div className="modal-inner-box">
      <form onSubmit={handleSubmit} noValidate>
        <label>
          <input type="email" name="username" value={values.username} onChange={handleChange} />
        </label>
        <label>
          <input type="password" name="password" value={values.password} onChange={handleChange} />
        </label>
        <button className="modal-btn" type="submit" disabled={submitting}>
          Login
                </button>
        <div>{values.username},{values.password}</div>
      </form>
    </div>
  )
}

export default LoginForm