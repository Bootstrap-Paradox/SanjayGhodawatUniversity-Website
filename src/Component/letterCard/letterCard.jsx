import React from 'react';
import team1 from '../../Static/images/team1.jpg';

export default function LetterCard({
    title = "",
    image = "",
    content = [],
    signature = {
        name: "",
        designation: "",
    }
}) {

    return (
        <div className='dean-desk-block'>
            <div className='dean-desk-block-image'>
                <img src={team1} alt="" />
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