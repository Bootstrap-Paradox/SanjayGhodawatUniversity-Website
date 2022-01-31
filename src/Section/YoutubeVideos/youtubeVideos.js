import React from 'react';

export default function YoutubeVideos() {
    return (
        <>
            <section className="section youtube-videos">
                <section className="title">
                    <h1>
                        Videos
                    </h1>
                </section>

                <YoutubeVideosCarousel />

            </section>
        </>
    )
}

const YoutubeVideosCarousel = () => {
    return (
        <div id="carouselYoutubeVideosIndicators" class="carousel carousel-dark slide youtube-video-carousel" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <YoutubeVideoComponent />
                </div>
                <div class="carousel-item">
                    <YoutubeVideoComponent />

                </div>
                <div class="carousel-item">
                    <YoutubeVideoComponent />

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselYoutubeVideosIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const YoutubeVideoComponent = ({ source = "https://youtube.com/embed/5vJr5ZjWfjQ" }) => {
    return (
        <div className='video-component'>

            <iframe className="" src={source}>
            </iframe>
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