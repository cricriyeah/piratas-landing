'use client';
import { Anchor } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './WhaleSeasonBanner.module.css';

export default function WhaleSeasonBanner() {
  const { t } = useLanguage();

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.iconWrapper} data-aos="fade-up" data-aos-delay="200">
          <Anchor className={styles.icon} strokeWidth={1.5} size={64} />
        </div>
        <h2 className={styles.title} data-aos="fade-up" data-aos-delay="300">
          {t.banner.title1} <span className={styles.highlight}>{t.banner.titleHighlight}</span>{t.banner.title2}
        </h2>
        <p className={styles.text} data-aos="fade-up" data-aos-delay="400">
          {t.banner.text}
        </p>
        <a
          href="https://wa.me/526121234567"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {t.banner.cta}
        </a>
      </div>
    </section>
  );
}
