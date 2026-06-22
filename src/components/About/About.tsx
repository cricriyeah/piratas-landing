import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left} data-aos="fade-right">
          <blockquote className={styles.quote}>
            "Nuestra pasión es compartir la belleza cruda y auténtica del Océano Pacífico y Bahía Magdalena."
          </blockquote>
          <div className={styles.goldLine}></div>
        </div>
        <div className={styles.right} data-aos="fade-left">
          <h2 className={styles.title}>Sobre Nosotros</h2>
          <p className={styles.text}>
            Ubicados en el corazón de Puerto Chale, Baja California Sur, en <strong>Piratas Adventures</strong> ofrecemos más que simples recorridos. Somos una familia local dedicada a brindar experiencias marítimas genuinas y memorables.
          </p>
          <p className={styles.text}>
            Con años de experiencia navegando estas aguas, conocemos los rincones secretos donde la vida marina prospera. Ya sea que busques la emoción de la pesca deportiva de primer nivel, o la aventura de un safari marino descubriendo la asombrosa biodiversidad de la Baja, te llevamos a vivir la verdadera esencia del mar.
          </p>
        </div>
      </div>
    </section>
  );
}
