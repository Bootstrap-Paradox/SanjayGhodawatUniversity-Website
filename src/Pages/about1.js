import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoBlock } from '../Component/components';

import PageDisplaySection, { PromotionalPageLayout, PromotionalActionCenter } from '../Section/section_layout';

export function About1() {
    const navigate = useNavigate();
    const sportsDescription = [
        "Sanjay Ghodawat University lays emphasis on sporting activities and incorporates them as an integral part of curriculum which ensure healthy physic and mind of the students. With the vision of overall development of students, SGUencourages and provides facilities for every sport activity that students have interest in and to maintain fitness and develop a competitive spirit among the students. We have committed to provide students national and International exposure in various sport activities.",
        "SGU has an international cricket ground with 5 strips of turf wicket to host any National level cricket match and state of art sportingfacilities such as Football and hockey pitches, tennis courts and Basketball court, table tennis hall with 4 tables, with most modern equipment.",
        "Outdoor Facilities : Cricket ground, football grass field, hockey field, tennis courts, holly ball courts, basket ball courts, Swimming pools",
        "Indoor Facilities : Air conditioned gymnasium, Table tennis, and badminton court, weight lifting, power lifting, chess, carom",
        "Sports Scholarship : SGU offers scholarship to help athletes who are competing at National or International level to meet the extra costs of elite participation. The scheme provides a personal academic coaching and free access to sports facilities for 24x7",
    ]
    return (
        <>
            <section>
                <PageDisplaySection title="About" subTitle='SGU' />
                <PromotionalPageLayout hidePromotions={true} actionCenter={
                    <PromotionalActionCenter>
                        <section className='department-info'>
                            <div className='department-info-name'>
                                <h2>About<br></br>Us</h2>
                            </div>
                            <div className='department-info-menu'>
                                <button onClick={() => { }} className='department-info-menu-btn'>About SGU</button>
                                <button onClick={() => {
                                }} className='department-info-menu-btn-active'>About Logo</button>
                                <button className='department-info-menu-btn'>Sanjay Ghodawat Group</button>

                            </div>
                        </section>
                    </PromotionalActionCenter>
                }>
                    <InfoBlock description={sportsDescription} />
                </PromotionalPageLayout>

            </section>
        </>
    )
}