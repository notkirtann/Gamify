import React from 'react'

import { useNavigate } from 'react-router-dom'
export default function Card(props) {
  const navigate = useNavigate();
  return (
    <div className="about-card about feed-card" onClick={()=>{
      navigate(props.link)
    }}>
    <img src={props.src}  alt="Game icon" />
    <div className="intro game-intro">
      <h1>{props.name}</h1>
      <p>{props.role}</p>
    </div>


  </div>

  )
}
