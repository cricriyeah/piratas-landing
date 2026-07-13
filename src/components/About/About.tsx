'use client';
import { useLanguage } from '../../context/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left} data-aos="fade-right">
          <blockquote className={styles.quote}>
            {t.about.quote}
          </blockquote>
          <div className={styles.goldLine}></div>
        </div>
        <div className={styles.right} data-aos="fade-left">
          <h2 className={styles.title}>{t.about.title}</h2>
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
        </div>
      </div>
    </section>
  );
}
