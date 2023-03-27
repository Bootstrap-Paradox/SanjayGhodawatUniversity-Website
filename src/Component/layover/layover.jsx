import React, { useState, useEffect, useContext } from 'react';
import { SUPERCONTEXT } from '../../App';

export default function Layover(props) {

    const [superState, superDispatch] = useContext(SUPERCONTEXT);

    useEffect(() => {
        document.body.style.overflow = "hidden";
    })

    return (
        <div className="layover" onClick={
            () => {
                superDispatch({ type: "CLOSE-LAYOVER", payload: undefined })
                document.body.style.overflow = "auto";
            }
        }>
            <div className="layover-content">
                {superState.layover.component ? superState.layover.component : null}
            </div>
        </div>
    )
}