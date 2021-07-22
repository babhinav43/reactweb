import React,{useState} from "react";
import './index.css'
import CloseIcon from '@material-ui/icons/Close';
import img1 from "../src/Images/img1.jpg";
import img2 from "../src/Images/img2.jpg";
import img3 from "../src/Images/img3.jpg";
import img4 from "../src/Images/img4.jpg";
import img5 from "../src/Images/img5.jpg";
import img6 from "../src/Images/img6.jpg";
import img7 from "../src/Images/img7.jpg";
import img8 from "../src/Images/img8.jpg";
import img9 from "../src/Images/img9.jpg";
import img10 from "../src/Images/img10.jpg";

const Artworks=()=>{
    let data=[


{   id:1,
    imgsrc: img1,
},
{   id:2,
    imgsrc: img2,
},
{   id:3,
    imgsrc: img3,
},
{   id:4,
    imgsrc: img4,
},
{   id:5,
    imgsrc: img5,
},
{   id:6,
    imgsrc: img6,
},
{   id:7,
    imgsrc: img7,
},
{   id:8,
    imgsrc: img8,
},
{   id:9,
    imgsrc: img9,
},
{   id:10,
    imgsrc: img10,
}

]

const [model,setModel] =useState(false);
const [tempimgSrc, setTempImgSrc]= useState('');
const getImg =(imgsrc)=>{
    setTempImgSrc(imgsrc);
    setModel(true);
}
return(
    <>
    <div>
      <h1 className="my-5 text-center">Art Gallery</h1>
    </div>
    <div className={model?"model open":"model"}>
        <img src ={tempimgSrc}/>
        <CloseIcon onClick={()=> setModel(false)}/>
    </div>
    <div className="gallery">
    {
        data.map((item, index)=>{
            return(
                    <div className="pics" key={index} onClick={()=> getImg(item.imgsrc)}>
                        <img src ={item.imgsrc} style={{width:'100%'}}/>
                    </div>


            )
        })
    }

    </div>
</>
)
}
export default Artworks;