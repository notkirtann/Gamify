import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import LandingView from '../Components/LandingView'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LandingFlex from '../Components/LandingFlex'
import { AppContext } from '../context/AppContext'
export default function Home() {
  const {login ,setLogin} = useContext(AppContext);
  const locate = useLocation();
  console.log(locate.pathname);
  useEffect(() => {
    const path = locate.pathname;
    if (path && path !== '/') {
      console.log(path)
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <div className='home'>
    <Navbar></Navbar>
    <LandingView height = "m"></LandingView>
    <LandingFlex></LandingFlex>
    </div>
  )
}
