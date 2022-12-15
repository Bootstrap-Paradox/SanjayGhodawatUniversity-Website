import React from 'react';
import { DeanDesk } from '../../Component/components';
import PageDisplaySection, { PromotionalActionCenter, PromotionalPageLayout } from '../../Section/sectionLayout';
import { Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { SubPageLayout } from '../../Component/subSection/subSection';


export default function SchoolProfile() {

    const navigate = useNavigate()

    const { search } = useLocation()
    const searchParameters = new URLSearchParams(search);
    const schoolName = searchParameters.get("info");

    const displaySchoolName = schoolName.split("-").map(
        (keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1)
    ).join(" ")


    return (
        <SubPageLayout title="Explore" subTitle={displaySchoolName} navigationInformation={{
            "About": `/school?info=${schoolName}`,
            "Faculty Profile": `/school?info=${schoolName}`,
            "Programmes": `/school?info=${schoolName}`,
        }} >
            <DeanDesk />
        </SubPageLayout>
    )
}

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