import React from 'react';
import styles from './page.module.css';

function Slider(){
    return(
        <section>
            <div className={styles.slider_wrap}>
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
               <div className={styles.slider_middle}>
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
                </div>
            </div>
        </section>
    );
};

export default Slider;