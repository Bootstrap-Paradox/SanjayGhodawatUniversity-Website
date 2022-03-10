import React, { useState, useContext } from 'react';
import { NavigationContext } from './navbar';

import image1 from '../../Static/images/1.jpg';

export default function NavigationMenu() {

    const { navState, navDispatch } = useContext(NavigationContext);

    // Nested Links
    const nestedLinks = Object.entries(navState.menu_data[navState.mainMenuSelected][navState.subMenuSelected].nested_links)


    const dataImage = navState.menu_data[navState.mainMenuSelected][navState.subMenuSelected].image

    return (
        <div className="navigation-menu navbar-light bg-light" >
            <section className="sub-menu">
                {Object.entries(navState.menu_data[navState.mainMenuSelected]).map(([subMenu, subMenuMetaData], index) => {
                    return (<SubMenuPill key={index} subMenu={subMenu} subMenuMetaData={subMenuMetaData} />)
                })}

                {navState.mainMenuSelected === "Admissions" && <button onClick={() => {
                    // window.location.href = ""
                }} className="custom-btn apply-now" >Apply Now</button>}

            </section>
            <section className="nested-menu">
                <h2>{navState.subMenuSelected}</h2>

                {nestedLinks.length > 0 ?
                    <div className="nested-menu-list">
                        {nestedLinks.map(([nestedMenu, nestedLink], index) => {
                            return (<p onClick={() => {
                                window.location.href = nestedLink
                            }} key={index}>{nestedMenu}</p>)
                        })}
                    </div>
                    :
                    <div className="nested-link-icon">
                        <Chain />
                    </div>
                }

            </section>
            <section className="image">
                <img src={dataImage || image1} />
            </section>
        </div>
    )
}

export function MobileNavigationMenu() {

    const { navState, navDispatch } = useContext(NavigationContext)

    return (
        <div id="navbarToggleMobile" className='collapse mobile-navigation-menu navbar-light bg-light' >
            <div className="nav-action">
                <div className="special-icons">

                    {navState.subNavigationMenuOpen && <div className='back-arrow' onClick={() => {
                        navDispatch({ type: 'CLOSE-SUB-NAVIGATION-MENU' })
                    }}><BackArrow /></div>}
                </div>
                <section className='action-center'>

                    <ActionCenter />

                </section>
            </div>
            <div className="nav-links">

                {navState.subNavigationMenuOpen ?
                    <div className="nested-link">
                        {Object.entries(navState.menu_data[navState.mainMenuSelected][navState.subMenuSelected].nested_links).map(([nestedMenu, nestedLink], index) => {
                            return (
                                <h3 key={index} onClick={() => {
                                    window.location.href = nestedLink
                                }} >{nestedMenu}</h3>
                            )
                        })}
                    </div>
                    : Object.entries(navState.menu_data).map(([menu, menuData], index) => {


                        return (
                            <div key={index} className="menu-link">
                                <h1 className={`${navState.navigationMenuOpen ? navState.mainMenuSelected != menu ? "inactive" : "" : ""}`} onClick={() => {
                                    if (navState.navigationMenuOpen && navState.mainMenuSelected != menu) {
                                        navDispatch({ type: "OPEN-NAVIGATION-MENU", payload: menu })
                                    } else if (navState.navigationMenuOpen) {
                                        navDispatch({ type: "CLOSE-NAVIGATION-MENU" })
                                    }
                                    else {
                                        navDispatch({ type: "OPEN-NAVIGATION-MENU", payload: menu })
                                    }
                                }} >{menu}</h1>
                                {navState.mainMenuSelected === menu && <div className={`sub-link`}>
                                    {Object.entries(menuData).map(([subMenu, subMenuData], index) => {
                                        return (
                                            <p onClick={() => {
                                                navDispatch({ type: "OPEN-SUB-NAVIGATION-MENU", payload: subMenu })
                                            }} key={index}>{subMenu}</p>
                                        )
                                    })}
                                </div>}
                            </div>
                        )
                    })}

            </div>
        </div>
    )
}

const SubMenuPill = ({ subMenu = "", subMenuMetaData = {} }) => {

    const { navState, navDispatch } = useContext(NavigationContext);

    const isLink = navState.menu_data[navState.mainMenuSelected][navState.subMenuSelected].url != ""

    return (
        <div className={`sub-menu-pill ${navState.subMenuSelected === subMenu ? "active" : ""}`}
            onMouseEnter={() => {
                navDispatch({ type: "OPEN-SUB-NAVIGATION-MENU", payload: subMenu })
            }}

            onClick={() => {
                if (subMenuMetaData.url) {
                    window.location.href = subMenuMetaData.url
                }
            }}
        >
            <p className={`${isLink ? "active-link" : ""}`}>{subMenu}</p>
            {navState.subMenuSelected === subMenu && <ChevronRightArrow />}

        </div>
    )
}


const ActionCenter = () => {
    return (
        <div className="action-block">
            <NewPageIcon />
        </div>
    )
}


const NewPageIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
    )
}

const ChevronRightArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
    )
}

const Chain = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512"><path d="M324.958,187.046c58.347,58.407,57.546,152.048,0.352,209.56c-0.107,0.117-0.234,0.244-0.352,0.361l-65.625,65.625c-57.881,57.881-152.05,57.873-209.922,0c-57.881-57.871-57.881-152.05,0-209.921l36.236-36.236c9.609-9.609,26.158-3.223,26.654,10.357c0.633,17.307,3.736,34.694,9.463,51.485c1.939,5.686,0.554,11.975-3.694,16.223l-12.78,12.78c-27.369,27.369-28.228,71.933-1.128,99.57c27.367,27.909,72.35,28.075,99.927,0.498l65.625-65.615c27.53-27.53,27.415-72.028,0-99.443c-3.614-3.607-7.255-6.41-10.099-8.368c-4.079-2.801-6.595-7.366-6.784-12.311c-0.387-10.319,3.27-20.953,11.424-29.107l20.561-20.561c5.392-5.392,13.85-6.054,20.102-1.69C312.076,175.252,318.783,180.871,324.958,187.046L324.958,187.046z" /><path d="M462.59,49.408c-57.872-57.873-152.041-57.881-209.922,0l-65.625,65.625c-0.117,0.117-0.244,0.244-0.352,0.361c-57.193,57.512-57.995,151.153,0.352,209.56c6.175,6.174,12.88,11.794,20.04,16.793c6.252,4.363,14.711,3.7,20.102-1.69l20.561-20.561c8.154-8.154,11.811-18.788,11.424-29.107c-0.189-4.945-2.705-9.509-6.784-12.31c-2.844-1.958-6.484-4.761-10.099-8.368c-27.415-27.415-27.53-71.913,0-99.443l65.625-65.615c27.577-27.577,72.559-27.411,99.927,0.498c27.1,27.637,26.242,72.201-1.128,99.57l-12.78,12.78c-4.248,4.248-5.634,10.537-3.694,16.223c5.727,16.791,8.83,34.179,9.463,51.485c0.497,13.58,17.045,19.967,26.654,10.357l36.236-36.236C520.47,201.458,520.47,107.279,462.59,49.408L462.59,49.408z" /></svg>
    )
}

const BackArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)" /><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" /></g></g></svg>
    )
}