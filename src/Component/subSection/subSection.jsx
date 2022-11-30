import React from "react";
import { NavLink } from "react-router-dom";
import PageDisplaySection, { PromotionalActionCenter, PromotionalPageLayout } from "../../Section/section_layout";
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

export function SubPageLayout({ title, navigationInformation, children }) {
    return (
        <section>
            <PageDisplaySection title="Explore" subTitle="About Us" />
            <PromotionalPageLayout
                hidePromotions={true}
                actionCenter={
                    <PromotionalActionCenter>
                        <SubMenuLayout title={title} navigationInformation={navigationInformation} />
                    </PromotionalActionCenter>
                }
            >
                {children}
            </PromotionalPageLayout>

        </section>
    )
}