import React from 'react'
import Navbar from '../Components/Navbar'
import LandingView from '../Components/LandingView'
import LandingFlex from '../Components/LandingFlex'
export default function Home() {
  return (
    <div className='home'>
    <Navbar></Navbar>
    <LandingView></LandingView>
    <LandingFlex></LandingFlex>
    </div>
  )
}
