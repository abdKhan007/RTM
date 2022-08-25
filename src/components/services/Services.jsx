// import React
import React, { useState, useEffect } from 'react'

// css
import './services.css'

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'

// import data img
import img from '../../assets/images/services-img/img.png'
import img1 from '../../assets/images/services-img/img1.png'
import img2 from '../../assets/images/services-img/img2.png'
import img3 from '../../assets/images/services-img/img3.png'
import img4 from '../../assets/images/services-img/img4.png'
import img5 from '../../assets/images/services-img/img5.png'
import img6 from '../../assets/images/services-img/img6.png'
import img7 from '../../assets/images/services-img/img7.png'

const Services = () => {

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
    <div className='services'>
        <div className="container">
            <div className="services_main">
                {/* txt */}
                <div className="services_main_txt">
                    <p className='services_main_txt_title d_flex'>Почему хозяева выбирают нас?</p>
                </div>
                {/* data map */}
                <div className="services_main_map">
                    {data.map(item => (
                        <div className="services_main_map_box" key={item.id} data-aos="flip-left" data-aos-duration="3000">
                            <div className="services_main_map_box_txt">
                                <p className='services_main_map_box_txt_title'>{item.title}</p>
                            </div>
                            <div className="services_main_map_box_img">
                                <img src={item.img} alt={item.title} />
                                <p className='services_main_map_box_img_desc'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                    {/* show more */}
                <div className="services_main_map_show">
                    {slice.map(item => (
                        <div className="services_main_map_box" key={item.id} data-aos="flip-left" data-aos-duration="3000">
                            <div className="services_main_map_box_txt">
                                <p className='services_main_map_box_txt_title'>{item.title}</p>
                            </div>
                            <div className="services_main_map_box_img">
                                <img src={item.img} alt={item.title} />
                                <p className='services_main_map_box_img_desc'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 {/* btn */}
                <div className="services_main_btns">
                    <button className='services_main_btn_btn' onClick={loadMore}>Load more</button>
                    <button className='services_main_btn_btn' onClick={removeloadMore}>Remove</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services

const data = [
    {
        id: 1,
        title: 'Работаем круглосуточно',
        desc: 'Мы готовы в любое время суток принять домашних питомцев и их хозяев',
        img: img,
    },
    {
        id: 2,
        title: 'Широкий спектр услуг',
        desc: 'Кроме широкопрофильных докторов  в клинике развиты узкие направления в ветеринарии – офтальмология, стоматология, дерматология, травматология, ортопедия и онкология',
        img: img1,
    },
    {
        id: 3,
        title: 'Большой опыт',
        desc: '30 высококвалифицированных врачей нашей клиники предоставляют ветеринарную помощь уже на протяжении 18 лет!',
        img: img2,
    },
    {
        id: 4,
        title: 'Собственная лаборатория',
        desc: 'Оборудованная профессиональным оснащением производства компании IDEXX International Inc.(США), которое позволяет получить результаты исследования прямо на приеме',
        img: img3,
    },
    {
        id: 5,
        title: 'Оснащенные стационары',
        desc: 'Обычный и инфекционный стационар с индивидуальным подогревом каждой клетки. Для питомцев в критическом состоянии предусмотрены кислородные камеры',
        img: img4,
    },
    {
        id: 6,
        title: 'Новейшее оборудование',
        desc: 'Помимо лабораторного оборудования и цифрового рентгена в клинике используется современный эндоскоп KARL STORZ',
        img: img5,
    },
    {
        id: 7,
        title: 'Запись на прием онлайн',
        desc: 'Запись на приём позволяет избежать ожиданий в очереди, но если вы не можете приехать - мы выезжаем на дом!',
        img: img4,
    },
    {
        id: 8,
        title: 'Аптека и зоомагазин',
        desc: 'Для удобства в клинике предусмотрен аптечный пункт, а также бутик с одеждой и косметическими средствами для ухода за домашними любимцами',
        img: img6,
    },
    {
        id: 9,
        title: 'Груминг-салон',
        desc: 'Отдельный кабинет для проведения гигиенческих и косметических процедур, таких как мытьё и сушка, стрижка или тримминг, уход за ушами, глазами и когтями и многое другое',
        img: img7,
    }
]