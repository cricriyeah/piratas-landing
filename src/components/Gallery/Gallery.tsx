'use client';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Gallery.module.css';

const imageSrcs = [
  '/gallery-1.webp',
  '/gallery-2.webp',
  '/gallery-3.webp',
  '/gallery-4.webp',
  '/gallery-5.webp',
  '/gallery-6.webp',
  '/gallery-7.webp',
  '/gallery-8.webp',
  '/gallery-9.webp',
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t.gallery.title}</h2>
        <div className={styles.goldLine}></div>
        
        <div className={styles.grid}>
          {imageSrcs.map((src, index) => {
            const caption = t.gallery.images[index];
            return (
              <div key={index} className={`${styles.imageWrapper} ${styles[`item${index + 1}`]}`}>
                <Image
                  src={src}
                  alt={caption}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <span className={styles.caption}>{caption}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
