import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselLeft from './CarouselLeft/CarouselLeft'
import CarouselRight from './CarouselRight/CarouselRight'

const Controls = ({data}) => {
    let swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper 
            initialSlide={0} 
            modules={[Navigation]} 
            slidesPerView={4} 
            spaceBetween={40} 
            allowTouchMove
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }}
        >
            <Controls data={data} />
            <CarouselLeft />
            <CarouselRight />
            {data.map((item, index) => (
                <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel