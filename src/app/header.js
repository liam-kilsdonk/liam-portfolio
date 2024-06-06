import React from "react";
import styles from "./page.module.css";

function Header() {
    return (
       <header>
            <div className={styles.header}>
                <div className={styles.header_wrap}>
                    <div className={styles.header_block}>
                        <img
                        src="../Union.png"
                        alt="background_ellipse"
                        height="20px"
                        />
                    </div>
                    <div className={styles.header_nav}>
                        <nav>
                            <a href="#about">About</a>
                            <a href="#blog">Projects</a>
                            <a href="#">Socials</a>
                        </nav>
                    </div>
                </div>
            </div>
       </header>
    );
}

export default Header;