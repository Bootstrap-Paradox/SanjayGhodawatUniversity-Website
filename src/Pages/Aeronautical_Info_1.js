import React from 'react';
import { DeanDesk } from '../Component/components';
import PageDisplaySection, { PromotionalActionCenter, PromotionalPageLayout } from '../Section/sectionLayout';
import { useNavigate } from 'react-router-dom';

export function AeronauticalInfo1() {

    const navigate = useNavigate();
    return (
        <>
            <section>
                <PageDisplaySection title="Explore" subTitle='Aeronautical Engineering' />
                <PromotionalPageLayout hidePromotions={true} actionCenter={
                    <PromotionalActionCenter>
                        <section className='department-info'>
                            <div className='department-info-name'>
                                <h2>Aeronautical<br></br>Engineering</h2>
                            </div>
                            <div className='department-info-menu'>
                                <button className='department-info-menu-btn-active'>About</button>
                                <button onClick={() => {
                                    navigate("/aeronautical-profile")
                                }} className='department-info-menu-btn'>Faculty Profile</button>
                                <button className='department-info-menu-btn'>Programmes</button>

                            </div>
                        </section>
                    </PromotionalActionCenter>
                }>
                    <DeanDesk />
                </PromotionalPageLayout>

            </section>

        </>
    )
}