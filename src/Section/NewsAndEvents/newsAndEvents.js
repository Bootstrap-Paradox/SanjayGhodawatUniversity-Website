import React, { useReducer, useContext, createContext, useState } from 'react';

import testImage from '../../Static/images/1.jpg';
import NewsAndEventsReducer from './NewsAndEventsReducer';
import image1 from '../../Static/images/1.jpg';
import team from '../../Static/images/team1.jpg';
import newsData from './newsData';


const NewsAndEventsContext = createContext();

export default function NewsAndEvents() {

    const newsData = [
        {
            title: "Testing This Yanky Feature",
            description: "lorem",
            image: image1,
        },
        {
            title: "Testing This Very Yanky Feature",
            description: "lorem",
            image: image1,
        },
        {
            title: "Testing This Very Very Yanky Feature",
            description: "lorem",
            image: team,
        },
    ]


    const initialState = {
        "active_news": {
            title: newsData[0].title,
            description: newsData[0].description,
            image: newsData[0].image,
        }
    }

    const [newsState, newsDispatch] = useReducer(NewsAndEventsReducer, initialState)




    return (
        <section className="container-fluid section news-and-events">
            <section className='title'>
                <h1>News + Events </h1>
            </section>

            <NewsCarousel />


            {/* <DisplayCard /> */}
            {/* <NewsPillCarousel newsData={newsData} /> */}

        </section>
    )
}

const NewsCarousel = () => {
    return (
        <div id="carouselNewsIndicators" className="carousel carousel-custom carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {newsData.map((data, index) => {
                    return (
                        <button key={index} type="button" data-bs-target="#carouselNewsIndicators" data-bs-slide-to={`${index}`} className={`${index === 0 ? "active" : ""}`} aria-current={`${index === 0 ? "true" : ""}`} aria-label={`Slide ${index + 1}`}></button>

                    )
                })}
            </div>
            <div className="carousel-inner">
                {newsData.map((data, index) => {
                    return (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} >
                            <DisplayCard title={data.title} description={data.description} image={data.image} url={data.url} />
                        </div>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselNewsIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselNewsIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const DisplayCard = ({ title = "Celebrating Teachers Day", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur in obcaecati veniam aspernatur. Sed, sequi voluptas recusandae maxime modi itaque ipsum sint mollitia ex suscipit praesentium eius necessitatibus optio. Voluptatibus, aliquid.", image = "", url = "" }) => {

    // const { newsState, newsDispatch } = useContext(NewsAndEventsContext);
    return (
        <>
            <div className='display-card'>
                <section className="image">
                    <img src={image} alt="Some Image" />
                </section>

                <section className="textual">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button onClick={() => {
                        window.location.href = url
                    }} className='btn'>Know More</button>

                </section>
            </div>
        </>
    )
}


const NewsPillCarousel = ({ newsData = [] }) => {


    return (
        <div id="newsCarouselInterval" className="carousel carousel-dark slide news-pill-section" data-bs-ride="carousel">
            <div className="carousel-inner ">

                {newsData.map((newsInfo, index) => {

                    // console.log(index)

                    return (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval={`${index === 0 ? "1000" : "2000"}`} >
                            <DisplayCard />
                            {/* <section className="news-pill-inner-section">
                                <NewsPill />
                            </section> */}
                        </div>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#newsCarouselInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#newsCarouselInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const NewsPill = ({ title = "Celebrating Teachers Day", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur in obcaecati veniam aspernatur. Sed, sequi voluptas recusandae maxime modi itaque ipsum sint mollitia ex suscipit praesentium eius necessitatibus optio. Voluptatibus, aliquid." }) => {
    // console.log(title)
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