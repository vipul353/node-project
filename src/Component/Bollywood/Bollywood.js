import React, {useState,useEffect } from "react";
import { Titles } from "../HomePage/HomePage";
import "./bolyStyle.css";
import HorizontalCards from "../GenricComponents/HorizontalCards/HorizontalCards";
import HorizontalSmall from "../GenricComponents/HorizontalSmall/HorizontalSmall";
import Horizontalmedium from "../GenricComponents/HorizontalMedium/Horizontalmedium";
import AllAdes from "../GenricComponents/AllAdes";
// import { contextApi } from "../../App";
import Navbar from "../NavBar/Navbar";
import axios from "axios";
import Loader from "../GenricComponents/Loader/Loader";

const Bollywood = () => {
  // const data = useContext(contextApi);
  const [bollywoodData,setBollywoodData]  = useState([])
  const [isdataLoaded,setIsDataloaded] = useState(false)
  useEffect(
    ()=>{
      axios.get('https://blog-backend-gnft.onrender.com/api/bollywood')
      .then((item)=>{

       if (item.status === 200) {
        setBollywoodData(item.data)
        setIsDataloaded(true)
       }
        //  console.log("this is the value====>",allData);
      }).catch((erorr)=>{
        console.log(erorr);
        setIsDataloaded(true)
      })

    },
    // eslint-disable-next-line
    []
  )

  return (
   <>
   <Navbar/>
     {
      isdataLoaded?<div className="BolyMain">
      <div className="bolyColm-one">
        <Titles title={"Bollywood"} />
        {bollywoodData.map((item, index) => {
          if (item.cat === "bollywood" && index >= 0 && index < 7) {
            return (
              <HorizontalCards
                key={index}
                index={item.id}
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
        {bollywoodData.map((item, index) => {
          console.log();
          if (item.cat === "bollywood" && index >= 7 && index < 12) {
            return (
              <>
                {
                  (index >= 7 && index < 8)&& <Horizontalmedium cat={item.cat} image={item.image} index={item.id} title={item.heading}/>
                }
               { (index >= 8 && index < 12)&&<HorizontalSmall
                  key={index}
                  title={item.heading}
                  index={item.id}
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
    </div>:<Loader/>
     }
   </>
  );
};

export default Bollywood;
