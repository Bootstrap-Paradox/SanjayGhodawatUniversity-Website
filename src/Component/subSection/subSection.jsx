import React from "react";
import { NavLink } from "react-router-dom";
import PageDisplaySection, { PromotionalActionCenter, PromotionalPageLayout } from "../../Section/sectionLayout";
import { InfoBlock } from "../components";

const SubMenuLayout = ({ title, navigationInformation }) => {
    return (
        <section className="department-info">
            <div className="department-info-name">
                <h2>About <br></br>{title}</h2>
            </div>

            <div className="department-info-menu">
                {
                    Object.entries(navigationInformation).map(
                        ([subMenuTitle, subMenuLink], index) => {
                            return (
                                <NavLink key={index}
                                    to={subMenuLink}
                                    className={({ isActive }) => isActive ? "department-info-menu-btn-active" : undefined}
                                    end
                                >
                                    <button className="department-info-menu-btn">{subMenuTitle}</button>
                                </NavLink>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}

export function SubPageLayout({ title = "Explore", subTitle = "", navigationInformation, children }) {
    return (
        <section>
            <PageDisplaySection title={title} subTitle={subTitle} />
            <PromotionalPageLayout
                hidePromotions={true}
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