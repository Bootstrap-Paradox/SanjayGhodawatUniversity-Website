import React from 'react';
import NewsAndEvents from '../Section/NewsAndEvents/newsAndEvents';
import OurRecruiters from '../Section/OurRecruiters/ourRecruiters';
import YoutubeVideos from '../Section/YoutubeVideos/youtubeVideos';
import '../Static/css/Styles.css'

export default function Home() {
    return (
        <>
            <NewsAndEvents />
            <YoutubeVideos />
            <OurRecruiters />
        </>
    )
}