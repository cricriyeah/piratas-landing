import styles from './Hero.module.css';

export default function Hero() {
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
          Safari Marino<br /> <span className={styles.highlight}>&amp; Avistamiento de Ballenas</span>
        </h1>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="400">
          Las mejores expediciones de Bahía Almejas y Puerto Chale. Comunícate por WhatsApp y reserva tu aventura en Puerto Chale, Baja California Sur.
        </p>
        <div className={styles.actions} data-aos="fade-up" data-aos-delay="600">
          <a href="https://wa.me/526121234567" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            Reserva por WhatsApp
          </a>
          <a href="#gallery" className={styles.secondaryBtn}>
            Ver Galería
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
}
