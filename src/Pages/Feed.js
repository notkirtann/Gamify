import React, { useContext, useEffect } from "react";
import FeedCont from "../Components/FeedCont";
import Navbar from "../Components/Navbar";
import LandingView from "../Components/LandingView";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// let path = '../Games/Snake Game in JavaScript/index.html'
export default function Feed() {
  const { login, setLogin } = useContext(AppContext);

  const locate = useLocation();
  console.log(locate.pathname);
  useEffect(() => {
    const path = locate.pathname;
    if (path) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <div className="feed">
      <Navbar></Navbar>
      <LandingView height="l"></LandingView>
      <FeedCont />
    </div>
  );
}
