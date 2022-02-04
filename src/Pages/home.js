import React from 'react';
import Footer from '../Component/footer/footer';
import NavBar from '../Component/navbar/navbar';
import TopNavMenu from '../Component/navbar/topNavMenu';
import LandingCarousel from '../Section/LandingCarousel/landingCarousel';
import Leadership from '../Section/Leadership/leadership';
import NewsAndEvents from '../Section/NewsAndEvents/newsAndEvents';
import OurRecruiters from '../Section/OurRecruiters/ourRecruiters';
import WhySgu from '../Section/WhySgu/whySgu';
import YoutubeVideos from '../Section/YoutubeVideos/youtubeVideos';
import '../Static/css/Styles.css'

export default function Home() {
    return (
        <>
            <NavBar />
            <LandingCarousel />
            <WhySgu />
            <NewsAndEvents />
            <YoutubeVideos />
            <OurRecruiters />
            <Leadership />
            <Footer />
        </>
    )
}