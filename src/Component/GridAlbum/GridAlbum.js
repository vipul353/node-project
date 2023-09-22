import React from 'react'
// import bgImage  from '../Assets/bg-image.jpg'
import './gridStyle.css';
// import smImage from '../Assets/sm-image.png';

const GridAlbum = () => {
  return (
    <div className='main-grd'>
        <div className='alb-rw'>
          <div className='bg-img'>
            {/* <span></span> */}
            <span className='box-text'>
            "Kashmir: A Land of Natural Beauty and Complex Geopolitical Issues - Explore Its Rich History."
            </span>
            {/* <img src={'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='no data'/> */}
          </div>
          <div className='vr-alb-cl'>
             <div className='sm-img'>
              <span className='box-text'>
              "Ganesh Chaturthi: Celebrating the Arrival of the Elephant-Headed God with Joy and Devotion."
              </span>
              {/* <img src={'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='no data'/> */}
             </div>
             <div className='sm-img-one'>
              <span className='box-text'>
              "Fresh Salad Delights: Discover a Medley of Flavors and Health Benefits on Your Plate."
              </span>
              {/* <img src={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='no data'/> */}
             </div>
          </div>
        </div>
    </div>
  )
}

export default GridAlbum