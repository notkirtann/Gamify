import React from 'react' 
import img from '../images/mainbg.jpg'
export default function LandingView(props) {
  return (
    <div className= {`main-page `}>
   <img src={img} alt="loading" className={`main-bg ${props.height ==="m"?"medium":"large"}`} />
    </div>
  )
}
