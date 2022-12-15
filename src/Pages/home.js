import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Highlights from '../Section/Highlights/highlights';
import LandingCarousel from '../Section/LandingCarousel/landingCarousel';
import Leadership from '../Section/Leadership/leadership';
import NewsAndEvents from '../Section/NewsAndEvents/newsAndEvents';
import OurRecruiters from '../Section/OurRecruiters/ourRecruiters';
import WhySgu from '../Section/WhySgu/whySgu';
import YoutubeVideos from '../Section/YoutubeVideos/youtubeVideos';
import '../Static/css/Styles.css'
import ExperienceEducation from '../Section/ExperienceEducation/experienceEducation';





export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <>

            <section style={{
                overflow: "hidden"
            }}>

                <LandingCarousel />
                <WhySgu />
                <ExperienceEducation />
                <NewsAndEvents />
                <Highlights />
                {/* <YoutubeVideos /> */}
                <OurRecruiters />
                <Leadership />
            </section>
        </>
    )
}

const NewSlider = () => {



    return (
        <Swiper
            // slidesPerView={3}
            // spaceBetween={30}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    )
}