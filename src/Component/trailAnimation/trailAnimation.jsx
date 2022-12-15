import React, { useEffect, useState } from 'react';
import { useTrail, a } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import styles from './trail.module.css';

export default function TrailAnimation(props) {

    const items = React.Children.toArray(props.children);

    const [firstLoad, setFirstLoad] = useState(true);
    const [inView, setInView] = useState(false);

    const trail = useTrail(
        items.length,
        {
            config: { mass: 5, tension: 2000, friction: 200 },
            delay: firstLoad ? 1000 : 0,
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 40,
            height: inView ? 110 : 0,
            from: { opacity: 0, x: 40, height: 0 },
        }
    )

    return (
        <Waypoint onEnter={() => {
            setInView(true)
            setTimeout(() => {
                setFirstLoad(false)
            }, 1500)
        }} >
            <div onClick={
                () => { setInView((prev) => !prev) }
            } >
                {trail.map(({ height, ...style }, index) => (
                    <a.div key={index} className={styles.trailsText} style={style}>
                        <a.div style={{ height }}>{items[index]}</a.div>
                    </a.div>
                ))}
            </div>
        </Waypoint>
    )
}