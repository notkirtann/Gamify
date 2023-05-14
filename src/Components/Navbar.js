import React, { useContext } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaCoins } from 'react-icons/fa'
import { AppContext } from '../context/AppContext'
import { useNavigate } from "react-router-dom"
export default function Navbar() {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    //white
    <nav>
      <div className={`nav-item logo white`}> Gamify</div>
      {<ul className="nav-menu">
        <li className={`nav-item  white`} onClick={() => {
          navigate("/about");
        }}>About</li>
        {!login && <li className={`nav-item white`}>Top Games</li>}
        {!login && <li className={`nav-item white`} onClick={()=>{
          navigate("/login")
        }}>Login</li>}
        {!login && <li className={`nav-item white`} onClick={()=>{
          navigate("/signup")
        }}>SignUp</li>}
        {login && <li className={`nav-item white`}><FaCoins color="#FFD700" size="1.8rem" /> <span className='white'>0</span></li>}
        {login && <li className={`nav-item white`}><CgProfile color={`white`} opacity={.8} size="1.8rem" /></li>}
      </ul>}
    </nav>
  )
}
