import styles from './Gallery.module.css';

const images = [
  {
    id: 1,
    src: "/pexels-andreahinojosa-16358751.webp",
    alt: "Embarcación en Baja California",
    caption: "Nuestras Embarcaciones"
  },
  {
    id: 2,
    src: "/pexels-fukajaz-9762762.webp",
    alt: "Avistamiento de ballenas grises",
    caption: "Encuentros Majestuosos"
  },
  {
    id: 3,
    src: "/pexels-irrabagon-35380337.webp",
    alt: "Buceo y Pesca con Arpón",
    caption: "Pesca Submarina"
  },
  {
    id: 4,
    src: "/pexels-irrabagon-35380338.webp",
    alt: "Vida Marina en el Mar de Cortés",
    caption: "Safari Marino"
  },
  {
    id: 5,
    src: "/pexels-moonpiczar-1759863.webp",
    alt: "Pesca Deportiva",
    caption: "Pesca Deportiva"
  },
  {
    id: 6,
    src: "/pexels-nicomarinb-28404793.webp",
    alt: "Atardecer en Puerto Chale",
    caption: "Atardeceres Inolvidables"
  },
  {
    id: 7,
    src: "/pexels-roodzn-37590228.webp",
    alt: "Paisaje costero Baja",
    caption: "Puerto Chale"
  },
  {
    id: 8,
    src: "/pexels-silvialus-31011163.webp",
    alt: "Naturaleza y mar de Cortés",
    caption: "Exploración Marina"
  },
  {
    id: 9,
    src: "/pexels-timon-cornelissen-241844481-12801528.webp",
    alt: "Mar y barcos",
    caption: "Flota de Aventura"
  },
  {
    id: 10,
    src: "/pexels-vero-andrade-10716903-7799763.webp",
    alt: "Navegación al atardecer",
    caption: "Puesta de Sol"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>Galería</h2>
        <div className={styles.goldLine}></div>
        
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={img.id} className={`${styles.imageWrapper} ${styles[`item${index + 1}`]}`}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.image}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className={styles.overlay}>
                <span className={styles.caption}>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
