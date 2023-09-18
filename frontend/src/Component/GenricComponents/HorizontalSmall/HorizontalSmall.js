import React from "react";
import "./HoriSmall.css";
import { useNavigate } from "react-router-dom";
// import SampleImg from "../../Assets/sample.jpg";

const HorizontalSmall = ( {image,title,cat,index}) => {
  function getFirst17Words(sentence) {
    sentence = sentence.trim().replace(/\s+/g, ' ');
    const words = sentence.split(' ');
    const first17Words = words.slice(0, 4);
    const result = first17Words.join(' ');
    
    return result;
  }

  const number=(index)=>{
   let n = index%30
   return n;
  }

  const navigate = useNavigate()
  return (
    <div className="hori-small" onClick={()=>{navigate(`/blogdetails/${index}`)}}>
      <div className="hori-rw">
        <img src={image} alt="no data"  className="hori-img"/>
        <div className="hori-clm">
          <span className="hori-txt">{getFirst17Words(title)}</span>
          <div className="crd-rw">
            <span className="news-sub">{cat}</span>
            <span className="new-date">/ August 21 2017</span>
          </div>
        </div>
       <div className="nm-clm">
       <span className="number">
          {number(index)}
        </span>
       </div>
      </div>
    </div>
  );
};

export default HorizontalSmall;
