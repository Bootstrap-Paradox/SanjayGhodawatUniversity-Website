import React from "react";

function Blob(props) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
            <defs>
                <clipPath id="image-x">

                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop offset="0%" stopColor="rgba(248, 117, 55, 1)"></stop>
                        <stop offset="100%" stopColor="rgba(255, 176.207, 46.152, 1)"></stop>
                    </linearGradient>
                    <path
                        fill="url(#sw-gradient)"
                        stroke="url(#sw-gradient)"
                        strokeWidth="0"
                        d="M21.8-37.2c6.1 2.9 10.3 9.6 12.9 16.4C37.2-14 38.2-7 39.4.7c1.2 7.6 2.5 16-.5 22.1-3 6.1-10.3 10-17.6 12.3C14.1 37.3 7.1 38-.4 38.6c-7.4.7-15.3 1.4-21.1-1.6-5.9-3.1-9.7-9.9-13.6-16.7-4-6.8-7.9-13.5-8.8-20.8-.8-7.2 1.5-14.9 5.7-21.3 4.1-6.4 10.1-11.4 16.8-13.9 6.7-2.5 14-2.5 21.7-2.9 7.6-.5 15.5-1.5 21.5 1.4z"
                        transform="translate(50 50)"
                        style={{
                            WebkitTransition: "all 0.3s ease 0s",
                            transition: "all 0.3s ease 0s",
                        }}
                    ></path>
                </clipPath>
            </defs>

            {props.children}
        </svg>
    );
    // return (
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
    //         <defs>

    //             <clipPath id="image-x">
    //                 <path id="path"
    //                     // fill="#474bff"
    //                     d="M427.5 282Q414 324 398 371t-65 54.5q-49 7.5-92.5 5T150 420q-47-8-83-43.5t-35-86q1-50.5 6.5-98T72 105q28-40 73.5-59.5t92-8.5q46.5 11 95 18.5t77.5 48q29 40.5 30 88.5t-12.5 90z"
    //                 ></path>
    //             </clipPath>
    //         </defs>
    //         {props.children}
    //     </svg>
    // );
}

export default Blob;