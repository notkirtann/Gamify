import React from 'react'
import Form from '../Components/Form'
let src = "https://img.freepik.com/premium-photo/social-network-connections-concept-network-people-icons-with-connecting-lines_34629-703.jpg?w=740";
export default function Login() {
  return (
    <div>
      {/* e ntry point system */}
      <div className="flex entry">
       <img src={src} alt="" className='enrty-bg' />
       <div className="entry-item"> 
      <Form signup={false}/>
       </div>
     
      </div>
      
    </div>
  )
}
