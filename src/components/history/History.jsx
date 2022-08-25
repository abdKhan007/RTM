// import React
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Css
import "./histori.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Icons
import { BsChevronRight } from "react-icons/bs";


// import required modules
import { Autoplay } from "swiper";


// import Images
import car1 from "../../assets/images/carousel-img/car-1.png";
import car2 from "../../assets/images/carousel-img/car-2.png";
import car3 from "../../assets/images/carousel-img/car-3.png";

// import Link
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="histori">
      <div className="container histori-box">
        <div className="title-his">
          <div className="main-his-tit">
            <h1 className="title-hidt">История компании</h1>
            <p className="desc-his">
              История компании начинается 14 января 1999 года, <br /> когда было
              образовано ООО «Чижи». Идея пришла, т.к. у <br /> основателя
              компании Прозор Жанны Георгиевны была <br /> собака боксёр по
              кличке Бард…
            </p>
            <div className="links-his">
              <Link to="/">ЧИТАТЬ ДАЛЕЕ</Link>
              <i>
                <BsChevronRight />
              </i>
            </div>
          </div>
        </div>
        <div className="carousel-his">
          <div className="title-ccarousel-his">
            <h1 className="title-hidt">Наши специалисты</h1>
          </div>
          <>
            <Swiper
              slidesPerView={6}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={car2} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car3} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car2} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car1} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car1} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car1} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car2} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car3} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car2} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car1} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car1} alt="" className="images-car"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={car1} alt="" className="images-car"/>
              </SwiperSlide>
            </Swiper>
          </>
          <div className="links-his toper">
            <Link to="/">ПОСМОТРЕТЬ ВСЕХ</Link>
            <i>
              <BsChevronRight />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
