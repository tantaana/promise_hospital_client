import React, { useEffect } from 'react';
import { useState } from 'react';
// import './DocHome.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper';
import backImg from './doc_bg.jpg'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'

const DoctorHome = () => {


    return (

        <div className='swiper-body' style={{
            backgroundImage: `url(${backImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '20px 0px 20px 0px'
        }}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 4,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >



                <SwiperSlide>
                    <div className="swiper-picture">
                        <img src="https://i.ibb.co/4KhXjkP/dr-a-aruna-prasad-consultant-dermatologist-and-Cosmetologist.png" alt="" />
                    </div>
                    <div className="swiper-detail">
                        <h3>Dr. A Aruna Chowdhury</h3>
                        <span>Dermatology</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-picture">
                        <img src="https://i.ibb.co/hMZmnjF/dr-abdul-majeed-senior-consultant-in-internal-medicine-head-of-department-of-internal-medicine-facul.png" alt="" />
                    </div>
                    <div className="swiper-detail">
                        <h3>Dr. Abdul Majeed</h3>
                        <span>Internal Medicine</span>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-picture">
                        <img src="https://i.ibb.co/xFRKF76/dr-anand-n-s-consultant-general-and-bariatric-surgeon.png" alt="" />
                    </div>
                    <div className="swiper-detail">
                        <h3>Dr. Anand N S</h3>
                        <span>Bariatric Surgery</span>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-picture">
                        <img src="https://i.ibb.co/hskTXhm/dr-adarsh-k-s-consultant-diabetes-and-endocrinology.jpg" alt="" />
                    </div>
                    <div className="swiper-detail">
                        <h3>Dr. Azmain Iktedar</h3>
                        <span>Diabetes & Endocrinology</span>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>


    );
};

export default DoctorHome;