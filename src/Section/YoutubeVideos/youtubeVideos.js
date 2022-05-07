import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function YoutubeVideos() {
    return (
        <>
            <section className="section youtube-videos">
                <section className="title">
                    <h1>
                        Videos
                    </h1>
                </section>

                <section>

                    <YoutubeVideosCarousel />
                </section>

            </section>
        </>
    )
}

const YoutubeVideosCarousel = () => {

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1700: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                // 1024: {
                //     slidesPerView: 3,
                //     spaceBetween: 50,
                // },
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
            <SwiperSlide>
                <YoutubeVideoComponent source='https://www.youtube.com/embed/z2yvgecWcPs' />
            </SwiperSlide>
            <SwiperSlide>
                <YoutubeVideoComponent source="https://www.youtube.com/embed/IxofAlA4lm0" />
            </SwiperSlide>
            <SwiperSlide>
                <YoutubeVideoComponent source="https://www.youtube.com/embed/37PX8zQN7go" />
            </SwiperSlide>
        </Swiper>
    )

    // return (

    //     <div id="carouselYoutubeVideosIndicators" className="carousel carousel-custom carousel-dark slide youtube-video-carousel" data-bs-ride="carousel">
    //         <div className="carousel-indicators">
    //             <button type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //             <button type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //             <button type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //         </div>
    //         <div className="carousel-inner">
    //             <div className="carousel-item active">
    //                 <YoutubeVideoComponent source='https://www.youtube.com/embed/z2yvgecWcPs' />
    //             </div>
    //             <div className="carousel-item ">
    //                 <YoutubeVideoComponent source="https://www.youtube.com/embed/IxofAlA4lm0" />

    //             </div>
    //             <div className="carousel-item ">
    //                 <YoutubeVideoComponent source="https://www.youtube.com/embed/37PX8zQN7go" />

    //             </div>
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide="prev">
    //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Previous</span>
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide="next">
    //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Next</span>
    //         </button>
    //     </div>
    // )
}

const YoutubeVideoComponent = ({ source = "https://www.youtube.com/embed/z2yvgecWcPs" }) => {
    return (
        <div className='video-component'>

            <iframe src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </div>


    )
}

const YoutubeVideoComponents = ({ source = "https://youtube.com/embed/5vJr5ZjWfjQ" }) => {
    return (
        <section className="video-components">
            <YoutubeVideoComponent />
            <YoutubeVideoComponent />
            <YoutubeVideoComponent />
        </section>
    )
}