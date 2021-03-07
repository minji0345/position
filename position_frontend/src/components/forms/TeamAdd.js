import React, { useEffect, useState } from 'react'
import axios from 'axios'


function TeamAdd() {
    const [inputs, setInputs] = useState({
        teamname: "",
        team_info: "",
        tag_color: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
    
    setInputs({
      ...inputs,
      [name]: value
      });
    console.log(inputs)
  }
  const handleSubmit = (e) => {
    const request = axios.post('/api/users/', {
      'username': inputs.username,
      'password': inputs.password,
      'password_check': inputs.password_check
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      alert(`양식이 잘못 되었습니다: ${error}`);
    });

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
        <input type="text" name="teamname" value={inputs.teamname} onChange={handleChange} />
      </label>
      <label>
        <input type="text" name="team_info" value={inputs.team_info} onChange={handleChange} />
      </label>
      <label>
        <button name="team_color" value={inputs.team_color} onChange={handleChange} />
      </label>
      <button className="modal-btn" type="submit">
        signup
      </button>
      <div>{inputs.username},{inputs.password}</div>
    </form>
  </div>
  )
}

export default TeamAdd;