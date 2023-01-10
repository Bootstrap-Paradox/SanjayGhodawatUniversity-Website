import React from 'react';
import image from '../../Static/images/people_chatting.jpg';

export default function AboutBlock(props) {

    const { title = "", displayData = "", height = "500px", reverse = false, rotation = "2deg" } = props

    return (
        <div
            style={{
                height: height
            }}
            className="about-block">
            <img
                style={{
                    transform: `rotate(${rotation})`
                }}
                src={image} />

            {
                displayData instanceof Array ?
                    <div className='textual'>
                        <h1>Our <strong>{title}</strong></h1>
                        <div>
                            {
                                displayData.map(
                                    (points, index) => {
                                        return (
                                            <p key={index} className="points">{points}</p>
                                        )
                                    }
                                )
                            }

                        </div>
                    </div>
                    :
                    <div className="textual">
                        <h1>Our <strong>{title}</strong></h1>
                        <p>{displayData}</p>
                    </div>
            }
        </div>
    )
}