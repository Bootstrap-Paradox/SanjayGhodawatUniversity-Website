import PageBuilder from "../../PageBuilder/pageBuilder";
import { Routes, Route } from 'react-router-dom';
import { expandedFacultyInformation } from "../academics/expandedFacultyInformation";
import Faculty from "../academics/schools";

export default function MainPageLayout() {
    return (
        <Routes>
            <Route path="/faculty" element={
                <Faculty />
            } />
            <Route path="/faculty/*" element={
                <PageBuilder pageLocation="faculty" pageData={expandedFacultyInformation} />
            } />
        </Routes>
    )
}