import React from 'react'

export default function LandingFlex() {
  return (
    <div className='flex landing-flex'>
      <div className="land-item">
        <h1 className='white'>Welcome</h1>
         <h3 className='white'>To The Gaming World </h3>
         <div className="white text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum reiciendis laboriosam exercitationem eaque, itaque rem veritatis ad officia? Deleniti culpa temporibus alias quas a, molestias voluptas blanditiis quos illo.</div>
         <div className="btn white">Explore Now</div>
      </div>
      <div className="land-item land-right">
       <img src={"https://img.freepik.com/free-vector/futuristic-reaper-logo_23-2149231548.jpg?w=740&t=st=1681303171~exp=1681303771~hmac=7bcab3ce0980d9cd83877e6036f8bd729649d7a0acaf641a8470110ccb1d536f"} alt="" />
      </div>
    </div>
  )
}
