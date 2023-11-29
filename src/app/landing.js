import React from "react";
import styles from "./page.module.css";

function Landing() {
    return (
       <section>
        <div className={styles.landing_wrap}>
            <div className={styles.landing_left}>
                <h3>I'm Liam Kilsdonk</h3>
                <h1>Fullstack <strong>Developer</strong>.</h1>
            </div>
            <div className={styles.landing_right}>
                <svg xmlns="http://www.w3.org/2000/svg" width="603" height="400.13" viewBox="0 0 991 665" fill="none">
                <g filter="url(#filter0_d_228_92)">
                    <path d="M980 183.627C980 296.988 761.577 640.248 631.425 640.248C501.274 640.248 11 677.19 11 563.829C11 450.468 261.013 3 391.165 3C521.316 3 980 70.2663 980 183.627Z" fill="url(#paint0_linear_228_92)"/>
                </g>
                <defs>
                    <filter id="filter0_d_228_92" x="0" y="0" width="991" height="665" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="8"/>
                    <feGaussianBlur stdDeviation="5.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_92"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_92" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_228_92" x1="980.178" y1="325.098" x2="11" y2="325.098" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#590D22"/>
                    <stop offset="1" stop-color="#A4133C"/>
                    </linearGradient>
                </defs>
                </svg>
            </div>
        </div>
       </section>
    );
}

export default Landing;