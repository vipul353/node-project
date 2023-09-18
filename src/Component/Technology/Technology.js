import React from 'react'
import HorizontalCards from '../GenricComponents/HorizontalCards/HorizontalCards'
import HorizontalSmall from '../GenricComponents/HorizontalSmall/HorizontalSmall'
import Horizontalmedium from '../GenricComponents/HorizontalMedium/Horizontalmedium'
import { Titles } from '../HomePage/HomePage'
import AllAdes from '../GenricComponents/AllAdes'
import { useContext } from 'react'
import { contextApi } from '../../App'
import Navbar from '../NavBar/Navbar'

const Technology = () => {
  const data = useContext(contextApi)
  return (
<>
<Navbar/>
<div className="BolyMain">
    <div className="bolyColm-one">
     <Titles title={'Technology'}/>
     {data.map((item, index) => {
          if (item.cat === "technology" && index >= 24 && index <= 30) {
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
          if (item.cat === "technology" && index >= 31 && index <= 36) {
            return (
              <>
                {
                  (index === 31)&& <Horizontalmedium cat={item.cat} image={item.image} index={index} title={item.Heading}/>
                }
               { (index >= 32 && index < 36)&&<HorizontalSmall
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

export default Technology