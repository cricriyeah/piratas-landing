'use client';
import { Compass, Anchor, Map } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './WhyUs.module.css';

const icons = [
  null,
  <Compass key="compass" className={styles.icon} strokeWidth={1.5} />,
  <Anchor key="anchor" className={styles.icon} strokeWidth={1.5} />,
  <Map key="map" className={styles.icon} strokeWidth={1.5} />,
];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className={styles.whyUs} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.grid}>
          {t.whyUs.stats.map((stat, idx) => (
            <div key={idx} className={styles.item} data-aos="zoom-in" data-aos-delay={idx * 150}>
              <div className={styles.visual}>
                {idx === 0 ? (
                  <span className={styles.value}>15+</span>
                ) : (
                  icons[idx]
                )}
              </div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.desc}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
