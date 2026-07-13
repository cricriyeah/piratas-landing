'use client';
import styles from './WhatsAppFab.module.css';

const WHATSAPP_NUMBER = "526121234567";
const WHATSAPP_MSG = encodeURIComponent("Hola! Quiero información sobre las expediciones de Piratas Adventures.");

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Contactar por WhatsApp"
    >
      {/* Official WhatsApp SVG icon */}
      <svg
        className={styles.icon}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M16.004 2C8.281 2 2 8.28 2 16c0 2.469.648 4.785 1.781 6.793L2 30l7.434-1.742A13.946 13.946 0 0016.004 30C23.719 30 30 23.72 30 16S23.719 2 16.004 2zm0 2c6.617 0 12 5.383 12 12s-5.383 12-12 12a11.95 11.95 0 01-6.102-1.672l-.438-.258-4.414 1.035 1.066-4.293-.277-.453A11.95 11.95 0 014 16c0-6.617 5.383-12 12.004-12zm-3.258 5.5c-.258 0-.672.097-.973.425-.3.328-1.148 1.121-1.148 2.735s1.175 3.176 1.34 3.394c.163.218 2.273 3.625 5.582 4.934 2.758 1.086 3.316.87 3.914.816.598-.055 1.93-.79 2.203-1.551.273-.762.273-1.414.191-1.551-.082-.137-.3-.219-.629-.383s-1.945-.957-2.246-1.066c-.3-.11-.52-.164-.738.164-.219.328-.847 1.066-1.04 1.285-.19.219-.382.246-.71.082-.33-.164-1.391-.512-2.649-1.633-1.172-1.043-1.945-2.203-2.18-2.574-.218-.328-.015-.488.199-.68.192-.172.438-.437.602-.656.164-.219.246-.383.355-.602.11-.219.055-.438-.027-.601-.082-.164-.738-1.805-1.02-2.462-.246-.574-.504-.574-.738-.574z" />
      </svg>
      <span className={styles.label}>WhatsApp</span>
    </a>
  );
}
