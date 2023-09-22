import React from "react";
import HorizontalCards from "../GenricComponents/HorizontalCards/HorizontalCards";
import HorizontalSmall from "../GenricComponents/HorizontalSmall/HorizontalSmall";
import Horizontalmedium from "../GenricComponents/HorizontalMedium/Horizontalmedium";
import { Titles } from "../HomePage/HomePage";
import AllAdes from "../GenricComponents/AllAdes";
import {useState,useEffect } from "react";
// import { contextApi } from "../../App";
import Navbar from "../NavBar/Navbar";
import axios from "axios";

const Technology = () => {
  // const data = useContext(contextApi);
  const [techno,setTechno]  = useState([])
  useEffect(
    ()=>{
      axios.get('https://blog-backend-gnft.onrender.com/api/technology')
      .then((item)=>{
         console.log(item.data);
        setTechno(item.data)
        //  console.log("this is the value====>",allData);
      }).catch((erorr)=>{
        console.log(erorr);
      })

    },
    // eslint-disable-next-line
    []
  )
  return (
    <>
      <Navbar />
      <div className="BolyMain">
        <div className="bolyColm-one">
          <Titles title={"Technology"} />
          {techno.map((item, index) => {
            if (item.cat === "technology" && item.id  >= 24 && item.id  <= 30) {
              return (
                <HorizontalCards
                  key={index}
                  index={item.id}
                  title={item.Heading}
                  image={item.image}
                  description={item.Description}
                  cat={item.cat}
                />
              );
            } else {
              return <></>;
            }
          })}
          {/* <HorizontalCards/> */}
        </div>
        <div className="bolyColm-two">
          <Titles title={"Top Posts"} />
          {techno.map((item, index) => {
            console.log();
            if (item.cat === "technology" && item.id >= 31 && item.id  <= 36) {
              return (
                <>
                  {item.id  === 31 && (
                    <Horizontalmedium
                      cat={item.cat}
                      image={item.image}
                      index={item.id}
                      title={item.Heading}
                    />
                  )}
                  {item.id  >= 32 && item.id  < 36 && (
                    <HorizontalSmall
                      key={index}
                      title={item.Heading}
                      index={item.id}
                      image={item.image}
                      cat={item.cat}
                    />
                  )}
                </>
              );
            } else {
              return <></>;
            }
          })}
          <AllAdes />
        </div>
      </div>
    </>
  );
};

export default Technology;
