'use client';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <video
          src="/video.webm"
          className={styles.image}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          {t.hero.title1}<br /> <span className={styles.highlight}>{t.hero.title2}</span>
        </h1>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="400">
          {t.hero.subtitle}
        </p>
        <div className={styles.actions} data-aos="fade-up" data-aos-delay="600">
          <a href="https://wa.me/526121234567" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            {t.hero.ctaPrimary}
          </a>
          <a href="#gallery" className={styles.secondaryBtn}>
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
}
