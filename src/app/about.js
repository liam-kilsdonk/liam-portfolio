'use client'
import React from "react";
import styles from "./page.module.css";

function About() {
  return (
    <section id="about">
        <div className={styles.about_wrap}>
            <div className={styles.about_up}>
                <div className={styles.about_up_left}>
                  <h3>About me</h3>
                  <br></br>
                    <p>My name is Liam, and I'm a software developer based in the Netherlands. I'm currently in my third year of the software developer course, with one more year to go. I have knowledge in a variety of programming languages and frameworks, from Java to Laravel, but I also have an eye for design. Initially, my main focus was on front-end development, but now I'm actively acquiring the necessary skills for building back-end applications, including APIs, so I can call myself a <strong>full-stack developer</strong>. In my spare time, I work out and work on business ideas to improve my coding skills. I've built and designed this website myself; I hope you like it.
                      <br></br>
                    PS: Below is the process/flowchart I used to build it.</p>
                </div>
                <div className={styles.about_up_right}>
                
                </div>
            </div>
            {/* <div className={styles.about_down}>
              <img
                  src="../flow-chart.png"
                  alt="flow-chart"
                />
            </div> */}
        </div>
    </section>
  );
}

export default About;
