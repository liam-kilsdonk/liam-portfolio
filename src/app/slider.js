'use client'
//import React from 'react';
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';

function Slider(){
    return(
        <section>
            <div className={styles.slider_wrap}>
               <div className={styles.slider_top}>
                <span className={styles.slider_right}>Innovation</span>
                <span className={styles.slider_right}>Creativity</span>
                <span className={styles.slider_right}>Efficiency</span>
                <span className={styles.slider_right}>Problem-solving</span>
                <span className={styles.slider_right}>Collaboration</span>
                <span className={styles.slider_right}>Quality</span>
                <span className={styles.slider_right}>Precision</span>
                <span className={styles.slider_right}>Agility</span>
                <span className={styles.slider_right}>Excellence</span>
                <span className={styles.slider_right}>Reliability</span>
                <span className={styles.slider_right}>Adaptability</span>
                
               </div>
               <div className={styles.slider_top}>
                <span className={styles.slider_left}>Design</span>
                <span className={styles.slider_left}>lorem</span>
                <span className={styles.slider_left}>hello</span>
                <span className={styles.slider_left}>hello</span>
                <span className={styles.slider_left}>Design</span>
                <span className={styles.slider_left}>lorem</span>
                <span className={styles.slider_left}>hello</span>
                <span className={styles.slider_left}>hello</span>
                <span className={styles.slider_left}>Design</span>
                <span className={styles.slider_left}>lorem</span>
                <span className={styles.slider_left}>hello</span>
               </div>

               <div className={styles.slider_top}>
                <span className={styles.slider_right}>Design</span>
                <span className={styles.slider_right}>lorem</span>
                <span className={styles.slider_right}>hello</span>
                <span className={styles.slider_right}>hello</span>
                <span className={styles.slider_right}>Design</span>
                <span className={styles.slider_right}>lorem</span>
                <span className={styles.slider_right}>hello</span>
                <span className={styles.slider_right}>hello</span>
                <span className={styles.slider_right}>Design</span>
                <span className={styles.slider_right}>lorem</span>
                <span className={styles.slider_right}>hello</span>
                
               </div>
               
               {/* <div className={styles.slider_middle}>
                 <span className={styles.slider_left}>hello</span>
                 <span className={styles.slider_left}>hello</span>
                 <span className={styles.slider_left}>hello</span>
                 <span className={styles.slider_left}>hello</span>
               </div>
               <div className={styles.slider_bottom}>
               <span className={styles.slider_right}>hello</span>
                <span className={styles.slider_right}>hello</span>
                <span className={styles.slider_right}>hello</span>
                <span className={styles.slider_right}>hello</span>
               </div>
               <div id={styles.sliderContainer}>
                    <div class={styles.sliderText} id={styles.slider_test_1}>Your Text Here</div>
                    <div class={styles.sliderText} id={styles.slider_test_2}>Your Text Here</div>
                </div> */}
            </div>
        </section>
    );
};

export default Slider;