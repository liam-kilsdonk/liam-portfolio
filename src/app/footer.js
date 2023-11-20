import React from "react";
import styles from "./page.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer_wrap}>
          <div className={styles.footer_block}>
            <h3>LK™</h3>
          </div>
          <div className={styles.footer_block}>
            <h3>Liam Kilsdonk</h3>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Socials</a>
          </div>
          <div className={styles.footer_block}>
            <h3>Zakelijk</h3>        
            <a href="#">Algemene voorwaarden</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className={styles.footer_block}>
            <h3>Contact</h3>
            <p>Royal Signature</p>
            <p>de Vlotkampweg</p>
            <p>246545AG Nijmegen</p>
            <p>Info@LiamKilsdonk.nl</p>
            <p>0612345678</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
