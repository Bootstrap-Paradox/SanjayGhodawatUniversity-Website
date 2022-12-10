import React from 'react';
import { useSpring, animated, config } from 'react-spring';

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
            <WhySguHighlightBlock plus={true} />
            <WhySguHighlightBlock highlight={7} description='Foreign University Collaborations' style={{ backgroundColor: "#052C3F" }} />
            <WhySguHighlightBlock highlight={20} plus={true} description='Industry Collaborations' />
        </section>
    )
}

function AnimateNumber({ toAnimateNumber }) {

    const animatedNumberProps = useSpring(
        {
            val: toAnimateNumber,
            from: { val: 0 },
            config: {
                mass: 1,
                tension: 20,
                friction: 10,
            },
            delay: 600,
        }
    )

    console.log(animatedNumberProps)

    return (
        <animated.div>
            {animatedNumberProps.val.to((n) => n.toFixed(0))}
        </animated.div>
    )
}

const WhySguHighlightBlock = ({ highlight = 100, description = "Best In Class Recruitments", plus = false, style = { backgroundColor: "#E31E24" } }) => {
    return (
        <div style={style} className="why-highlights-block">
            <div>

                <h1 className="highlight">
                    <AnimateNumber toAnimateNumber={highlight} />
                    <span>
                        {plus && "+"}
                    </span>
                </h1>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}