'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // 커튼이 3번 스크롤에 완전히 열리도록 조정
  const leftX = useTransform(scrollYProgress, [0, 1.0], ['0%', '-200%']);
  const rightX = useTransform(scrollYProgress, [0, 1.0], ['0%', '200%']);
  
  // 텍스트가 빠르게 사라지도록
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -12]);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div className={styles.stage}>
        {/* 배경 이미지 */}
        <div className={styles.backgroundImage}>
          <Image 
            src="/sample/1.jpg" 
            alt="Hero Background" 
            fill 
            priority 
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
          />
        </div>

        {/* 커튼 패널들 */}
        <motion.div 
          aria-hidden 
          className={styles.leftPanel} 
          style={{ x: leftX, willChange: 'transform' }} 
        />
        <motion.div 
          aria-hidden 
          className={styles.rightPanel} 
          style={{ x: rightX, willChange: 'transform' }} 
        />

        {/* 전경 콘텐츠 */}
        <div className={styles.foregroundContent}>
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY, willChange: 'transform, opacity' }} 
            className={styles.textContainer}
          >
            <h1 className={styles.title}>MODEL AGENCY</h1>
            <p className={styles.subtitle}>Scroll to reveal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
