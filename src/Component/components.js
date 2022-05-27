import React from 'react';

import image from '../Static/images/abtsports.jpg';

import team1 from '../Static/images/team1.jpg';
import khandal from '../Static/images/KS.jpg';
import sgulogo from '../Static/images/SGU Logo.png';

export function InfoBlock({ title = "", description = [] }) {
    return (
        <div className="info-block">
            <div className="info-block-image">
                <img style={{
                    objectFit: "contain",
                }} src={sgulogo} />
            </div>
            <div className="info-block-textual">
                <h1 className="info-block-textual-title">{title}</h1>
                {description.map((text, index) => <h4 key={index} className="info-block-textual-description">{text}</h4>)}
            </div>

        </div>
    )
}


export function ImageDisplayBlock() {
    return (
        <div className="image-display-block">
            <div className="image-display-image">
                <img />
            </div>
            <div className="image-display-text">
                <h3 className="title"></h3>
            </div>
        </div>
    )
}

export function DeanDesk() {
    return (
        <div className='dean-desk-block'>
            <div className='dean-desk-block-image'>
                <img src={team1} />
            </div>

            <div className='dean-desk-block-content'>
                <h2>Dean's Desk</h2>

                <p>I am delighted to introduce and warmly welcome you to the Department of Aeronautical Engineering, Sanjay Ghodawat University, Kolhapur, Maharashtra.</p>

                <p>Our mission is to mould Aeronautical Engineering undergraduates through world class education, sustained research in aeronautical technologies leading to patents and research publications, promoting entrepreneurship and enhance interactions with industry. The department boasts enthusiastic faculty and talented staff members who are experts in their areas of interest.</p>

                <div>
                    <h4>Dr. V. S Khandal<br></br>Professor & Head</h4>
                </div>
            </div>
        </div>
    )
}

export function ProfileCard() {
    return (
        <div className='faculty-profile' data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left" >
            {/* <div className='faculty-profile-sgu-logo'>
                <img src={sgulogo} />
            </div> */}
            <div className='faculty-profile-image'>
                <img src={khandal} />
            </div>
            <div className='faculty-profile-content'>
                <h3>Dr. V. S Khandal</h3>
                <p>Associate Professor</p>
                {/* <p>M.Tech.(TPE), Ph.D.(Mechanical Engineering)</p> */}

                {/* <div>
                    <h3>Area of Specialization</h3>
                    <p>Thermal Power Engineering, Alternate fuels, Sustainable Energy</p>
                </div>
                <div>
                    <h3>Experience</h3>
                    <p>12 Years</p>
                </div> */}
            </div>

            <div className='faculty-profile-email'>
                <p>khandal.sv@sanjayghodawatuniversity.ac.in</p>
            </div>
        </div>
    )
}
