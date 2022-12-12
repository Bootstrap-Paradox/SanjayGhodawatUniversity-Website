import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { SectionLayout } from '../sectionLayout';

export default function WhySgu() {

    const whySGU = [
        {
            title: 126,
            plus: true,
            description: "Best In Class Recruitments",
        },
        {
            title: 7,
            plus: false,
            description: "Foriegn University Collaboration",
        },
        {
            title: 20,
            plus: true,
            description: "Industry Collaboration",
        },
    ]


    return (
        <SectionLayout sectionTitle={"Why SGU?"}>
            <NumberDisplayHighlight whySGU={whySGU} />
        </SectionLayout>
    )
}

const NumberDisplayHighlight = (props) => {
    return (
        <section className="number-display-highlight">
            {
                props.whySGU.map(
                    (highlightData, index) => {
                        return (
                            <HighlightBlock highlightData={highlightData} key={index} />
                        )
                    }
                )
            }

        </section>
    )
}

const HighlightBlock = (props) => {
    return (
        <div className="highlight-block">
            <h1>
                <AnimateNumber toAnimateNumber={props.highlightData.title} />
                <span>
                    {props.highlightData.plus && "+"}
                </span>
            </h1>
            <p>{props.highlightData.description}</p>
        </div>
    )
}

function AnimateNumber({ toAnimateNumber }) {

    const [inView, setInView] = useState(false);

    const animatedNumberProps = useSpring(
        {
            val: inView ? toAnimateNumber : 0,
            // from: { val: 0 },
            config: {
                mass: 1,
                tension: 20,
                friction: 10,
            },
            delay: 600,
        }
    )

    return (
        <Waypoint onEnter={() => setInView(true)} >
            <animated.div >
                {animatedNumberProps.val.to((n) => n.toFixed(0))}
            </animated.div>
        </Waypoint>
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