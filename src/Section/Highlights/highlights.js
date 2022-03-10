import React from 'react';

import image1 from '../../Static/images/1.jpg';
import highlightData from './highlightData';


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

    const highlightDataFor2 = highlightData;

    return (
        <div id="carouselHighlightIndicators" className="carousel carousel-custom carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {highlightData.map((data, index) => {
                    return (
                        <button key={index} type="button" data-bs-target="#carouselHighlightIndicators" data-bs-slide-to={`${index}`} className={`${index === 0 ? "active" : ""}`} aria-current={`${index === 0 ? "true" : ""}`} aria-label={`Slide ${index + 1}`}></button>

                    )
                })}

            </div>
            <div className="carousel-inner">
                {highlightData.map((data, index) => {
                    return (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} >
                            <HighlightBlock title={data.title} url={data.url} image={data.image} />
                        </div>
                    )
                })}
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

const HighlightBlock = ({ title = "Bollywood Megastar Sara Ali Khan Visit", url = "", image = { image1 }, description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus dignissimos adipisci, delectus quis quibusdam, numquam porro error corrupti esse sunt ullam maiores ea alias! Mollitia aspernatur quasi provident praesentium, non hic!" }) => {

    return (
        <div onClick={() => {
            window.location.href = url
        }} className="highlight-block">
            <img src={image} alt="Image of Sgu Campus" />
            <div className='textual'>
                <h3 className='title'>{title}</h3>
            </div>
        </div>
    )
}