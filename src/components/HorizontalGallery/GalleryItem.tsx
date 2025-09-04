'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './HorizontalGallery.module.scss';
import type { GalleryImage } from './images';

export function GalleryItem({ image, priority }: { image: GalleryImage; priority?: boolean }) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  const containerStyle = useMemo(() => {
    // 가변 폭: 이미지 비율에 맞춰 너비가 높이에 비례해 자동 결정되도록
    // 높이는 부모 레이아웃에 의해 결정되므로, 여기서는 비율 지정만
    return {
      aspectRatio: aspectRatio ?? undefined,
      height: '45vh',
    } as React.CSSProperties;
  }, [aspectRatio]);

  return (
    <motion.div className={styles.galleryItem} style={containerStyle}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        style={{ objectFit: 'contain', objectPosition: 'center' }}
        draggable={false}
        priority={priority}
        sizes="(max-width: 480px) 80vw, (max-width: 1024px) 60vw, 40vw"
        quality={85}
        onLoad={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          if (img.naturalWidth && img.naturalHeight) {
            setAspectRatio(img.naturalWidth / img.naturalHeight);
          }
        }}
      />
    </motion.div>
  );
}


