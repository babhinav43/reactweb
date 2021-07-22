import React from 'react';
import { NavLink } from 'react-router-dom';
import Sdata from './Sdata';
import img1 from "./Images/img1.jpg"
import img2 from "./Images/img2.jpg"
const Works=(props)=>{
  return(
<>
<div className="my-5">
<h1 className="text-center"> My Artworks</h1>
</div>
<div className="container-fluid mb-5">
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img src={props.imgsrc} className="w-100 shadow-1-strong rounded mb-4" alt />
   </div>
</div>
</div>
</>

  )
}
{/* Gallery */}
export default Works;