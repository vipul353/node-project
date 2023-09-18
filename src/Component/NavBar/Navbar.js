import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [isclicked, setIsclicked] = useState(false);
  return (
    <>
      <div className="mainNav">
        <div className="title-ham">
        <div className="title">
          <span className="title-the">THE</span>
          <span className="title-siren">Siren</span>
        </div>
        <div className={isclicked?"hide-block":"ham-clm"} onClick={()=>{setIsclicked(!isclicked)}}>
           <span className="ham-line"></span>
           <span className="ham-line"></span>
           <span className="ham-line"></span> 
        </div>
        <div className={isclicked?"cross":"hide-block"} onClick={()=>{setIsclicked(!isclicked)}}>
           +
        </div>
        </div>
      
        <div className={isclicked?"nv-link":"hide-flex"}>
          <Link to={'/'} className="span">Home</Link>
          <Link to={'/Bollywood'} className="span">Bollywood</Link>
          <Link to={'/Techonoly'} className="span">Technology</Link>
          <Link  to={'/Hollywood'} className="span">Hollywood</Link>
          <Link to={'/Fitness'} className="span">Fitness</Link>
          <Link to={'/Food'}  className="span">Food</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
