import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    id: 'pesca-deportiva',
    nameEs: 'Pesca Deportiva',
    image: '/pescadeportiva.webp',
    description: 'Atrapa las especies más codiciadas de la región con equipo de primera y guías locales expertos.',
  },
  {
    id: 'avistamiento',
    nameEs: 'Avistamiento de Ballenas',
    image: '/ballenas.webp',
    description: 'Un encuentro íntimo y respetuoso con las ballenas grises en su hábitat natural.',
    badge: 'Temporada'
  },
  {
    id: 'pesca-arpon',
    nameEs: 'Pesca con Arpón',
    image: '/spearfishing.webp',
    description: 'Sumérgete y experimenta la adrenalina de la pesca submarina en aguas cristalinas.',
  },
  {
    id: 'safari',
    nameEs: 'Safari Marino',
    image: '/vidamarina.webp',
    description: 'Explora la biodiversidad de Baja: delfines, lobos marinos, aves y paisajes inolvidables.',
  }
];

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 374; // Ancho de la tarjeta (350px) + gap (24px)
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.flexHeader} data-aos="fade-up">
          <div className={styles.titleArea}>
            <h2 className={styles.title}>
              Nuestras <span className={styles.highlight}>Expediciones</span>
            </h2>
            <p className={styles.subtitle}>
              Selecciona tu nivel de adrenalina. Desde pesca deportiva de altura hasta encuentros cercanos con gigantes del océano.
            </p>
          </div>
        </div>

        <div className={styles.carouselWrapper} data-aos="fade-up" data-aos-delay="200">
          <div ref={carouselRef} className={styles.carousel}>
            {services.map((service, index) => (
              <div key={service.id} className={styles.card} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className={styles.cardImageWrapper}>
                  <img src={service.image} alt={service.nameEs} className={styles.cardImage} />
                  {service.badge && <span className={styles.badge}>{service.badge}</span>}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.nameEs}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <button className={styles.readMore}>
                    VER MÁS <ArrowRight className={styles.smallArrow} size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button 
            className={`${styles.navBtn} ${styles.prev}`}
            onClick={() => scroll('left')}
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className={`${styles.navBtn} ${styles.next}`}
            onClick={() => scroll('right')}
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
