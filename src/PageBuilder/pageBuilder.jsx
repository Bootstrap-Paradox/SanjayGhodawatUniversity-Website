import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { SubPageLayout } from '../Component/subSection/subSection';
import { expandedFacultyInformation } from '../Pages/academics/expandedFacultyInformation';
import AboutBlock from '../Component/aboutBlock/aboutBlock';
import { DeanDesk, DisplayImage, InfoBlock, ProfileCard } from '../Component/components';
import TableLayout from '../Component/tableLayout/tableLayout';
import ColumnLayouter from '../Component/columnLayouter/columnLayouter';
import ExpandableLayouter from '../Component/expandable/expandable';

export default function PageBuilder({ pageLocation = "school", schoolName = "", pageData = {} }) {
    // Page builder Creates Pages based on Json Data

    return (
        <Routes>
            {Object.keys(expandedFacultyInformation).map(

                (schoolName, index) => {
                    const displaySchoolName = schoolName.split("-").map(
                        (keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1)
                    ).join(" ")

                    const navigationInformationBuilder = {};
                    Object.keys(pageData[schoolName]).map(
                        (page, index) => {
                            navigationInformationBuilder[page] = `/${pageLocation}/${schoolName}/${page}`
                        }
                    )

                    return <Route path={`/${schoolName}/*`} element={
                        <SubPageLayouter displaySchoolName={displaySchoolName} pageData={pageData[schoolName]} navigationInformation={navigationInformationBuilder} />
                    } key={index} />
                }
            )}
        </Routes>
    )
}

const SubPageLayouter = ({ displaySchoolName, navigationInformation, pageData }) => {

    const [ComponentList, LayouterList] = useComponentList();

    return (
        <Routes>
            {
                Object.keys(navigationInformation).map(
                    (subPageName, index) => {
                        return <Route path={`/${subPageName}`} element={
                            <SubPageLayout Title="Explore" subTitle={displaySchoolName} hidePromotions={true} navigationInformation={navigationInformation} >
                                {
                                    pageData[subPageName]["builder"].length === 0 ?
                                        <div>
                                            <h1>Comming Soon</h1>
                                        </div>
                                        :
                                        pageData[subPageName]["builder"].map(
                                            (componentMetaData, index) => {
                                                return Object.entries(componentMetaData).map(
                                                    ([componentName, componentParameters], index) => {

                                                        if (componentParameters.hasOwnProperty("component")) {
                                                            return (
                                                                <div key={index}>
                                                                    {LayouterList[componentName](componentParameters)}
                                                                    <br></br>
                                                                    <br></br>
                                                                    <br></br>
                                                                    <br></br>
                                                                </div>
                                                            )
                                                        }

                                                        return (
                                                            <div key={index}>
                                                                {ComponentList[componentName](...Object.values(componentParameters), index)}
                                                                <br></br>
                                                                <br></br>
                                                                <br></br>
                                                                <br></br>
                                                            </div>
                                                        )
                                                    }
                                                )
                                            }
                                        )
                                }
                            </SubPageLayout>
                        } key={index} />
                    }
                )
            }
        </Routes>
    )
}


export const useComponentList = () => {

    const ComponentList = {
        "AboutBlock": (title = "", displayData = "", height = "500px", reverse = false, rotation = "2deg", key = 1) => {
            return <AboutBlock title={title} displayData={displayData} height={height} reverse={reverse} rotation={rotation} key={key} />
        },
        "DeanDesk": (props) => {
            return <DeanDesk />
        },
        "InfoBlock": (title = "", description = []) => {
            return <InfoBlock title={title} description={description} />
        },
        "TableLayout": (tableHead = [], tableData = []) => {
            return <TableLayout tableHead={tableHead} tableData={tableData} />
        },
        "FacultyProfileCard": (facultyName = "", designation = 'xxx', graduation = ['xyx', 'uuu'], specialization = ['abc', 'xxx'], image = '', experience = '', email = '', key = 1) => {
            return <ProfileCard facultyName={facultyName} graduation={graduation} specialzation={specialization} experience={experience} email={email} key={key} />
        },
        "ExpandableLayouter": (expandableInnerData) => {
            return <ExpandableLayouter expandableInnerData={expandableInnerData} />
        },
        "DisplayImage": (title = "", key = 1) => {
            return <DisplayImage title={title} key={key} />
        }

    }


    const LayouterList = {
        "ColumnLayouter": (layouterDetails) => {
            return (
                <ColumnLayouter>
                    {
                        layouterDetails["componentData"].map(
                            (individualData, index) => {
                                // return (<h1>{layouterDetails["component"]}</h1>)
                                return ComponentList[layouterDetails["component"]](...Object.values(individualData), index)
                            }
                        )
                    }
                </ColumnLayouter>
            )
        },
        "ExpandableLayouter": () => {
            return (
                <ExpandableLayouter />
            )
        }
    }


    return [ComponentList, LayouterList];
}