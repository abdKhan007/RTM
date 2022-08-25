import React from 'react'
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// Css
import './hero.css'
// Img
import img1 from '../../../assets/images/hero_img/hero_img/img.png'
import img2 from '../../../assets/images/hero_img/hero_img/img1.png'
import img3 from '../../../assets/images/hero_img/hero_img/img2.png'
import img4 from '../../../assets/images/hero_img/hero_img/img3.png'
import img5 from '../../../assets/images/hero_img/hero_img/img4.png'
import img6 from '../../../assets/images/hero_img/hero_img/img5.png'

// react-router-dom
import { Link } from 'react-router-dom';
// Icon
import {AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {ImFacebook} from 'react-icons/im'
import {IoLogoVk} from 'react-icons/io'

const data = [
    {
        id: 1,
        name: 'Айболит круглосуточная ветклиника',
        btn: 'ЗАПИСАТЬСЯ',
        img: img1,
        nomer: '+7 (8442) 96 22 920'
    },
    {
        id: 2,
        name: 'Комфортные оборудованные стационары',
        btn: 'ЗАПИСАТЬСЯ',
        img: img2,
        nomer: '+7 (8442) 96 22 920'
    },
    {
        id: 3,
        name: 'Новейшее европейское оборудование',
        btn: 'ЗАПИСАТЬСЯ',
        img: img3,
        nomer: '+7 (8442) 96 22 920'
    },
    {
        id: 4,
        name: 'Собственная современная лаборатория',
        btn: 'ЗАПИСАТЬСЯ',
        img: img4,
        nomer: '+7 (8442) 96 22 920'
    },
    {
        id: 5,
        name: 'Аптека и зоомагазин по доступным ценам',
        btn: 'ЗАПИСАТЬСЯ',
        img: img5,
        nomer: '+7 (8442) 96 22 920'
    },
    {
        id: 6,
        name: 'Груминг салон и косметические товары',
        btn: 'ЗАПИСАТЬСЯ',
        img: img6,
        nomer: '+7 (8442) 96 22 920'
    }
]

const Hero = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero_main">
                <Swiper
                    direction={"vertical"}
                    pagination={pagination}
                    modules={[Pagination]}

                    className="Swipppper"
                >
                    {
                        data.map(item => (
                            <SwiperSlide key={item.id}>                            
                                <div className='my_swiper'>
                                    <div className="my_swiper_div">
                                        <div className="my_swiper_div_text">
                                            <p className="my_swiper_p">{item.name}</p>
                                            <Link to='' className='my_swiper_link1'>{item.btn}</Link>
                                        </div>
                                        <div className="my_swiper_div_img">
                                            <img src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="my_swiper_links">
                                        <Link to='/' className='my_swiper_link'><AiFillInstagram/></Link>
                                        <Link to='/' className='my_swiper_link'><ImFacebook/></Link>
                                        <Link to='/' className='my_swiper_link'><IoLogoVk/></Link>
                                        <Link to='/' className='my_swiper_link'><AiFillYoutube/></Link>
                                    </div>
                                    <p className='my_swiper_p1'>{item.nomer}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Hero