import React from 'react';
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
            <LandingCarousel />
            <WhySgu />
            <NewsAndEvents />
            <YoutubeVideos />
            <OurRecruiters />
            <Leadership />
        </>
    )
}