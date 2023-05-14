import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; 
import { useContext } from 'react';
export default function Form(props) {
 const navigate = useNavigate();
 const { login, setLogin } = useContext(AppContext);
 return (
  <div className='form'>
   <CgProfile size="3rem" className='form-icon' />
   <input type="text" placeholder='Enter Your UserName : ' />
   <input type="email" placeholder='Enter Your Email : ' />
   <input type="password" placeholder='Enter Your  Password : ' />
   {props.signup && <input type="text" placeholder='Re-Enter the Password : ' />}
   <div className="form-btn" onClick={()=>{
    setLogin(true);
    navigate("/feed");
   }}>LoG IN </div>
   <div className="form-btn">{`${props.signup? "Sign In":"Create a new Acoount"}`}</div>
   <div className="form-btn"></div>
  </div>
 )
}
