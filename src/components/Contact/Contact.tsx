'use client';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Contact.module.css';

const WHATSAPP_NUMBER = "526121234567";

export default function Contact() {
  const { t } = useLanguage();
  const WHATSAPP_MSG = encodeURIComponent(t.contact.whatsappMsg);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-up">
          <span className={styles.eyebrow}>{t.contact.eyebrow}</span>
          <h2 className={styles.title}>{t.contact.title}<br /><span className={styles.highlight}>{t.contact.titleHighlight}</span></h2>
          <div className={styles.goldLine}></div>
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: t.contact.text }} />

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <MessageCircle className={styles.waIcon} strokeWidth={2} />
            {t.contact.cta}
          </a>

          <div className={styles.infoGroup}>
            <div className={styles.infoItem}>
              <MapPin size={18} className={styles.infoIcon} />
              <div>
                <span className={styles.infoLabel}>{t.contact.locationLabel}</span>
                <p className={styles.infoText}>{t.contact.locationValue}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Clock size={18} className={styles.infoIcon} />
              <div>
                <span className={styles.infoLabel}>{t.contact.scheduleLabel}</span>
                <p className={styles.infoText}>{t.contact.scheduleValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
