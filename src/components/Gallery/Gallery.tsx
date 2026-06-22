import Image from 'next/image';
import styles from './Gallery.module.css';

const images = [
  {
    id: 1,
    src: "/gallery-1.webp",
    alt: "Aventura en el Pacífico",
    caption: "Aventura en el Pacífico"
  },
  {
    id: 2,
    src: "/gallery-2.webp",
    alt: "Nuestra Flota",
    caption: "Nuestra Flota"
  },
  {
    id: 3,
    src: "/gallery-3.webp",
    alt: "Exploración Marina",
    caption: "Exploración Marina"
  },
  {
    id: 4,
    src: "/gallery-4.webp",
    alt: "Safari Marino",
    caption: "Safari Marino"
  },
  {
    id: 5,
    src: "/gallery-5.webp",
    alt: "Encuentros Majestuosos",
    caption: "Encuentros Majestuosos"
  },
  {
    id: 6,
    src: "/gallery-6.webp",
    alt: "Puerto Chale",
    caption: "Puerto Chale"
  },
  {
    id: 7,
    src: "/gallery-7.webp",
    alt: "Paisaje Costero",
    caption: "Paisaje Costero"
  },
  {
    id: 8,
    src: "/gallery-8.webp",
    alt: "Vida Marina",
    caption: "Vida Marina"
  },
  {
    id: 9,
    src: "/gallery-9.webp",
    alt: "Puesta de Sol",
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
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
