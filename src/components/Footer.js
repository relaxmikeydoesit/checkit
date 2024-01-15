import React from "react";
import { Image } from "semantic-ui-react";
import styles from '@/styles/Footer.module.css';

export default function Footer() {

    return (
    <>
    <div basic color='black' className={styles.footer}>
    <div className={styles.footerText}>
        <p>&copy;2024 Mikey Lee. All rights reserved.<br />How Did I Do?</p>
    <div data-tf-live="01HK8DH54CN4TGX59AK8V2SF8N"></div><script src="//embed.typeform.com/next/embed.js"></script> 
    </div>
    <Image href="https://relaxmikeydoesit.tech" src='relaxmikeydoesitfooter.png'/>
    <Image href="https://github.com/relaxmikeydoesit/" src='github-mark-white.png' size="small"/>
    </div>
    </>
    );
}