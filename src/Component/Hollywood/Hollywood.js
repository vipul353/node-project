import React from 'react'
import { Titles } from '../HomePage/HomePage'
import HorizontalCards from '../GenricComponents/HorizontalCards/HorizontalCards'
import HorizontalSmall from '../GenricComponents/HorizontalSmall/HorizontalSmall'
import Horizontalmedium from '../GenricComponents/HorizontalMedium/Horizontalmedium'
import AllAdes from '../GenricComponents/AllAdes'
import { contextApi } from '../../App'
import { useContext } from 'react'
import Navbar from '../NavBar/Navbar'
const Hollywood = () => {
  const data = useContext(contextApi)
  return (
<>
<Navbar/>
<div className="BolyMain">
    <div className="bolyColm-one">
     <Titles title={'Hollywood'}/>
     {data.map((item, index) => {
          if (item.cat === "hollywood" && index >= 12 && index <= 18) {
            return (
              <HorizontalCards
                key={index}
                index={index}
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
      {data.map((item, index) => {
          console.log();
          if (item.cat === "hollywood" && index >= 18 && index <= 23) {
            return (
              <>
                {
                  (index === 19)&& <Horizontalmedium cat={item.cat} image={item.image} index={index} title={item.Heading}/>
                }
               { (index >= 20 && index <= 23)&&<HorizontalSmall
                  key={index}
                  title={item.Heading}
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

export default Hollywood