'use client'
import React from "react";
import styles from "./page.module.css";
import Button from '@mui/material/Button';

function Landing() {

    const [color, setColor] = React.useState(0);

    return (
       <section>
        <section id={styles.space}></section>
        <div className={styles.landing_wrap}>
            <div className={styles.landing_left}>
                <h3>I'm <strong>Liam</strong> Kilsdonk</h3>
                <h1>Fullstack <strong>Developer</strong>.</h1>
                <h1>Designer.{color}</h1>
                <button
                    type="button"
                    onClick={() => setColor(color + 1)}
                >Blue</button>
                <Button variant="outlined" style={{ fontSize: '17px' }}>Outlined</Button>
            </div>
            <div className={styles.landing_right}>
                <img
                src="../Ellipse 1.png"
                alt="background_ellipse"
                />
            </div>
        </div>
       </section>
    );
}

export default Landing;