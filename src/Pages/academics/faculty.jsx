import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageDisplaySection, { PromotionalActionCenter, PromotionalPageLayout } from '../../Section/sectionLayout';

import managementpep from '../../Static/images/management.jpg';
import pepschat from '../../Static/images/people_chatting.jpg';

import { Search } from '../../Static/svg_components/Icons';

export default function Faculty() {

    const facultyInfo = {
        "Technology": {
            facultyImage: pepschat,
            facultyData: {
                "Computer Science": [
                    { "B. Tech": "" },
                    { "M. Tech": "" },
                    { "B. Tech (Artificial Intelligence)": "" },
                    { "B. Tech (Data Science)": "" }
                ],
                "Design": [
                    { "B. Des": "" },
                    { "M. Des": "" },
                    { "B. Des (Fashion)": "" },
                ],
            }
        },
        "Management": {
            facultyImage: managementpep,
            facultyData: {
                "Commerce": [
                    { "B. Com": "" },
                    { "M. Com": "" },
                ],
                "Management": [
                    { "B. BA (Marketing)": "" },
                    { "B. BA (Finance)": "" },
                    { "B. BA (Agriculture)": "" },
                    { "M. BA (Marketing)": "" },
                    { "M. BA (Finance)": "" },
                    { "M. BA (Agriculture)": "" },
                ]
            }
        }
    }

    return (
        <>
            <section>
                <PageDisplaySection title="Explore Faculty" subTitle='Avaliable at SGU' />
                <PromotionalPageLayout actionCenter={
                    <PromotionalActionCenter>
                        <div className="action-btn">Faculty</div>
                        <div className='action-search-field'>
                            <input className='' type="text" placeholder="Search" />
                            <div><Search /></div>

                        </div>
                    </PromotionalActionCenter>}>
                    {
                        Object.entries(facultyInfo).map(
                            ([facultyName, facultyData], index) => {
                                return (
                                    <FacultyBlock facultyTitle={facultyName} facultyData={facultyData.facultyData} facultyImage={facultyData.facultyImage} key={index} />
                                )
                            }
                        )
                    }
                </PromotionalPageLayout>
            </section>
        </>
    )
}

const FacultyBlock = ({ facultyTitle = "Technology", facultyData = {}, facultyImage = pepschat }) => {

    const navigate = useNavigate()

    return (
        <div className='faculty-info-block'>
            <img src={facultyImage} />
            <section className='faculty-info'>
                <h3 className='faculty-title'>Faculty of {facultyTitle}</h3>

                {
                    Object.entries(facultyData).map(
                        ([schoolName, schoolData], index) => {
                            return (
                                <div key={index} className="school-block">
                                    <h5>School of {schoolName}</h5>

                                    <section className="courses-section">
                                        {
                                            schoolData.map(
                                                (school, index) => {
                                                    const [[courseName, courseLink]] = Object.entries(school)
                                                    return (
                                                        <button key={index} className="course-btn"
                                                            onClick={() => {
                                                                navigate(courseLink)
                                                            }}
                                                        >
                                                            {courseName}
                                                        </button>
                                                    )
                                                }
                                            )
                                        }
                                    </section>

                                </div>
                            )
                        }
                    )
                }
            </section>

        </div>
    )
}