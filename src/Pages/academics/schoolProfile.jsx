import React from 'react';
import PageBuilder from '../../PageBuilder/pageBuilder';
import { expandedFacultyInformation } from './expandedFacultyInformation';


export default function SchoolProfile() {

    return (
        <PageBuilder schoolName={"Test"} pageData={expandedFacultyInformation} />
    )
}