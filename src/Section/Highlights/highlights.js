import React from 'react';

import image1 from '../../Static/images/1.jpg';

export default function Highlights() {
    return (
        <section className="section highlight-section">
            <section className="title">
                <h1>SGU Highlights</h1>
            </section>

            <HighlightCarousel />
        </section>
    )
}

const HighlightCarousel = () => {
    return (
        <div id="carouselHighlightIndicators" className="carousel carousel-custom carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselHighlightIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselHighlightIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselHighlightIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <HighlightBlock />
                </div>
                <div className="carousel-item">
                    <HighlightBlock />

                </div>
                <div className="carousel-item">
                    <HighlightBlock />

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHighlightIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselHighlightIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const HighlightBlockLarge = ({ title = "Bollywood Megastar Sara Ali Khan Visit", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus dignissimos adipisci, delectus quis quibusdam, numquam porro error corrupti esse sunt ullam maiores ea alias! Mollitia aspernatur quasi provident praesentium, non hic!" }) => {
    return (
        <div className='highlight-block-large'>
            <img src={image1} alt="Image of Sgu Campus" />
            <div className='textual'>
                <h3 className='title'>{title}</h3>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}

const HighlightBlock = ({ title = "Bollywood Megastar Sara Ali Khan Visit", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus dignissimos adipisci, delectus quis quibusdam, numquam porro error corrupti esse sunt ullam maiores ea alias! Mollitia aspernatur quasi provident praesentium, non hic!" }) => {

    return (
        <div className="highlight-block">
            <img src={image1} alt="Image of Sgu Campus" />
            <div className='textual'>
                <h3 className='title'>{title}</h3>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}