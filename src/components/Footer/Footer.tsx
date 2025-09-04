'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.aboutSection}
          >
            <h3 className={styles.sectionTitle}>MODEL AGENCY</h3>
            <p className={styles.locationInfo}>
              Leading model agency specializing in fashion, commercial, and editorial modeling. 
              We connect exceptional talent with outstanding opportunities in the fashion and advertising industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className={styles.sectionTitle}>SERVICES</h3>
            <div className={styles.navLinks}>
              <a href="#portfolio" className={styles.navLink}>Portfolio</a>
              <a href="#services" className={styles.navLink}>Services</a>
              <a href="#models" className={styles.navLink}>Models</a>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.sectionTitle}>LOCATION</h3>
            <div className={styles.locationInfo}>
              <p>Seoul, South Korea</p>
              <p>New York, USA</p>
              <p>Paris, France</p>
              <p>Tokyo, Japan</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className={styles.sectionTitle}>FOLLOW US</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>YouTube</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.copyright}
        >
          <p>&copy; 2024 Model Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
