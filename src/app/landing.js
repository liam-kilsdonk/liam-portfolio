import React from "react";
import styles from "./page.module.css";

function Landing() {
    return (
       <section>
        <div className={styles.landing_wrap}>
            <div className={styles.landing_left}>
                <h3>I'm <strong>Liam</strong> Kilsdonk</h3>
                <h1>Fullstack <strong>Developer</strong>.</h1>
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