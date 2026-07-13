'use client';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Image 
              src="/logopirata.webp" 
              alt="Piratas Adventures" 
              width={180} 
              height={70} 
              className={styles.logoImage}
            />
            <p className={styles.tagline}>{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t.footer.explore}</h4>
              <a href="#services" className={styles.link}>{t.footer.expeditions}</a>
              <a href="#about" className={styles.link}>{t.footer.about}</a>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t.footer.company}</h4>
              <a href="#gallery" className={styles.link}>{t.footer.gallery}</a>
              <a href="#contact" className={styles.link}>{t.footer.contact}</a>
            </div>
          </div>

          {/* Copyright Area */}
          <div className={styles.copyrightArea}>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} PIRATAS ADVENTURES. {t.footer.copyright}
            </div>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>{t.footer.privacy}</a>
              <a href="#" className={styles.legalLink}>{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
