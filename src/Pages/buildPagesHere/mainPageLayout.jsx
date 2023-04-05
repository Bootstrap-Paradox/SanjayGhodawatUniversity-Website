import PageBuilder from "../../PageBuilder/pageBuilder";
import { Routes, Route } from 'react-router-dom';
import { expandedFacultyInformation } from "../academics/expandedFacultyInformation";

export default function MainPageLayout() {
    console.log("Faculty profile is running and bilding the page")
    return (
        <Routes>
            <Route path="/faculty/*" element={
                <PageBuilder pageData={expandedFacultyInformation} />
            } />
        </Routes>
    )
}