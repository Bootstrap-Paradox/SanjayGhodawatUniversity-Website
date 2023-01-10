import React from 'react';
import { DeanDesk } from '../../Component/components';
import PageDisplaySection, { PromotionalActionCenter, PromotionalPageLayout } from '../../Section/sectionLayout';
import { Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { SubPageLayout } from '../../Component/subSection/subSection';
import PageBuilder from '../../PageBuilder/pageBuilder';
import { expandedFacultyInformation } from '../../global/expandedFacultyInformation';


export default function SchoolProfile() {

    const navigate = useNavigate()

    // const { search } = useLocation()
    // const searchParameters = new URLSearchParams(search);
    // const schoolName = searchParameters.get("info");

    // const displaySchoolName = schoolName.split("-").map(
    //     (keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1)
    // ).join(" ")


    return (
        <PageBuilder schoolName={"Test"} pageData={expandedFacultyInformation} />
    )
}