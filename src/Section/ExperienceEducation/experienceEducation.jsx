import React from 'react';
import TrailAnimation from '../../Component/trailAnimation/trailAnimation';
import { SectionLayout } from '../sectionLayout';


export default function ExperienceEducation() {


    const newsData = [
        {
            title: "Testing This Yanky Feature",
            description: "lorem",
        },
        {
            title: "Testing This Very Yanky Feature",
            description: "lorem",
        },
        {
            title: "Testing This Very Very Yanky Feature",
            description: "lorem",
        },
    ]

    return (
        <SectionLayout sectionTitle={""}>
            <section className='experience-education'>

                <TrailAnimation>
                    <span>Experience</span>
                    <span>Education</span>
                    <span>With</span>
                    <span>Us</span>
                </TrailAnimation>

                <div className="textual-content" >
                    <p>Sanjay Ghodawat University stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life.<br></br><br></br> The USP of the University is its research based curriculum and academically oriented teaching staff.<br></br><br></br>The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process.</p>
                </div>

            </section>
        </SectionLayout>
    )
}