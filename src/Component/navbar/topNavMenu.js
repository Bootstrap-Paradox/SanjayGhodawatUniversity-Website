import React from 'react';
import { topNavMenus } from './menu';

export default function TopNavMenu() {
    return (
        <section className="top-nav-menu-x navbar-light bg-light">

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