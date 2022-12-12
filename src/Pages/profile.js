import React from 'react';
import { ProfileCard } from '../Component/components';
import { SubPageSection } from '../Section/sectionLayout';
import PageDisplaySection, { PromotionalPageLayout, PromotionalActionCenter } from '../Section/sectionLayout';
import { useNavigate } from 'react-router-dom';

export function Profile() {
    const navigate = useNavigate();
    return (
        <>
            <section>
                <PageDisplaySection title="Explore" subTitle='Aeronautical Faculty' />
                <PromotionalPageLayout hidePromotions={true} actionCenter={
                    <PromotionalActionCenter>
                        <section className='department-info'>
                            <div className='department-info-name'>
                                <h2>Aeronautical<br></br>Engineering</h2>
                            </div>
                            <div className='department-info-menu'>
                                <button onClick={() => navigate("/aeronautical-info-1")} className='department-info-menu-btn'>About</button>
                                <button onClick={() => {
                                    navigate("/aeronautical-profile")
                                }} className='department-info-menu-btn-active'>Faculty Profile</button>
                                <button className='department-info-menu-btn'>Programmes</button>

                            </div>
                        </section>
                    </PromotionalActionCenter>
                }>
                    <ProfileCard />
                </PromotionalPageLayout>

            </section>
        </>
    )
}