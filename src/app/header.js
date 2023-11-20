import React from "react";
import styles from "./page.module.css";

function Header() {
    return (
       <header>
            <div className={styles.header}>
                <div className={styles.header_wrap}>
                    <div className={styles.header_block}>
                        <a href="#">Liam Kilsdonk</a>
                    </div>
                    <div className={styles.header_nav}>
                        <nav>
                            <a href="#">About</a>
                            <a href="#">Projects</a>
                            <a href="#">Socials</a>
                        </nav>
                    </div>
                </div>
            </div>
       </header>
    );
}

export default Header;