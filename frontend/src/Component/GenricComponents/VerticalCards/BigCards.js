import React from "react";
import "./verticalStyle.css";
// import sampleImage from "../../Assets/sample.jpg";
import { useNavigate } from "react-router-dom";

const BigCards = ({title,image,description,cat,index}) => {
  const navigate = useNavigate();
  return (
    <div className="main-cards" onClick={()=>{navigate(`/blogdetails/${index}`)}}>
      <div className="main-ver-cards">
        <img src={image} className="crd-img" alt="no data" />
        <div className="crd-txt">
          <span className="crd-txt-heading">
            {title}
          </span>
          <span className="crd-txt-subtitle">
           {description}
          </span>
          <div className="crd-rw">
            <span className="news-sub">{cat}</span>
            <span className="new-date">/ August 21 2017</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCards;
