import React from 'react';
import TopNavMenu from './topNavMenu';

import SGULogo from '../../Static/images/SGU Logo.png';
import CallIcon from '../../Static/svg_components/callIcon'

export default function NavBar() {

    return (
        <nav class="navigation fixed-top navbar-light bg-light">
            <TopNavMenu />
            <div class="container-fluid navbar navbar-custom">
                <Brand />
                <Menu />
                <ContactCTA />
                <HamburgerIcon />
            </div>
        </nav>
    )
}

const Brand = () => {

    return (
        <div className="navbar-brand brand">
            <img className='img-fluid' src={SGULogo} />
            <h3>Sanjay<br></br>Ghodawat<br></br>University</h3>

        </div>
    )
}

const Menu = () => {
    return (
        <div className='nav-links'>
            <p>About Us</p>
            <p>Admissions</p>
            <p>Academic</p>
            <p>Research</p>
            <p>Campus Life</p>
            <p>Placement</p>
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

const HamburgerIcon = () => {
    return (
        <div className="hamburger-icon">
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

