import { Compass, Anchor, Map } from 'lucide-react';
import styles from './WhyUs.module.css';

const stats = [
  {
    value: "15+",
    label: "Años de experiencia",
    description: "Navegando las aguas de Baja Sur"
  },
  {
    icon: <Compass className={styles.icon} strokeWidth={1.5} />,
    label: "Guías Expertos",
    description: "Conocimiento local profundo"
  },
  {
    icon: <Anchor className={styles.icon} strokeWidth={1.5} />,
    label: "Embarcaciones",
    description: "Certificadas y seguras"
  },
  {
    icon: <Map className={styles.icon} strokeWidth={1.5} />,
    label: "Aventuras",
    description: "Experiencias inolvidables"
  }
];

export default function WhyUs() {
  return (
    <section className={styles.whyUs} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.item} data-aos="zoom-in" data-aos-delay={idx * 150}>
              <div className={styles.visual}>
                {stat.value ? (
                  <span className={styles.value}>{stat.value}</span>
                ) : (
                  stat.icon
                )}
              </div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.desc}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
