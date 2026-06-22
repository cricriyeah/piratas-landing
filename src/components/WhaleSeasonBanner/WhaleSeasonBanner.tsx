import { Anchor } from 'lucide-react';
import styles from './WhaleSeasonBanner.module.css';

export default function WhaleSeasonBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.iconWrapper} data-aos="fade-up" data-aos-delay="200">
          <Anchor className={styles.icon} strokeWidth={1.5} size={64} />
        </div>
        <h2 className={styles.title} data-aos="fade-up" data-aos-delay="300">¿Listo para la <span className={styles.highlight}>Aventura</span>?</h2>
        <p className={styles.text} data-aos="fade-up" data-aos-delay="400">
          Únete a nuestras expediciones de Safari Marino y Avistamiento de Ballenas. Personalizamos tu experiencia en Puerto Chale.
        </p>
        <a href="https://wa.me/526121234567" target="_blank" rel="noopener noreferrer" className={styles.button} data-aos="fade-up" data-aos-delay="500">
          RESERVAR POR WHATSAPP
        </a>
      </div>
    </section>
  );
}
