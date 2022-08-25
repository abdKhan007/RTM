import React from 'react'
// import sytle css
import './map.css'

// map icon import
import { IoLocationSharp } from 'react-icons/io5'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'


// map image import
import img6 from '../../assets/images/map-img/map.png'


const Map = () => {
  return (

    // map
    <div className='map'>
      <div className="container">
        <div className="map-main">

            {/* map left */}
            <div className="map-left">
               <div className="map-kontakt">
                <h2>Контакты</h2>
                <h1 className='map-aybolit'>Айболит на Краснополянской</h1>
               </div>
               
               {/* map lokation */}
               <div className="map-location">
                <IoLocationSharp className='IoLocationSharp' /> 
                <p>
                   Дзержинский район, <br />
                   ул. Краснополянская, 30
                </p>
               </div>

               {/* map telefon number */}
               <div className="map-telefon-numb">
                <BsTelephoneFill className='BsTelephoneFill' />
                <h4>96 22 92</h4>
               </div>

               {/* map clock */}
               <div className="map-clock">
                <AiOutlineClockCircle className='AiOutlineClockCircle'/>
                <p>
                  Круглосуточно
                </p>
               </div>


               {/* map left bottom */}
               <div className="map-left-bottom">
                <div className="map-left-bottom-ayobit">
                    <h1 className='ayobit-2'>Айболит на Тулака</h1>
                </div>
             {/* map lokation */}
                 <div className="map-location">
                   <IoLocationSharp className='IoLocationSharp' /> 
                <p>
                   Советский район, <br /> 
                   ул. Карла Маркса, 7
                </p>
               </div>

               {/* map telefon number */}
               <div className="map-telefon-numb">
                <BsTelephoneFill className='BsTelephoneFill' />
                <h4>96 22 92</h4>
               </div>

               {/* map clock */}
               <div className="map-clock">
                <AiOutlineClockCircle className='AiOutlineClockCircle'/>
                <p>
                  Круглосуточно
                </p>
               </div>

               </div>
            </div>

            {/* map right */}
            <div className="map-right">
               <img src={img6} alt="" />
            </div>
        </div>
      </div>
    </div> 
  )
}

export default Map