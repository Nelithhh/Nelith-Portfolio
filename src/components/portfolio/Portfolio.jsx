import React, { useRef, useState } from 'react';
import "./Portfolio.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Portfolio() {
  return (
    <section className="portfolio container section">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My projects</span>

        <Swiper 
            className="portfolio__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            }}
            modules={[Pagination]}
        >
            {Data.map(({ id, image, title, description }) => {
                return (
                    <SwiperSlide className="portfolio__card" key={id}>
                        <img src={image} alt="" className="portfolio__img" />

                        <h3 className="portfolio__name">{title}</h3>
                        <p className="portfolio__description">{description}</p>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  )
}

export default Portfolio
