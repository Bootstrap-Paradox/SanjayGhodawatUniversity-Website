import PageBuilder from "../../PageBuilder/pageBuilder";
import { Routes, Route } from 'react-router-dom';
import { expandedFacultyInformation } from "../academics/expandedFacultyInformation";

export default function MainPageLayout() {
    return (
        <Routes>
            <Route path="/faculty/*" element={
                <PageBuilder pageLocation="faculty" pageData={expandedFacultyInformation} />
            } />
        </Routes>
    )
}