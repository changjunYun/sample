'use client';

import { motion } from 'framer-motion';
import styles from './Header.module.scss';

export default function Header() {
  const navItems = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: 'easeOut' }}
      className={styles.header}
    >
      <div className={styles.container}>
        <div className={styles.nav}>
          <motion.div whileHover={{ scale: 1.05 }} className={styles.logo}>
            <div className={styles.logoIcon}>M</div>
            <span>MODEL AGENCY</span>
          </motion.div>

          <nav className={styles.navLinks}>
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={styles.navLink}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
          >
            Book Model
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

