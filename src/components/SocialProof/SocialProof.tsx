'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './SocialProof.module.scss';

const testimonial = {
  quote: 'Working with this model agency has been exceptional. Their models are not only stunning but incredibly professional. They consistently deliver outstanding results that exceed our creative vision and brand expectations.',
  author: 'MICHAEL CHEN',
  position: 'CREATIVE DIRECTOR — LUXURY FASHION HOUSE',
};

export default function ModelTestimonials() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>CLIENT TESTIMONIALS</h2>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.testimonial}
        >
          <div className={styles.quoteIcon}>
            <Quote size={48} />
          </div>
          <blockquote className={styles.quote}>
            &quot;{testimonial.quote}&quot;
          </blockquote>
          <div className={styles.author}>
            <div className={styles.authorName}>{testimonial.author}</div>
            <div className={styles.authorPosition}>{testimonial.position}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

