import React from 'react';

export default function WhySgu() {
    return (
        <>
            <section className="section why-sgu">
                <section className="title">
                    <h1>Why Sgu?</h1>
                </section>

                <WhySguSection />

            </section>
        </>
    )
}

const WhySguSection = () => {
    return (
        <section className="why-sgu-section">
            <section className="why-content">
                <p className="description">The Sanjay Ghodawat University stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life. The USP of the University is its research based curriculum and academically oriented teaching staff. The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process.</p>
            </section>

            <WhySguHighlight />

        </section>
    )
}

const WhySguHighlight = () => {
    return (
        <section className="why-highlights">
            <WhySguHighlightBlock />
            <WhySguHighlightBlock highlight='7' description='Foreign University Collaborations' style={{ backgroundColor: "#052C3F" }} />
            <WhySguHighlightBlock highlight='20+' description='Industry Collaborations' />
        </section>
    )
}

const WhySguHighlightBlock = ({ highlight = "100+", description = "Best In Class Recruitments", style = { backgroundColor: "#E31E24" } }) => {
    return (
        <div style={style} className="why-highlights-block">
            <div>

                <h1 className="highlight">{highlight}</h1>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}