import React from 'react'
import { Titles } from '../HomePage/HomePage'
import HorizontalCards from '../GenricComponents/HorizontalCards/HorizontalCards'
import HorizontalSmall from '../GenricComponents/HorizontalSmall/HorizontalSmall'
import Horizontalmedium from '../GenricComponents/HorizontalMedium/Horizontalmedium'
import AllAdes from '../GenricComponents/AllAdes'
import { contextApi } from '../../App'
import { useContext } from 'react'
import Navbar from '../NavBar/Navbar'

const Food = () => {
  const data = useContext(contextApi)
  return (
<>
<Navbar/>
<div className="BolyMain">
    <div className="bolyColm-one">
     <Titles title={'Food'}/>
     {data.map((item, index) => {
          if (item.cat === "Food" && index >= 52 && index <= 58) {
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
     {/* <HorizontalCards/> */}
    </div>
    <div className="bolyColm-two">
      <Titles title={'Top Posts'}/>
      {data.map((item, index) => {
          console.log();
          if (item.cat === "Food" && index >= 59 && index <= 63) {
            return (
              <>
                {
                  (index === 59)&& <Horizontalmedium cat={item.cat} image={item.image} index={index} title={item.heading}/>
                }
               { (index >= 60 && index <= 63)&&<HorizontalSmall
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
      <AllAdes/>
    </div>
  </div>
</>
  )
}

export default Food