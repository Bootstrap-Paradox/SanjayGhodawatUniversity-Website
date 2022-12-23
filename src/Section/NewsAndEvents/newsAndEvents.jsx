import React from 'react';
import { SectionLayout } from '../sectionLayout';
import MBA_events from '../../Static/images/management.jpg';
import newsData from './newsData';
import Blob from '../../Static/svg_components/blob';
import NewPageIcon from '../../Static/svg_components/newPage'

export default function NewsAndEvents() {
    return (
        <SectionLayout sectionTitle="News & Events" sectionClassName="news-and-events" >
            <NewsHighlightBlock image={newsData[0].image} title={newsData[1].title} description={newsData[0].description} date={newsData[0].date} url={newsData[0].url} />
            <section className="previous-highlight-area">
                <PreviousHighlightBlock image={newsData[1].image} title={newsData[1].title} description={newsData[1].description} date={newsData[1].date} url={newsData[1].url} />
                <PreviousHighlightBlock image={newsData[1].image} title={newsData[0].title} description={newsData[1].description} date={newsData[1].date} url={newsData[1].url} />
                <PreviousHighlightBlock image={newsData[1].image} title={newsData[1].title} description={newsData[1].description} date={newsData[1].date} url={newsData[1].url} />
            </section>
        </SectionLayout>
    )
}

const NewsHighlightBlock = (props) => {

    return (
        <div className="news-highlight-block">
            <div className="image">
                {/* <img src={props.image} /> */}
                <Blob>
                    <image preserveAspectRatio="xMidYMid slice" width="100%" height="100%" href={props.image} clipPath="url(#image-x)" />
                </Blob>
            </div>

            <div className="textual">
                <h6 className="date" >{props.date}</h6>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="btn-x"><h6>Read More</h6><NewPageIcon /></div>
            </div>
        </div>
    )
}

const PreviousHighlightBlock = (props) => {
    return (
        <div className="previous-highlight-block">
            <div className="image">
                <img src={props.image} />
            </div>
            <div className="textual">
                <h6>{props.title}</h6>
                <h6 className="date">{props.date}</h6>
                <div className="btx"><h6>Read More...</h6></div>
            </div>
        </div>
    )
}