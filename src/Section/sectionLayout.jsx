import React from 'react';

import background from '../Static/images/1.jpg';
import { Search } from '../Static/svg_components/Icons';

import pepschat from '../Static/images/people_chatting.jpg';

export function SectionLayout(props) {
    return (
        <section className="section">
            <div className="title">
                <h1>{props.sectionTitle}</h1>
            </div>
            <section>
                {props.children}
            </section>
        </section>
    )
}

function PageDisplaySection({ title = "", subTitle = "" }) {
    return (
        <section className="page-display-section">
            <img src={background} alt="Sanjay ghodawat University" />
            <div>
                <h1 className={`page-title ${subTitle ? "darken" : ""}`}>{title}</h1>
                <h1 className="page-title">{subTitle}</h1>
            </div>
        </section>
    )
}

function SubPageSection(props) {
    return (
        <>
            <PageDisplaySection title={props.title} subTitle={props.subTitle} />
            <section className="page-layout-template">
                <section className="layout-menu">
                    <div className="layout-menu-block">
                        <div className="layout-menu-block-title">
                            <h3>{props.title}</h3>


                        </div>
                        <div className="layout-menu-block-menus">
                            <ul>
                                <li>Sports</li>
                                <li>Activities</li>
                                <li>Announcements</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="layout-content">
                    {props.children}
                </section>
            </section>
        </>
    )
}

export function PromotionalActionCenter(props) {
    return (
        <>
            <div className="custom-action-center">
                <div className='action'>
                    {props.children}
                </div>
            </div>
        </>
    )
}


export function PromotionalPageLayout(props) {
    return (
        <>
            <section className='promotional-section'>

                {props.actionCenter}


                <section className="promotional-layout">

                    <section className='promotional-block'>
                        {props.hidePromotions ||
                            <div className='promotional-block-box'>
                                <img src={pepschat} />
                                <span>Promotion</span>
                            </div>
                        }
                    </section>


                    <section className='promotional-content'>
                        {props.children}
                    </section>

                    <section className='promotional-block'>
                        {props.hidePromotions ||

                            <div className='promotional-block-box'>
                                <span>Promotion</span>
                            </div>
                        }

                    </section>


                </section>
            </section>
        </>
    )
}

export function CustomGridLayout(props) {
    return (
        <section className="custom-grid-layout">
            {props.children}
        </section>
    )
}

export default PageDisplaySection;
export { SubPageSection };