'use client';

import { motion } from 'framer-motion';
import { Camera, Users, Star } from 'lucide-react';
import styles from './ValueCards.module.scss';

const services = [
  {
    id: 1,
    title: 'FASHION MODELING',
    icon: Camera,
    items: [
      'Runway Shows',
      'Editorial Shoots',
      'Fashion Campaigns',
      'Lookbook Photography'
    ]
  },
  {
    id: 2,
    title: 'COMMERCIAL MODELING',
    icon: Users,
    items: [
      'TV Commercials',
      'Print Advertising',
      'Product Endorsements',
      'Brand Campaigns'
    ]
  },
  {
    id: 3,
    title: 'SPECIALTY SERVICES',
    icon: Star,
    items: [
      'Event Hosting',
      'Trade Shows',
      'Promotional Events',
      'VIP Services'
    ]
  }
];

export default function ModelServices() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>OUR SERVICES</h2>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={styles.serviceCard}
            >
              <div className={styles.icon}>
                <service.icon size={32} color="#fff" />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <ul className={styles.serviceList}>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.serviceItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

