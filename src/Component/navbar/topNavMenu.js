import React, { useContext } from 'react';
import { SUPERCONTEXT } from '../../App';
import { DeanDesk } from '../components';
import { topNavMenus } from './menu';

export default function TopNavMenu() {

    const [superState, superDispatch] = useContext(SUPERCONTEXT);

    return (
        <section className="top-nav-menu-x navbar-light bg-light">
            <p className="announce" onClick={() => {
                superDispatch({ type: "TRIGGER-LAYOVER", payload: <DeanDesk /> })

            }}>Announcements</p>
            {Object.entries(topNavMenus).map(([topMenu, topMenuLink], index) => {
                return (
                    <p key={index} onClick={() => {
                        window.location.href = topMenuLink
                    }}>{topMenu}</p>
                )
            })}


        </section>
    )
}