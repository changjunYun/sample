'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './ScrollyStory.module.scss';

const galleryItems = [
  { id: 1, title: 'Fashion Editorial', image: '/sample/5.jpg' },
  { id: 2, title: 'Commercial Shoot', image: '/sample/6.jpg' },
  { id: 3, title: 'Runway Show', image: '/sample/7.jpg' },
  { id: 4, title: 'Brand Campaign', image: '/sample/8.jpg' },
  { id: 5, title: 'Magazine Cover', image: '/sample/9.jpg' },
  { id: 6, title: 'Product Launch', image: '/sample/10.jpg' },
];

export default function ModelGallery() {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>MODEL GALLERY</h2>
        </motion.div>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={styles.galleryItem}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 25vw" 
                  priority={index === 0}
                  quality={85}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
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
          <button className={styles.ctaButton}>
            View All Photos <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

