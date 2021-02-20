import React, { useState } from 'react'
import axios from 'axios'

function SignupForm() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    password_check: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/users/', {
      'username': inputs.username,
      'password': inputs.password,
      'password_check': inputs.password_check
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

    setInputs({
      username: "",
      password: "",
      password_check: ""
    })
  }

  return (
    <div className="modal-inner-box">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="email" name="username" value={inputs.username} onChange={handleChange} />
        </label>
        <label>
          <input type="password" name="password" value={inputs.password} onChange={handleChange} />
        </label>
        <label>
          <input type="password" name="password_check" value={inputs.password_check} onChange={handleChange} />
        </label>
        <button className="modal-btn" type="submit">
          signup
        </button>
      </form>
    </div>
  )
}

export default SignupForm