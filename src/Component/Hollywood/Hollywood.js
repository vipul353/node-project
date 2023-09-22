import React from 'react'
import { Titles } from '../HomePage/HomePage'
import HorizontalCards from '../GenricComponents/HorizontalCards/HorizontalCards'
import HorizontalSmall from '../GenricComponents/HorizontalSmall/HorizontalSmall'
import Horizontalmedium from '../GenricComponents/HorizontalMedium/Horizontalmedium'
import AllAdes from '../GenricComponents/AllAdes'
// import { contextApi } from '../../App'
import { useState,useEffect } from 'react'
import Navbar from '../NavBar/Navbar'
import axios from 'axios'

const Hollywood = () => {
  // const data = useContext(contextApi)
  const [hollywood,setHollywood]  = useState([])
  useEffect(
    ()=>{
      axios.get('https://blog-backend-gnft.onrender.com/api/hollywood')
      .then((item)=>{

        setHollywood(item.data)
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
<Navbar/>
<div className="BolyMain">
    <div className="bolyColm-one">
     <Titles title={'Hollywood'}/>
     {hollywood.map((item, index) => {
          if (item.cat === "hollywood" && item.id  >= 12 && item.id  <= 18) {
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
      <Titles title={'Top Posts'}/>
      {hollywood.map((item, index) => {
          console.log();
          if (item.cat === "hollywood" && item.id  >= 18 && item.id  <= 23) {
            return (
              <>
                {
                  (item.id  === 19)&& <Horizontalmedium cat={item.cat} image={item.image} index={item.id} title={item.Heading}/>
                }
               { (item.id  >= 20 && item.id  <= 23)&&<HorizontalSmall
                  key={index}
                  title={item.Heading}
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
      <AllAdes/>
    </div>
  </div>
</>
  )
}

export default Hollywood