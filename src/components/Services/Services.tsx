'use client';
import Image from 'next/image';
import { MessageCircle, Fish, Anchor, Waves } from 'lucide-react';
import styles from './Services.module.css';

const WHATSAPP_NUMBER = "526121234567";

const primaryServices = [
  {
    id: 'safari',
    nameEs: 'Safari Marino',
    icon: <Anchor size={36} strokeWidth={1.5} />,
    image: '/safarimarino.webp',
    description: 'Explora la asombrosa biodiversidad de Baja California Sur en su estado más salvaje.',
    badge: 'Temporada: Jun — Oct',
    animals: ['Marlin', 'Delfines', 'Dorados', 'Ballena Jorobada', 'Lobo Marino'],
    whatsappMsg: 'Hola! Me interesa reservar un Safari Marino.',
  },
  {
    id: 'avistamiento',
    nameEs: 'Avistamiento de Ballenas',
    icon: <Waves size={36} strokeWidth={1.5} />,
    image: '/ballenas.webp',
    description: 'Un encuentro íntimo y respetuoso con las imponentes ballenas grises en su hábitat natural. Una experiencia de vida única disponible en temporada.',
    badge: 'Temporada: Enero',
    whatsappMsg: 'Hola! Me interesa el Avistamiento de Ballenas en enero.',
  },
];

const secondaryService = {
  id: 'pesca-deportiva',
  nameEs: 'Pesca Deportiva',
  image: '/pescadeportiva.webp',
  badge: 'Todo el año',
  description: 'Atrapa las especies más codiciadas del Pacífico con equipo de primer nivel y guías locales expertos. Una experiencia de adrenalina pura en aguas privilegiadas.',
  whatsappMsg: 'Hola! Me interesa reservar una expedición de Pesca Deportiva.',
};

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <span className={styles.eyebrow}>Lo que ofrecemos</span>
          <h2 className={styles.title}>
            Nuestras <span className={styles.highlight}>Expediciones</span>
          </h2>
          <p className={styles.subtitle}>
            Elige tu aventura. Comunícate por WhatsApp y personalizamos tu experiencia en Puerto Chale.
          </p>
        </div>

        {/* Primary Services — two large cards */}
        <div className={styles.primaryGrid} data-aos="fade-up" data-aos-delay="150">
          {primaryServices.map((service) => (
            <div key={service.id} className={styles.primaryCard}>
              <div className={styles.cardBg}>
                <Image src={service.image} alt={service.nameEs} fill className={styles.cardBgImage} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className={styles.cardOverlay} />
              <div className={styles.cardBody}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.nameEs}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                {service.animals && (
                  <ul className={styles.animalList}>
                    {service.animals.map((a) => (
                      <li key={a} className={styles.animalItem}>
                        <span className={styles.animalDot} />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
                {service.badge && <span className={styles.badge}>{service.badge}</span>}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waBtn}
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  RESERVAR POR WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Service — whale watching horizontal card */}
        <div className={styles.secondaryRow} data-aos="fade-up" data-aos-delay="300">
          <div className={styles.secondaryCard}>
            <div className={styles.secondaryImage}>
              <Image src={secondaryService.image} alt={secondaryService.nameEs} fill className={styles.cardBgImage} sizes="(max-width: 900px) 100vw, 400px" />
            </div>
            <div className={styles.secondaryContent}>
              <span className={styles.secondaryBadge}>{secondaryService.badge}</span>
              <h3 className={styles.secondaryTitle}>{secondaryService.nameEs}</h3>
              <p className={styles.secondaryDesc}>{secondaryService.description}</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(secondaryService.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <MessageCircle size={18} strokeWidth={2} />
                CONSULTAR DISPONIBILIDAD
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
