import React from 'react';
import Common from './Common';
import web1 from '../src/Images/float.png';
const About = () =>{

  return(
    <>
    <Common 
    name={<h2 className="justify-content">Hello! I am Abhinav Bhardwaj. A student with keen intrest in Art and Technology. Feel free to take references and enjoy your visit.
    <br/>
    <br/>
    Regards
    </h2>}
     imgsrc={web1}
     visit="./contact"
     btname ="Contact Now"/>
    </>
  );
};
export default About;