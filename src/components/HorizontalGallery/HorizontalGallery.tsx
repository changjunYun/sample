'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './HorizontalGallery.module.scss';
import { GALLERY_IMAGES } from './images';

export default function HorizontalGallery() {

  return (
    <section className={styles.gallerySection}>
      <div className={styles.stage}>
        <div className={styles.titleLayer}>
          <h2 className={styles.title}>HORIZONTAL GALLERY</h2>
          <p className={styles.subtitle}>Explore our creative work</p>
        </div>

        <div className={styles.swiperRoot}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            keyboard={{ enabled: false }}
            slidesPerView={'auto'}
            spaceBetween={0}
            speed={450}
          >
            {GALLERY_IMAGES.map((image, index) => (
              <SwiperSlide key={image.id} className={styles.slide}>
                <div className={styles.slideItem}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 480px) 80vw, (max-width: 1024px) 50vw, 40vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}


