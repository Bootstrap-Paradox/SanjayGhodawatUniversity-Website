import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { SubPageLayout } from '../Component/subSection/subSection';
import AboutBlock from '../Component/aboutBlock/aboutBlock';
import { DeanDesk, DisplayImage, InfoBlock, ProfileCard } from '../Component/components';
import TableLayout from '../Component/tableLayout/tableLayout';
import ColumnLayouter from '../Component/columnLayouter/columnLayouter';
import ExpandableLayouter from '../Component/expandable/expandable';

import Sgulogo from '../Static/images/SGU Logo.png';

export default function PageBuilder({ pageLocation = "", pageData = {} }) {
    return (
        <Routes>
            {
                Object.keys(pageData).map((pageName, index) => {
                    const displayName = pageName.split('-').map((keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1)).join(' ')
                    console.log(pageName)

                    const navigationInformationBuilder = {};
                    Object.keys(pageData[pageName]).map((page, index) => {
                        navigationInformationBuilder[page] = `/${pageLocation}/${pageName}/${page}`
                    })
                    console.log(navigationInformationBuilder)

                    return <Route path={`/${pageName}/*`} element={
                        <SubPageLayouter displayName={displayName} pageData={pageData[pageName]} navigationInformation={navigationInformationBuilder} />
                    } key={pageName} />
                })
            }
        </Routes>
    )
}

const SubPageLayouter = ({ displayName, navigationInformation, pageData }) => {

    const [ComponentList, LayouterList] = useComponentList();

    return (
        <Routes>
            {
                Object.keys(navigationInformation).map(
                    (subPageName, index) => {
                        return <Route path={`/${subPageName}`} element={
                            <SubPageLayout Title="Explore" subTitle={displayName} hidePromotions={true} navigationInformation={navigationInformation} >
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
        "FacultyProfileCard": (facultyName = "", designation = 'xxx', graduation = [
            "M.Tech.(TPE)",
            "Ph.D.(Mechanical Engineering)",
        ], specialization = [
            "Thermal Power Engineering",
            "Alternate fuels",
            "Sustainable Energy",
            "Sustainable Energy",
        ], image = Sgulogo, experience = '12 Years', email = 'khandal.sv@sanjayghodawatuniversity.ac.in', key = 1) => {
            return <ProfileCard facultyName={facultyName} designation={designation} graduation={graduation} specialzation={specialization} image={image === '' ? Sgulogo : image} experience={experience} email={email} key={key} />
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
            console.log("in the column layouter")
            console.log(layouterDetails)
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