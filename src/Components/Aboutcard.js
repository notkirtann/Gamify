import React from 'react'

export default function Aboutcard(props) {
  return (

    <div className="about-card">
      <img src="https://img.freepik.com/free-vector/mysterious-gangster-character_23-2148473800.jpg?w=740&t=st=1681327001~exp=1681327601~hmac=0018f5a2c57d248a846523b39f46d6107fcfb602f6db650a65b7abce289cbf9f" alt="Aditya" />
      <div className="intro">
        <h1>{props.name}</h1>
        <p>{props.role}</p>
      </div>


    </div>
  )
}
