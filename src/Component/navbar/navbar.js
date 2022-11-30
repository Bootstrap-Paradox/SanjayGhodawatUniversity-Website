import React, { createContext, useReducer, useState, useContext } from 'react';
import TopNavMenu from './topNavMenu';



import SGULogo from '../../Static/images/SGU Logo.png';
import CallIcon from '../../Static/svg_components/callIcon'
import menus from './menu';
import NavigationMenu, { MobileNavigationMenu } from './navbarLogic';
import { NavigationReducer } from './navbarReducer';
import { useNavigate } from 'react-router-dom';

export const NavigationContext = createContext();

export default function NavBar() {

    const initialState = {
        menu_data: menus,
        seletedMainMenu: {},
        navigationMenuOpen: false,
        subNavigationMenuOpen: false,
        nestedNavigationMenuOpen: false,
        mainMenuSelected: "",
        subMenuSelected: "",
        nestedMenuSeleted: "",
    }

    const [navState, navDispatch] = useReducer(NavigationReducer, initialState);

    const [toggleMobileNavigationOpen, setToggleMobileNavigationOpen] = useState(false);

    return (
        <NavigationContext.Provider value={{ navState, navDispatch }}>

            <nav onMouseLeave={() => {
                navDispatch({ type: "CLOSE-NAVIGATION-MENU" })
            }} className="navigation fixed-top">
                <TopNavMenu />
                <div className="container-fluid navbar navbar-custom navbar-light bg-light">
                    <Brand />
                    <Menu />
                    <ContactCTA />
                    <HamburgerIcon toggleMobileNavigationOpen={toggleMobileNavigationOpen} setToggleMobileNavigationOpen={setToggleMobileNavigationOpen} />
                    <div></div>
                </div>
                {navState.navigationMenuOpen && <NavigationMenu />}
                {toggleMobileNavigationOpen && <MobileNavigationMenu />}

            </nav>
        </NavigationContext.Provider>
    )
}

const Brand = () => {

    const navigate = useNavigate();

    return (
        <div onClick={() => {
            navigate("/");
        }} className="navbar-brand brand">
            <img className='img-fluid' src={SGULogo} />
            <h3>Sanjay<br></br>Ghodawat<br></br>University</h3>

        </div>
    )
}

const Menu = () => {

    const { navState, navDispatch } = useContext(NavigationContext);

    return (
        <div className='nav-links'>

            {Object.keys(navState.menu_data).map((menu_item, index) => {
                return (<p key={index} className={navState.mainMenuSelected === menu_item ? "active" : ""} onMouseEnter={() => {
                    navDispatch({ type: "OPEN-NAVIGATION-MENU", payload: menu_item })
                }}>{menu_item}</p>)
            })}
        </div>
    )
}

const ContactCTA = () => {
    return (
        <div className="CTA">
            <div className="icon">
                <CallIcon />
            </div>
            <div className="info">
                <p>Inquire Toll Free</p>
                <p className="number">1800 31300 1566</p>
            </div>
        </div>
    )
}

const HamburgerIcon = ({ toggleMobileNavigationOpen, setToggleMobileNavigationOpen }) => {

    const { navState, navDispatch } = useContext(NavigationContext);
    return (
        <div onClick={() => {
            setToggleMobileNavigationOpen((prev) => !prev)
            if (toggleMobileNavigationOpen) {
                navDispatch({ type: "CLOSE-NAVIGATION-MENU" })
            }
        }} className="hamburger-icon-x" >
            <Hamburger />
        </div>
    )
}

const Hamburger = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="592.312" viewBox="0 0 800 592.312">
            <path id="Path_2" data-name="Path 2" d="M260.173,424.189H939.827a60.173,60.173,0,1,0,0-120.345H260.173a60.173,60.173,0,1,0,0,120.345ZM939.827,775.811H260.173a60.173,60.173,0,1,0,0,120.345H939.827a60.173,60.173,0,1,0,0-120.345Zm0-235.984H260.173a60.173,60.173,0,1,0,0,120.346H939.827a60.173,60.173,0,0,0,0-120.346Z" transform="translate(-200 -303.844)" />
        </svg>
    )
}

