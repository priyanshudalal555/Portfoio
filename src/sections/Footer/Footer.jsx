import React from 'react';
import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; Designed With ❤️ By Priyanshu Dalal.</p>
        <p>All rights reserved.</p>
    </section>
  )
}

export default Footer;