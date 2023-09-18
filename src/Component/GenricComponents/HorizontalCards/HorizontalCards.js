import React from "react";
import "./HariStyle.css";
import { useNavigate } from "react-router-dom";
// import BlogDetails from "../../BlogDetails/BlogDetails";
// import sampleImg from "../../Assets/sample.jpg";
const HorizontalCards = ({ title, image, description, cat,index}) => {
   

  const navigate  = useNavigate();

  function getFirst17Words(sentence) {
    sentence = sentence.trim().replace(/\s+/g, ' ');
    const words = sentence.split(' ');
    const first17Words = words.slice(0, 17);
    const result = first17Words.join(' ');
    
    return result;
  }
  return (
    <div className="main-cards" onClick={()=>{navigate(`/blogdetails/${index}`)}}>
      <div className="hariMain">
        <div className="hari-rw">
          <img src={image} className="hari-image" alt="no data" />
          <div className="hari-clm">
            <span className="hari-txt">{title}</span>
            <span className="hari-sub">
              {console.log(description+"  "+index)}
              {`${getFirst17Words(description)}....load more`}
            </span>
            <div className="crd-rw">
              <span className="news-sub">{cat}</span>
              <span className="new-date">/ August 21 2017</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
