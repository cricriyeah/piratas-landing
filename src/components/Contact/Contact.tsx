'use client';
import { MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const whatsappNumber = "526121234567"; // Default placeholder
  
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-up">
          <h2 className={styles.title}>Planifica tu Aventura</h2>
          <div className={styles.goldLine}></div>
          <p className={styles.text}>
            ¿Listo para explorar la belleza de Baja California Sur? Contáctanos para personalizar tu experiencia en Puerto Chale.
          </p>
          
          <div className={styles.infoGroup}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Ubicación</span>
              <p className={styles.infoText}>Puerto Chale, Baja California Sur, México</p>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Horario</span>
              <p className={styles.infoText}>Lunes a Domingo: 6:00 AM - 6:00 PM</p>
            </div>
          </div>

          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <MessageCircle className={styles.waIcon} strokeWidth={2} />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
