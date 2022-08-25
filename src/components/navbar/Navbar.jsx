import React, { useState } from 'react'
// Css
import './navbar.css'
// react-router-dom
import { Link } from 'react-router-dom'
// Img
import img from '../../assets/images/navbar_img/navbar_img/img.png'
// Icons
import {AiOutlineMenuUnfold, AiOutlineClose} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'


const Navbar = () => {

    const [color, setColor] = useState(false) 
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)

    const [nav, setNav] = useState();
    const handleNav = () => setNav(!nav)
  return (
    <div className={color ? 'navbar navbar_active' : 'navbar'}>
        <div className="container">
            <div className="navbar_main">
                <div className="navbar_main_img">
                    <img src={img} alt="" />
                </div>
                <div className={nav ? 'navbar_main_links navactive' : 'navbar_main_links'}>
                    <Link to='/' className='navbar_main_link'>ЛИЧНЫЙ КАБИНЕТ</Link>
                    <Link to='/' className='navbar_main_link'>О НАС</Link>
                    <Link to='/' className='navbar_main_link'>НОВОСТИ И АКЦИИ</Link>
                    <Link to='/' className='navbar_main_link'>КОНТАКТЫ</Link>
                    <Link to='/' className='navbar_main_link'>БЛОГ</Link>
                </div>
                <div className='navbar_main_map'>
                    <Link to='/' className='navbar_main_map_link'>
                        <FaMapMarkerAlt className='navbar_main_map_link_icon'/>
                        <span className='navbar_main_map_link_img'>ВОЛГОГРАД</span>
                    </Link>
                    <div className="navbar_main_bar" onClick={handleNav}>
                        {
                            !nav ? <AiOutlineMenuUnfold/> : <AiOutlineClose/>
                        }         
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar