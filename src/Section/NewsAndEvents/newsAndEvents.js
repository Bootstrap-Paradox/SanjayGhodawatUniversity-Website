import React from 'react';

import testImage from '../../Static/images/1.jpg';

export default function NewsAndEvents() {
    return (
        <>
            <section className="container-fluid section news-and-events">
                <section className='title'>
                    <h1>News + Events </h1>
                </section>

                <DisplayCard />
                <NewsPillCarousel />

            </section>
        </>
    )
}

const DisplayCard = ({ title = "Celebrating Teachers Day", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur in obcaecati veniam aspernatur. Sed, sequi voluptas recusandae maxime modi itaque ipsum sint mollitia ex suscipit praesentium eius necessitatibus optio. Voluptatibus, aliquid." }) => {
    return (
        <>
            <div className='display-card'>
                <section className="image">

                    <img src={testImage} alt="Some Image" />
                </section>
                <section className="textual">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button className='btn'>Know More</button>

                </section>
            </div>
        </>
    )
}

const NewsPillCarousel = () => {
    return (
        <div id="newsCarouselInterval" class="carousel carousel-dark slide news-pill-section" data-bs-ride="carousel">
            <div class="carousel-inner ">
                <div class="carousel-item active" data-bs-interval="10000">
                    <section className="news-pill-inner-section">

                        <NewsPill />
                        <NewsPill />
                        <NewsPill />
                    </section>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <section className="news-pill-inner-section">
                        <NewsPill />
                        <NewsPill />
                        <NewsPill />

                    </section>
                </div>
                <div class="carousel-item">
                    <section className="news-pill-inner-section">

                        <NewsPill />
                        <NewsPill />
                        <NewsPill />
                    </section>

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#newsCarouselInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#newsCarouselInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const NewsPill = ({ title = "Celebrating Teachers Day", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur in obcaecati veniam aspernatur. Sed, sequi voluptas recusandae maxime modi itaque ipsum sint mollitia ex suscipit praesentium eius necessitatibus optio. Voluptatibus, aliquid." }) => {
    return (
        <div className="news-pill">
            <section className="image">
                <img src={testImage} alt="Some Image" />
            </section>
            <section className="textual">
                <h5>{title}</h5>
                <p>{description}</p>
            </section>
        </div>
    )
}