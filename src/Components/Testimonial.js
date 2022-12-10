import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Navigation } from "swiper";


import TestimonialItem from './Utilities/TestimonialItem';

export default function Testimonial() {
    return (
        <>
            <section className="section section-dark section-testimony" id="testimony">
                <div className="container">
                    <div className="section-head text-center">
                        <span>Kind Words</span>
                        <h2>testimonial</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                navigation={true}
                                loop={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide className='single-testimonials'>
                                    <TestimonialItem />
                                </SwiperSlide>
                                <SwiperSlide className='single-testimonials'>
                                    <TestimonialItem />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
