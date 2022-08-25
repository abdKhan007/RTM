import React from 'react'

// import image
import img from '../../assets/images/footer-img/footer-img/logo.png'
import img2 from '../../assets/images/footer-img/footer-img/geogle.png'
import img3 from '../../assets/images/footer-img/footer-img/appstore.png'
import img4 from '../../assets/images/footer-img/footer-img/like.png'

//import style

import './footer.css'

//import Link

import { Link } from 'react-router-dom'

//import icons
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { IoLogoVk } from 'react-icons/io'





const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <div className="footer-top-logo">
                            <div className="footer-top-logo-img">
                                <img src={img} alt="" />
                            </div>
                            <div className="footer-top-logo-text">
                                <h1>Айболит</h1>
                                <p>ветеринарная клиника</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-links-image">
                            <Link to='/' ><img src={img2} alt="" /> </Link>
                            <Link to='/' ><img src={img3} alt="" /></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="footer-middle-texts">
                        <div className="footer-middle-text1">
                            <Link to='/' className='footer-middle-link' >Политика <br /> конфиденциальности в <br /> отношении обработки <br /> персональных данных</Link>
                        </div>
                        <div className="footer-middle-text2">
                            <Link to='/' className='footer-middle-link2'>Главная <br />
                                Услуги и цены <br />
                                История компании <br />
                                Наши специалисты <br />
                                Вакансии <br />
                                Реквизиты <br />
                                Онлайн-оплата</Link>
                        </div>
                        <div className="footer-middle-text3">
                            <Link to='/' className='footer-middle-link2' > Отзывы <br />
                                Контакты <br />
                                Груминг-салон <br />
                                Косметика <br />
                                Новости и акции <br />
                                Блог</Link>
                        </div>
                        <div className="main-route">
                            <div className="footer-middle-media-links">
                                <Link to='https://www.instagram.com/' className='footer-media-icons1' ><BsInstagram /></Link>
                                <Link to='https://facebook.com/' className='footer-media-icons2' ><ImFacebook /></Link>
                                <Link to='https://vk.com/' className='footer-media-icons3' ><IoLogoVk /></Link>
                                <Link to='https://www.youtube.com/' className='footer-media-icons4' ><BsYoutube /></Link>
                            </div>
                            <div className="mail-link">
                               <Link className='gmail-link-style' to='https://mail.google.com/'>aibolit34.ru <br /></Link> 
                               <Link className='gmail-link-style' to='https://mail.google.com/'>      aibolit34@gmail.com</Link> 
                               <div className="like">

                                <p>Made with <img src={img4} alt="" /> from Intellect</p>
                               </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>  
        </div>
    )
}

export default Footer