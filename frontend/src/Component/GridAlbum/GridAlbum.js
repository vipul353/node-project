import React from 'react'
// import bgImage  from '../Assets/bg-image.jpg'
import './gridStyle.css';
// import smImage from '../Assets/sm-image.png';

const GridAlbum = () => {
  return (
    <div className='main-grd'>
        <div className='alb-rw'>
          <div className='bg-img'>
            <img src={'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='no data'/>
          </div>
          <div className='vr-alb-cl'>
             <div className='sm-img'>
              <img src={'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='no data'/>
             </div>
             <div className='sm-img'>
              <img src={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='no data'/>
             </div>
          </div>
        </div>
    </div>
  )
}

export default GridAlbum