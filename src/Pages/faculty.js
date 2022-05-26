import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageDisplaySection, { PromotionalActionCenter, PromotionalPageLayout } from '../Section/section_layout';

import managementpep from '../Static/images/management.jpg';
import pepschat from '../Static/images/people_chatting.jpg';

import { Search } from '../Static/svg_components/Icons';

export default function Faculty() {
    const navigate = useNavigate();
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
                    <div className='faculty-info-block'>
                        <img src={pepschat} />
                        <section className='faculty-info'>
                            <h3 className='faculty-title'>Faculty of Technology</h3>

                            <div className="school-block">
                                <h5>School of Computer Science</h5>

                                <section className='courses-section'>
                                    <button onClick={() => navigate("/aeronautical-info-1")} className='course-btn'>B. Tech</button>
                                    <button onClick={() => navigate("/aeronautical-info-1")} className='course-btn'>M. Tech</button>
                                    <button onClick={() => navigate("/aeronautical-info-1")} className='course-btn'>B. Tech (Artificial Intelligence)</button>
                                </section>
                            </div>

                            <div className="school-block">
                                <h5>School of Design</h5>

                                <section className='courses-section'>
                                    <button className='course-btn'>B. Des</button>
                                    <button className='course-btn'>M. Des</button>
                                    <button className='course-btn'>B. Des (Fashion)</button>
                                </section>
                            </div>
                        </section>

                    </div>


                    <div className='faculty-info-block'>
                        <img src={managementpep} />
                        <section className='faculty-info'>
                            <h3 className='faculty-title'>Faculty of Management</h3>

                            <div className="school-block">
                                <h5>School of Commerce</h5>

                                <section className='courses-section'>
                                    <button className='course-btn'>B. Com</button>
                                    <button className='course-btn'>M. Com</button>
                                </section>
                            </div>

                            <div className="school-block">
                                <h5>School of Management</h5>

                                <section className='courses-section'>
                                    <button className='course-btn'>B. BA (Marketing)</button>
                                    <button className='course-btn'>B. BA (Finance)</button>
                                    <button className='course-btn'>B. BA (Agriculture)</button>
                                    <button className='course-btn'>M. BA (Marketing)</button>
                                    <button className='course-btn'>M. BA (Finance)</button>
                                    <button className='course-btn'>M. BA (Agriculutre)</button>
                                </section>
                            </div>
                        </section>

                    </div>
                </PromotionalPageLayout>
            </section>
        </>
    )
}