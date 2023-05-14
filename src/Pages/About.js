import React from 'react'
import Aboutcard from '../Components/Aboutcard' 
import img from '../images/lines.jpg'
export default function About() {
  return (
  
  <div className="about">
    <img src={img} alt=""  className='about-back'/>
    <div className="about-card-cont">
    <Aboutcard  name="Kirtan"  role ="The Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, arch" />
    <Aboutcard  name="Soamnath" role ="The Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, arch"/>
    <Aboutcard name="Aditya"  role ="The Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, arch" />
    <Aboutcard  name="Karan"  role ="The Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, arch"/>
    </div>
    <h1 className="about-head">Our Team</h1>
  </div>
   
  )
}
