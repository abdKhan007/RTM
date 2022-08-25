// import React
import React, { useState, useEffect } from 'react'

// import Css
import './product.css'

// import Icons

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'

// import Images
import pro1 from '../../assets/images/product-img/pro-1.png'
import pro2 from '../../assets/images/product-img/pro-2.png'
import pro3 from '../../assets/images/product-img/pro-3.png'
import pro4 from '../../assets/images/product-img/pro-4.png'
import pro5 from '../../assets/images/product-img/pro-5.png'
import pro6 from '../../assets/images/product-img/pro-6.png'
import pro7 from '../../assets/images/product-img/pro7.png'
import pro8 from '../../assets/images/product-img/pro-8.png'
import pro9 from '../../assets/images/product-img/pro-9.svg'
import pro10 from '../../assets/images/product-img/pro-10.png'
import pro11 from '../../assets/images/product-img/pro-11.png'
import pro12 from '../../assets/images/product-img/pro-12.png'
import pro13 from '../../assets/images/product-img/pro-13.png'
import pro14 from '../../assets/images/product-img/pro-14.png'
import pro15 from '../../assets/images/product-img/pro-15.png'
import pro16 from '../../assets/images/product-img/pro-16.png'


// fake data
const data = [
    {
        id: 1,
        title: 'Терапия',
        uslug: '26 услуг',
        img: pro1
    },
    {
        id: 2,
        title: 'Хирургия',
        uslug: '26 услуг',
        img: pro2
    },
    {
        id: 3,
        title: 'Неврология',
        uslug: '26 услуг',
        img: pro3
    },
    {
        id: 4,
        title: 'Ортопедия',
        uslug: '26 услуг',
        img: pro4
    },
    {
        id: 5,
        title: 'Дерматология',
        uslug: '26 услуг',
        img: pro5
    },
    {
        id: 6,
        title: 'Офтальмология',
        uslug: '26 услуг',
        img: pro6
    },
    {
        id: 7,
        title: 'Кардиология',
        uslug: '26 услуг',
        img: pro7
    },
    {
        id: 8,
        title: 'Стоматология',
        uslug: '26 услуг',
        img: pro8
    },
    {
        id: 9,
        title: 'Визуальная диагностика',
        uslug: '26 услуг',
        img: pro9
    },
    {
        id: 10,
        title: 'Лаборатория',
        uslug: '26 услуг',
        img: pro10
    },
    {
        id: 11,
        title: 'Онкология',
        uslug: '26 услуг',
        img: pro11
    },
    {
        id: 12,
        title: 'Эндокринология',
        uslug: '26 услуг',
        img: pro12
    },
    {
        id: 13,
        title: 'Онкология',
        uslug: '26 услуг',
        img: pro13
    },
    {
        id: 14,
        title: 'Эндокринология',
        uslug: '26 услуг',
        img: pro14
    },
    {
        id: 15,
        title: 'Экзотические животные',
        uslug: '26 услуг',
        img: pro15
    },
    {
        id: 16,
        title: 'Аптека',
        uslug: '26 услуг',
        img: pro16
    }
]

const Product = () => {

    useEffect(() => {
        AOS.init();
    })

    const [ show, setShow ] = useState(1)

    const loadMore = () =>{
        setShow(show + 1)
    }

    const removeloadMore = () =>{
        setShow(show - 1)
    }

    const slice = data.slice(0, show)

  return (
    <div className='product-A'>
        <div className="container product-box">
            <div className="main-data-pro">
                {
                    data.map(product=>(
                        <div className="main-all-pro-map" key={product.id} data-aos="fade-right" data-aos-duration="3000">
                            <div className="left-all-pro">
                                <p className='firdt-pro'>{product.title}</p>
                                <p className='second-pro'>{product.uslug}</p>
                            </div>
                            <div className="right-all-pro">
                                <img src={product.img} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="main-data-pro-div">
                {
                    slice.map(product=>(
                        <div className="main-all-pro-map" key={product.id}>
                            <div className="left-all-pro">
                                <p className='firdt-pro'>{product.title}</p>
                                <p className='second-pro'>{product.uslug}</p>
                            </div>
                            <div className="right-all-pro">
                                <img src={product.img} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="container hello-di">
            <button onClick={loadMore} className='button-more'>Load more</button>
            <button to='/' onClick={removeloadMore} className='button-more remove'>Remove</button>
        </div>
    </div>
  )
}

export default Product
