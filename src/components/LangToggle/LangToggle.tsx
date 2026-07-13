'use client';
import { useLanguage } from '../../context/LanguageContext';
import styles from './LangToggle.module.css';

export default function LangToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      className={styles.fab}
      onClick={toggleLocale}
      aria-label="Toggle language"
    >
      <span className={locale === 'es' ? styles.active : styles.inactive}>ES</span>
      <span className={styles.sep}>/</span>
      <span className={locale === 'en' ? styles.active : styles.inactive}>EN</span>
    </button>
  );
}
