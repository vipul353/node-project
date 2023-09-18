import React, { useContext } from "react";
import { Titles } from "../HomePage/HomePage";
import "./bolyStyle.css";
import HorizontalCards from "../GenricComponents/HorizontalCards/HorizontalCards";
import HorizontalSmall from "../GenricComponents/HorizontalSmall/HorizontalSmall";
import Horizontalmedium from "../GenricComponents/HorizontalMedium/Horizontalmedium";
import AllAdes from "../GenricComponents/AllAdes";
import { contextApi } from "../../App";
import Navbar from "../NavBar/Navbar";

const Bollywood = () => {
  const data = useContext(contextApi);

  return (
   <>
   <Navbar/>
   <div className="BolyMain">
      <div className="bolyColm-one">
        <Titles title={"Bollywood"} />
        {data.map((item, index) => {
          if (item.cat === "bollywood" && index >= 0 && index < 7) {
            return (
              <HorizontalCards
                key={index}
                index={index}
                title={item.heading}
                image={item.image}
                description={item.description}
                cat={item.cat}
                
              />
            );
          } else {
            return <></>;
          }
        })}
      </div>
      <div className="bolyColm-two">
        <Titles title={"Top Posts"} />
        {data.map((item, index) => {
          console.log();
          if (item.cat === "bollywood" && index >= 7 && index < 12) {
            return (
              <>
                {
                  (index >= 7 && index < 8)&& <Horizontalmedium cat={item.cat} image={item.image} index={index} title={item.heading}/>
                }
               { (index >= 8 && index < 12)&&<HorizontalSmall
                  key={index}
                  title={item.heading}
                  index={index}
                  image={item.image}
                  cat={item.cat}
                />}
              </>
            );
          } else {
            return <></>;
          }
        })}
        {/*
        <HorizontalSmall/>
        <HorizontalSmall/>
        <HorizontalSmall/>
        <HorizontalSmall/> */}
        <AllAdes />
      </div>
    </div>
   </>
  );
};

export default Bollywood;
