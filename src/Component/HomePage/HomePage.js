import React, { useEffect, useState } from "react";
import "./Home.css";
// import GridAlbum from "../GridAlbum/GridAlbum";
import BigCards from "../GenricComponents/VerticalCards/BigCards";
import HorizontalCards from "../GenricComponents/HorizontalCards/HorizontalCards";
import HorizontalSmall from "../GenricComponents/HorizontalSmall/HorizontalSmall";
import bgImage from "../Assets/bg-image.jpg";
import "../GridAlbum/gridStyle.css";
// import { contextApi } from "../../App";
import Navbar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../GenricComponents/Loader/Loader";

export const Titles = ({ title }) => {
  return (
    <>
      <span className="sveral-title">{title}</span>
    </>
  );
};

const LastBoxes = ({ index, isBorder, title, desc, cat }) => {
  const navigate = useNavigate("");
  return (
    <>
      <div
        className="last-boxes"
        onClick={() => {
          navigate(`/blogdetails/${index}`);
        }}
        style={
          isBorder
            ? { borderInline: "3px solid #F0F0F0" }
            : { borderInline: "none" }
        }
      >
        <span className="last-boxes-title">
          {title}
          {/* Catch waves with an adventure guide */}
        </span>
        <span className="last-boxes-sub">
          {desc}
          Gujarat is a hidden gem with temples, palaces, and rich culture. Its
          tourist potential deserves wider recognition
        </span>
        <div className="crd-rw">
          <span className="news-sub">{cat}</span>
          <span className="new-date">/ August 21 2017</span>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
  // const data = useContext(contextApi)
  const navigate = useNavigate("");
  const [allData, setAllData] = useState([]);
  const [isDataloaded, setIsDataloaded] = useState(false);
  useEffect(
    () => {
      axios
        .get("https://blog-backend-gnft.onrender.com/api/allData")
        .then((item) => {
          if (item.status === 200) {
            setAllData(item.data);
            setIsDataloaded(true);
            console.log("this is the value====>", allData);
          }
        })
        .catch((erorr) => {
          console.log(erorr);
        });
    },
    // eslint-disable-next-line
    []
  );

  // console.log(data);
  return (
    <>
      <Navbar />
      {isDataloaded ? (
        <div>
          <div className="main-grd">
            <div className="alb-rw">
              {allData.map((item,index) => {
                if (item.id === 64) {
                  return (
                    <>
                      <div className="bg-img" onClick={()=>{navigate(`/blogdetails/${index}`)}}>
                        <span className="box-text">
                          "Kashmir: A Land of Natural Beauty and Complex
                          Geopolitical Issues - Explore Its Rich History."
                        </span>
                      </div>
                    </>
                  );
                } else {
                  return <></>;
                }
              })}
              <div className="vr-alb-cl">
                {allData.map((item,index) => {
                  if (item.id === 65 || item.id === 66) {
                    return (
                      <>
                        <div
                          className="sm-img"
                          style={{ backgroundImage: `url(${item.image})` }}
                          onClick={()=>{navigate(`/blogdetails/${index}`)}}
                        >
                          <span className="box-text">{item.heading}</span>
                        </div>
                      </>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </div>
            </div>
          </div>
          <div className="HomeMain">
            <Titles title={"The Latest"} />
            <div className="home-row">
              {allData.map((item, index) => {
                if (item.cat === "Latest") {
                  return (
                    <>
                      <BigCards
                        key={index}
                        index={item.id}
                        title={item.heading}
                        image={item.image}
                        description={item.description}
                        cat={item.cat}
                      />
                    </>
                  );
                } else return <></>;
              })}
            </div>
            <Titles title={"Latest Articles"} />
            <div className="home-clm-main">
              <div className="home-row">
                <div className="home-clm-main">
                  {allData.map((item, index) => {
                    if (item.cat === "technology" && index > 24 && index < 29) {
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

                  <div className="home-bg-img">
                    <img src={bgImage} alt="no data" />
                  </div>
                </div>
                <div className="home-clm-width">
                  <div className="ads">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXz2SENaXMYUf3Ru2X76ufRjx3G9BI_Bj5sA&usqp=CAU"
                      alt="no data"
                    />
                  </div>
                  {allData.map((item, index) => {
                    // console.log();
                    if (item.cat === "Food" && index > 52 && index < 57) {
                      return (
                        <HorizontalSmall
                          key={index}
                          title={item.heading}
                          index={item.id}
                          image={item.image}
                          cat={item.cat}
                        />
                      );
                    } else {
                      return <></>;
                    }
                  })}
                   
                  {/* <HorizontalSmall />
                <HorizontalSmall />
                <HorizontalSmall /> */}
               
                </div>
              </div>
            </div>
            <Titles title={"Latest Stories"} />
            <div className="last-box">
              {allData.map((item, index) => {
                // console.log();
                if (item.cat === "bollywood" && index >= 0 && index <= 2) {
                  return (
                    <>
                      {
                        <LastBoxes
                          index={item.id}
                          isBorder={true}
                          cat={item.cat}
                          desc={item.description}
                          title={item.heading}
                        />
                      }
                    </>
                  );
                } else {
                  return <></>;
                }
              })}
              {/* <LastBoxes />
           
            <LastBoxes /> */}
            </div>
            <div className="ads-mobile">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXz2SENaXMYUf3Ru2X76ufRjx3G9BI_Bj5sA&usqp=CAU"
                      alt="no data"
                    />
                  </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
