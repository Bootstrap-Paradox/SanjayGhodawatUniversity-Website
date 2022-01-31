import React from 'react';
import sanjay from '../../Static/images/team1.jpg';
import shrenik from '../../Static/images/team2.jpg';
import vinayak from '../../Static/images/team3.jpg';
import arun from '../../Static/images/team4.jpg';

export default function Leadership() {
    return (
        <>
            <section className="section leadership-section">
                <section className="title">
                    <h1>
                        Leadership
                    </h1>
                </section>

                <LeadershipCarousel />
            </section>
        </>
    )
}

const LeadershipCarousel = () => {
    return (
        <div id="carouselLeadershipIndicators" class="carousel carousel-custom carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselLeadershipIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselLeadershipIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselLeadershipIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselLeadershipIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <LeadershipFrame profile={sanjay} />
                </div>
                <div class="carousel-item">
                    <LeadershipFrame name={"Mr. Shrenik Ghodawat"} post="Vice President" profile={shrenik} />

                </div>
                <div class="carousel-item">
                    <LeadershipFrame name={"Mr. Vinayak Bhosale"} post="Trustee" profile={vinayak} />

                </div>
                <div class="carousel-item">
                    <LeadershipFrame name={"Dr. Arun Patil"} post="Vice Chancellor" profile={arun} />

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselLeadershipIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselLeadershipIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const LeadershipFrame = ({ name = "Mr. Sanjay Ghodawat", post = "President", profile = { sanjay }, link = "https://www.youtube.com" }) => {
    return (
        <div className="leadership-frame">
            <img src={profile} alt="Leader Photo" />
            <section className="textual">
                <section className="info">

                    <h4>{name}</h4>
                    <p>{post}</p>
                </section>
                <section onClick={() => {
                    window.location.href = link
                }} className="icon">
                    <ChevronRightArrow />
                </section>

            </section>

        </div>
    )
}

const ChevronRightArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
    )
}