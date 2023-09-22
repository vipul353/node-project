import React, { useEffect,useState} from "react";
import { Titles } from "../HomePage/HomePage";
import HorizontalCards from "../GenricComponents/HorizontalCards/HorizontalCards";
import HorizontalSmall from "../GenricComponents/HorizontalSmall/HorizontalSmall";
import Horizontalmedium from "../GenricComponents/HorizontalMedium/Horizontalmedium";
import AllAdes from "../GenricComponents/AllAdes";
// import { useContext } from 'react'
// import { contextApi } from "../../App";
import Navbar from "../NavBar/Navbar";
import axios from "axios";

const Fittness = () => {
  // const data = useContext(contextApi);
  const [fittness,seFittness]  = useState([])
  useEffect(
    ()=>{
      axios.get('https://blog-backend-gnft.onrender.com/api/fitness')
      .then((item)=>{

        seFittness(item.data)
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
          <Titles title={"Fittness"} />
          {fittness.map((item, index) => {
            if (item.cat === "fitness" && item.id  >= 37 && item.id  <= 43) {
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
          {fittness.map((item, index) => {
            console.log();
            if (item.cat === "fitness" && item.id  >= 44 && item.id  <= 48) {
              return (
                <>
                  {item.id === 44 && (
                    <Horizontalmedium
                      cat={item.cat}
                      image={item.image}
                      index={item.id}
                      title={item.Heading}
                    />
                  )}
                  {item.id  >= 45 && item.id  <= 48 && (
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

export default Fittness;
