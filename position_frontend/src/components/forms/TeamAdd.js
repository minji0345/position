import React, { useEffect, useState } from 'react'
import axios from 'axios'

//지정된 컬러값
const tagColors = ["#FF5702","#F20A01","#F5C7C8","#72A7FF","#BAC2E5","#438A70","#B3D8D6","#F39854"];

//컬러값을 가진 버튼 하나의 코드
const TagColor = ({ color, selected }) => {
    return (
        <button style={{ background: color}} className="team-tagcolor" onClick={selected}></button>
    )
}

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
      'teamname': inputs.teamname,
      'team_info': inputs.team_info,
      'tag_color': inputs.tag_color,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      alert(`양식이 잘못 되었습니다: ${error}`);
    });

    setInputs({
      teamname: "",
      team_info: "",
      tag_color: ""
    })
  }

  //colorlist 말고 다른 방식으로 구현 가능할까?
  const colorList = tagColors.map(
    (color) => (<TagColor 
        color={color} key={color}  onChange={handleChange} value={inputs.tag_color} name="tag_color"
        />)
    );

  return (
    <div className="modal-inner-box">
    <form onSubmit={handleSubmit}>
      <label>
        <input placeholder="team name" type="text" name="teamname" value={inputs.teamname} onChange={handleChange} />
      </label>
      <label>
        <input placeholder="tag color"  type="text" name="team_info" value={inputs.team_info} onChange={handleChange} />
      </label>
      <div className="team-tagcolor-list" >
                        {colorList}
      </div>
      <button className="modal-btn" type="submit">
        Add
      </button>
      <div>{inputs.teamname},{inputs.team_info}</div>
    </form>
  </div>
  )
}

export default TeamAdd;