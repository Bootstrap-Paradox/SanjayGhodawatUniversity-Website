import React from 'react';
import useWindowDimensions from '../../Logic/useWindowDimensions';
import CallIcon from '../../Static/svg_components/callIcon';
import { topNavMenus } from '../navbar/menu';


const footerMenus = {
    "Quick Links": {
        "Admissions 2021-22": "https://youtube.com",
        "Fee Structure": "https://youtube.com",
        "Scholarship": "https://youtube.com",
    },
    "Other Links": {
        "Awards and Achievement": "https://youtube.com",
        "Entrepreneurship": "https://youtube.com",
        "Contact Us": "https://youtube.com",
        "Brochure": "https://youtube.com",
        "Alumni": "https://youtube.com",
        "NIRF": "https://youtube.com",
        "ARHA": "https://youtube.com",
    },
    "Media": {
        "Media Coverage": "https://youtube.com",
        "Photo Gallery": "https://youtube.com",
    }
}


export default function Footer() {

    const currentYear = new Date().getUTCFullYear();

    return (
        <footer className='footer'>

            {Object.entries(footerMenus).map(([footerMenu, footerMetaData], index) => {
                return (
                    <LinkBox key={index} title={footerMenu} footerLinks={footerMetaData} />
                )
            })}

            <Socials />

            <ContactUs />
            <p className="copyright">Copyright © SanjayGodawatUniversity {`${currentYear}-${currentYear + 1}`}</p>
        </footer>
    )
}


const LinkBox = ({ title, footerLinks }) => {

    const { height, width } = useWindowDimensions();

    return (
        <div className="link-box">
            <h1>{title}</h1>
            {Object.entries(footerLinks).map(([footerMenu, footerLink], index) => {
                return (
                    <p key={index} onClick={() => {
                        window.location.href = footerLink
                    }} >{footerMenu}</p>
                )
            })}
            {title === "Quick Links" && width <= 900 && Object.entries(topNavMenus).map(([topMenu, topMenuLink], index) => {
                return (
                    <p key={`${1000 + index}`} onClick={() => {
                        window.location.href = topMenuLink
                    }} >{topMenu}</p>
                )
            })}
        </div>
    )
}

const Socials = () => {
    return (
        <div className='link-box'>
            <h1>Socials</h1>

            <div className='icon-box'>
                <FacebookIcon />
                <TwitterIcon />
                <YoutubeIcon />
            </div>
        </div>
    )
}


const ContactUs = () => {
    return (
        <>
            <div className="contact-us">
                <h1>Contact Us</h1>
                <div className="pill"><span><Send /></span>registrar@sanjayghodawatuniversity.ac.in</div>
                <div className="pill"><span><CallIcon /></span>Toll Free: 1800 31300 1566</div>
                <div className="pill"><span><Mobile /></span>+91 9011039800 / +91 9011022567</div>
                <div className="address-pill">
                    <span><Location /></span>
                    <div className="textual">
                        <p>Sanjay Ghodawat University</p>
                        <p>Kolhapur - Sangli Highway</p>
                        <p>A/P Attire - 416118</p>
                        <p>Tal. Hatkanangale</p>
                        <p>Dist. - Kolhapur</p>
                        <p>Maharashtra, India</p>

                    </div>
                </div>
            </div>
        </>
    )
}

const Location = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
        >
            <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            <path fill="none" d="M0 0h48v48h-48z" />
        </svg>

    )
}

const Mobile = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.71,16.29l-.15-.12a.76.76,0,0,0-.18-.09L12.2,16a1,1,0,0,0-.91.27,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,1.3,1.31,1.46,1.46,0,0,0,.33-.22,1,1,0,0,0,.21-1.09A1,1,0,0,0,12.71,16.29ZM16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z" />
        </svg>

    )
}

const Send = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 64 64"
            viewBox="0 0 64 64"
        >
            <polygon points="20.9 30.6 21.7 56.4 64 9.5" />
            <polygon points="0 11.2 20.1 28.7 63.3 7.6" />
        </svg>
    )
}

const Mail = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
                fill="#231f20"
                d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
            />
            <path
                fill="#231f20"
                d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
            />
        </svg>

    )
}

const FacebookIcon = () => {
    return (
        <div className="footer-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87">
                <g data-name="Layer 2">
                    <g data-name="Layer 1">
                        <rect width="28.87" height="28.87" fill="#4c76be" rx="6.48" ry="6.48" />
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M16.86 9.29h1.65V6.76c-.26 0-.53-.06-.8-.08h-1.49a3.65 3.65 0 0 0-2.1.65 3.15 3.15 0 0 0-1.27 2.1 7.39 7.39 0 0 0-.09 1.08v1.91h-2.41v2.81h2.4v7.07h2.93v-7.08h2.39l.37-2.83h-2.78v-2c.05-.83.54-1.08 1.2-1.1z"
                        />
                    </g>
                </g>
            </svg>

        </div>
    )
}
const TwitterIcon = () => {
    return (
        <div className="footer-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87">
                <g data-name="Layer 2">
                    <g data-name="Layer 1">
                        <rect width="28.87" height="28.87" fill="#00c7ff" rx="6.48" ry="6.48" />
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M11.74 18.11a3.29 3.29 0 0 1-3.05-2.28 3.26 3.26 0 0 0 1.41 0A3.28 3.28 0 0 1 8 14.26a3.18 3.18 0 0 1-.48-1.75 3.24 3.24 0 0 0 1.46.4 3.3 3.3 0 0 1-1.35-2A3.25 3.25 0 0 1 8 8.54 9.39 9.39 0 0 0 14.76 12c0-.13 0-.24-.05-.36a3.28 3.28 0 0 1 5.58-2.74.17.17 0 0 0 .17.05 6.6 6.6 0 0 0 1.91-.73A3.36 3.36 0 0 1 21 10a6.3 6.3 0 0 0 1.83-.49l-.33.49a6.44 6.44 0 0 1-1.19 1.13.11.11 0 0 0-.05.1 9.09 9.09 0 0 1-.06 1.46 9.66 9.66 0 0 1-.85 2.92 9.44 9.44 0 0 1-1.77 2.59 8.77 8.77 0 0 1-4.51 2.51 9.79 9.79 0 0 1-1.83.22A9.27 9.27 0 0 1 7 19.52l-.08-.05a6.64 6.64 0 0 0 3.26-.47 6.53 6.53 0 0 0 1.56-.89z"
                        />
                    </g>
                </g>
            </svg>

        </div>
    )
}
const YoutubeIcon = () => {
    return (
        <div className="footer-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87">
                <g data-name="Layer 2">
                    <g data-name="Layer 1">
                        <rect width="28.87" height="28.87" fill="#fd3832" rx="6.48" ry="6.48" />
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M8 19.77a1.88 1.88 0 0 1-1.24-1.21c-.54-1.48-.7-7.66.34-8.88A2 2 0 0 1 8.46 9c2.79-.3 11.41-.26 12.4.1a1.94 1.94 0 0 1 1.22 1.17c.59 1.53.61 7.09-.08 8.56a1.89 1.89 0 0 1-.87.88c-1.04.52-11.75.51-13.13.06zm4.43-2.9l5-2.6-5-2.62z"
                        />
                    </g>
                </g>
            </svg>

        </div>
    )
}