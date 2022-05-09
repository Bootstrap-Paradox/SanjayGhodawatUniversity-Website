import React from 'react';

import background from '../Static/images/1.jpg';

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
            <section className="page-layout-template container">
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

                <section className="content">
                    {props.children}
                </section>
            </section>
        </>
    )
}

export default PageDisplaySection;
export { SubPageSection };