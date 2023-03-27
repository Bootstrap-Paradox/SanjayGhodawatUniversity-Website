import React from "react";
import { NavLink } from "react-router-dom";
import PageDisplaySection, { PromotionalActionCenter, PromotionalPageLayout } from "../../Section/sectionLayout";
import { InfoBlock } from "../components";

const SubMenuLayout = ({ title, navigationInformation }) => {

    // const displayTitle = 

    return (
        <section className="sub-page-menu-layout">
            <div className="sub-page-menu-layout-name">
                <h2>About {
                    title.split(" ").map((word, index) => { return <span key={index}><br></br>{word}</span> })
                }</h2>
            </div>

            <div className="sub-page-menu-layout-menu">
                {
                    Object.entries(navigationInformation).map(
                        ([subMenuTitle, subMenuLink], index) => {

                            subMenuTitle = subMenuTitle.split("-").map(
                                (keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1)
                            ).join(" ")

                            return (
                                <NavLink key={index}
                                    to={subMenuLink}
                                    className={({ isActive }) => isActive ? "sub-page-menu-layout-menu-btn-active" : undefined}
                                    end
                                >
                                    <button className="sub-page-menu-layout-menu-btn">{subMenuTitle}</button>
                                </NavLink>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}

export function SubPageLayout({ title = "Explore", subTitle = "", hidePromotions = true, navigationInformation, children }) {
    return (
        <section>
            <PageDisplaySection title={title} subTitle={subTitle} />
            <PromotionalPageLayout
                hidePromotions={hidePromotions}
                actionCenter={
                    <PromotionalActionCenter>
                        <SubMenuLayout title={subTitle} navigationInformation={navigationInformation} />
                    </PromotionalActionCenter>
                }
            >
                {children}
            </PromotionalPageLayout>

        </section>
    )
}