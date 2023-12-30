import React from "react";
import styles from "./page.module.css";

function Bottom() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className={styles.bottom}>
            <p>Copyright © {year} Liam Kilsdonk</p>
        </div>
    );
}

export default Bottom;