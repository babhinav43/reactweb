import React from 'react';
import web from '../src/Images/imgMain.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = () =>{

  return(
    <>
    <Common 
    name="Welcome to my portfolio, I am"
     imgsrc={web}
     visit="./artworks"
     btname ="Get Started"/>
    </>
  );
};
export default Home;