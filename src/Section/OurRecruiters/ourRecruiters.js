import React from "react";

import airtel from '../../Static/images/AIRTEL_logo.png';
import samsung from '../../Static/images/SAMSUNG_logo.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function OurRecruiters() {
    return (
        <>
            <section className="container-fluid section our-recruiters">
                <section className="title">
                    <h1>Our Recriuters</h1>
                </section>

                <section>
                    <CompanyCarousel />

                </section>


            </section>
        </>
    )
}

const CompanyCarousel = () => {

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
                <CompanyCard />
            </SwiperSlide>
            <SwiperSlide>
                <CompanyCard />
            </SwiperSlide>
            <SwiperSlide>
                <CompanyCard />
            </SwiperSlide>
        </Swiper>
    )

    // return (
    //     <div id="carouselCompanyIndicators" className="carousel carousel-custom carousel-dark slide our-recruiters" data-bs-ride="carousel">
    //         <div className="carousel-indicators">
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="12" aria-label="Slide 13"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="13" aria-label="Slide 14"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="14" aria-label="Slide 15"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="15" aria-label="Slide 16"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="16" aria-label="Slide 17"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="17" aria-label="Slide 18"></button>
    //             <button type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide-to="18" aria-label="Slide 19"></button>
    //         </div>
    //         <div className="carousel-inner">
    //             <div className="carousel-item active">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //             <div className="carousel-item">
    //                 <CompanyCard />
    //             </div>
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide="prev">
    //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Previous</span>
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselCompanyIndicators" data-bs-slide="next">
    //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Next</span>
    //         </button>
    //     </div>
    // )
}

const CompanyCard = () => {
    return (
        <div className="company-card">
            <img className="img-fluid" src={samsung} />
        </div>
    )
}