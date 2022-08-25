import React from 'react'

// css
import './housemates.css'

// import img
import img from '../../assets/images/housemates-img/img.png'

const Housemates = () => {
  return (
    <div className='housemates'>
        <div className="container">
            {/* txt */}
            <div className="housemates_main">
                <div className="housemates_main_txt">
                    <p className='housemates_main_txt_p'>1 150 000</p>
                    <p className='housemates_main_txt_p1'>питомцам мы помогли за 18 лет работы</p>
                    {/* img */}
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Housemates