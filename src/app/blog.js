'use client';
import React from "react";
import styles from "./page.module.css";

function Blog() {


    return (
       <section id="blog">
            <div className={styles.Blog_wrap}>
                <div className={styles.Blog_content}>
                    <div className={styles.Blog_picture}>
                        picture
                    </div>
                    <div className={styles.Blog_text}>
                        lorem ipsum
                    </div>
                </div>
                <div className={styles.Blog_content}></div>
                <div className={styles.Blog_content}></div>
                <div className={styles.Blog_content}></div>
                <div className={styles.Blog_content}></div>
                <div className={styles.Blog_content}></div>
            </div>
       </section>
    );
}

export default Blog;