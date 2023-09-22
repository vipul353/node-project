import React from "react";
import { Titles } from "../HomePage/HomePage";
import HorizontalCards from "../GenricComponents/HorizontalCards/HorizontalCards";
import HorizontalSmall from "../GenricComponents/HorizontalSmall/HorizontalSmall";
import Horizontalmedium from "../GenricComponents/HorizontalMedium/Horizontalmedium";
import AllAdes from "../GenricComponents/AllAdes";
// import { contextApi } from "../../App";
import { useEffect,useState } from "react";
import Navbar from "../NavBar/Navbar";
import axios from "axios";

const Food = () => {
  // const data = useContext(contextApi);
  const [food,setFood]  = useState([])
  useEffect(
    ()=>{
      axios.get('https://blog-backend-gnft.onrender.com/api/food')
      .then((item)=>{

        setFood(item.data)
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
          <Titles title={"Food"} />
          {food.map((item, index) => {
            if (item.cat === "Food" && item.id  >= 52 && item.id  <= 58) {
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
          {/* <HorizontalCards/> */}
        </div>
        <div className="bolyColm-two">
          <Titles title={"Top Posts"} />
          {food.map((item, index) => {
            console.log();
            if (item.cat === "Food" && item.id  >= 59 && item.id  <= 63) {
              return (
                <>
                  {item.id === 59 && (
                    <Horizontalmedium
                      cat={item.cat}
                      image={item.image}
                      index={item.id}
                      title={item.heading}
                    />
                  )}
                  {item.id  >= 60 && item.id  <= 63 && (
                    <HorizontalSmall
                      key={index}
                      title={item.heading}
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

export default Food;
