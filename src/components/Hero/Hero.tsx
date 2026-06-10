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
          Descubre el <br /> <span className={styles.highlight}>Mar de Cortés</span>
        </h1>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="400">
          Explora paisajes inolvidables y vive encuentros cercanos con la vida marina en Puerto Chale, Baja California Sur.
        </p>
        <div className={styles.actions} data-aos="fade-up" data-aos-delay="600">
          <a href="#services" className={styles.primaryBtn}>
            Reserva Ahora
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
