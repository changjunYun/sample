'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './WorkShowcase.module.scss';

const portfolioItems = [
  {
    id: 1,
    category: 'FASHION',
    title: 'Vogue Editorial',
    model: 'Sarah Kim',
    image: '/sample/1.jpg'
  },
  {
    id: 2,
    category: 'COMMERCIAL',
    title: 'Luxury Brand Campaign',
    model: 'Emma Park',
    image: '/sample/2.jpg'
  },
  {
    id: 3,
    category: 'RUNWAY',
    title: 'Paris Fashion Week',
    model: 'Jessica Lee',
    image: '/sample/3.jpg'
  },
  {
    id: 4,
    category: 'EDITORIAL',
    title: 'Harper\u2019s Bazaar',
    model: 'Sophia Chen',
    image: '/sample/4.jpg'
  }
];

export default function ModelPortfolio() {
  return (
    <section className={styles.workSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>MODEL PORTFOLIO</h2>
          <p className={styles.description}>
            Discover our models&rsquo; latest work across fashion, commercial, and editorial projects.
            Each portfolio showcases the versatility and professionalism our models bring to every shoot.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={styles.workItem}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.image} 
                  alt={`${item.title} - ${item.category}`} 
                  fill 
                  sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                  className="object-cover" 
                  priority={index === 0}
                  quality={85}
                />
              </div>
              <div className={styles.overlay}>
                <div className={styles.workInfo}>
                  <div className={styles.category}>{item.category}</div>
                  <h3 className={styles.workTitle}>{item.title}</h3>
                  <div className={styles.modelName}>Model: {item.model}</div>
                  <div className={styles.viewProject}>
                    View Project <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.ctaSection}
        >
          <button className={styles.viewMoreButton}>
            View Full Portfolio <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

