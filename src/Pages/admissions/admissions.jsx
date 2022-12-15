import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SubPageLayout } from '../../Component/subSection/subSection';

export default function Admissions() {
    return (
        <Routes>
            <Route path="/overview" element={

                <SubPageLayout title="Overview" navigationInformation={{ "Overview": "/admissions/overview" }} >
                    <div><h1>hello</h1></div>
                </SubPageLayout>
            } />
            {/* <Route path="/eligibility" element={
                <SubPageLayout title="Eligibility" >
                
                </SubPageLayout>
            } />
            <Route path="/Application-procedure" element={
                <SubPageLayout title="Application Procedure" >
                
                </SubPageLayout>
            } />
            <Route path="/fee-structure" element={
                <SubPageLayout title="Fee Structure" >
                
                </SubPageLayout>
            } />
            <Route path="/scholarship" element={
                <SubPageLayout title="Scholarship" >
                
                </SubPageLayout>
            } /> */}

        </Routes>
    )
}