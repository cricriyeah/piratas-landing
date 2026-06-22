import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
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
            <p className={styles.tagline}>Explorando los rincones más hermosos de Bahía Magdalena con guías locales.</p>
          </div>

          {/* Links */}
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Explorar</h4>
              <a href="#services" className={styles.link}>Expediciones</a>
              <a href="#about" className={styles.link}>Nosotros</a>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Compañía</h4>
              <a href="#gallery" className={styles.link}>Galería</a>
              <a href="#contact" className={styles.link}>Contacto</a>
            </div>
          </div>

          {/* Copyright Area */}
          <div className={styles.copyrightArea}>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} PIRATAS ADVENTURES. TODOS LOS DERECHOS RESERVADOS.
            </div>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
