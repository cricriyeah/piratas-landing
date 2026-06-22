'use client';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import styles from './Contact.module.css';

const WHATSAPP_NUMBER = "526121234567";
const WHATSAPP_MSG = encodeURIComponent("Hola! Quiero reservar una expedición de Safari Marino o Avistamiento de Ballenas. ¿Pueden darme más información?");

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-up">
          <span className={styles.eyebrow}>¿Listo para zarpar?</span>
          <h2 className={styles.title}>Reserva tu<br /><span className={styles.highlight}>Expedición</span></h2>
          <div className={styles.goldLine}></div>
          <p className={styles.text}>
            La forma más rápida de reservar es directamente por <strong>WhatsApp</strong>. Personalizamos cada expedición de <strong>Safari Marino</strong> y <strong>Avistamiento de Ballenas</strong> según tus fechas y preferencias.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <MessageCircle className={styles.waIcon} strokeWidth={2} />
            RESERVAR POR WHATSAPP AHORA
          </a>

          <div className={styles.infoGroup}>
            <div className={styles.infoItem}>
              <MapPin size={18} className={styles.infoIcon} />
              <div>
                <span className={styles.infoLabel}>Ubicación</span>
                <p className={styles.infoText}>Puerto Chale, Baja California Sur</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Clock size={18} className={styles.infoIcon} />
              <div>
                <span className={styles.infoLabel}>Horario</span>
                <p className={styles.infoText}>Lun – Dom: 6:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
