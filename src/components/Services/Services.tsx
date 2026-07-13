'use client';
import Image from 'next/image';
import { MessageCircle, Anchor, Waves } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Services.module.css';

const WHATSAPP_NUMBER = "526121234567";

const serviceIcons = [
  <Anchor key="safari" size={36} strokeWidth={1.5} />,
  <Waves key="avistamiento" size={36} strokeWidth={1.5} />,
];

const serviceImages = ['/safarimarino.webp', '/ballenas.webp'];
const secondaryImage = '/pescadeportiva.webp';

export default function Services() {
  const { t } = useLanguage();
  const { primary, secondary } = t.services;

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <span className={styles.eyebrow}>{t.services.eyebrow}</span>
          <h2 className={styles.title}>
            {t.services.title} <span className={styles.highlight}>{t.services.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>{t.services.subtitle}</p>
        </div>

        {/* Primary Services — two large cards */}
        <div className={styles.primaryGrid} data-aos="fade-up" data-aos-delay="150">
          {primary.map((service, idx) => (
            <div key={idx} className={styles.primaryCard}>
              <div className={styles.cardBg}>
                <Image src={serviceImages[idx]} alt={service.name} fill className={styles.cardBgImage} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className={styles.cardOverlay} />
              <div className={styles.cardBody}>
                <div className={styles.cardIcon}>{serviceIcons[idx]}</div>
                <h3 className={styles.cardTitle}>{service.name}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                {'animals' in service && service.animals && (
                  <ul className={styles.animalList}>
                    {service.animals.map((a) => (
                      <li key={a} className={styles.animalItem}>
                        <span className={styles.animalDot} />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
                {service.badge && <span className={styles.badge}>{service.badge}</span>}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waBtn}
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  {t.services.reserveWhatsapp}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Service — sport fishing horizontal card */}
        <div className={styles.secondaryRow} data-aos="fade-up" data-aos-delay="300">
          <div className={styles.primaryCard} style={{ height: '460px' }}>
            <div className={styles.cardBg}>
              <Image src={secondaryImage} alt={secondary.name} fill className={styles.cardBgImage} sizes="100vw" />
            </div>
            <div className={styles.cardOverlay} />
            <div className={styles.cardBody}>
              <span className={styles.badge} style={{ marginBottom: '0.8rem' }}>{secondary.badge}</span>
              <h3 className={styles.cardTitle}>{secondary.name}</h3>
              <p className={styles.cardDesc} style={{ maxWidth: '600px' }}>{secondary.description}</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(secondary.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <MessageCircle size={18} strokeWidth={2} />
                {t.services.checkAvailability}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
