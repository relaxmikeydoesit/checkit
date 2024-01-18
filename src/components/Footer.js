import React from "react";
import { Image } from "semantic-ui-react";
import styles from '@/styles/Footer.module.css';

export default function Footer() {

    return (
    <>
    <div basic color='black' className={styles.footer}>
    <div className={styles.footerText}>
        <p>&copy;2024 Mikey Lee. <br /> All rights reserved.</p>
    </div>
    <div className={styles.footerIcons}>
    <Image href="https://relaxmikeydoesit.tech" src='relaxmikeydoesitfooter.png' alt='portfolio link'/>
    <Image href="https://github.com/relaxmikeydoesit/" src='github-mark-white.png' size="small" alt='github link'/>
    <Image href="https://hihello.me/p/080ffd86-d6da-43ff-985c-c3282a71efa4" src='hihelloQR.png' size="small" alt='link to digital business card' />
    </div>
    </div>
    </>
    );
}