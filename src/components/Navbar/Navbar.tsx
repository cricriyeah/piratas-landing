'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logopirata.webp" 
            alt="Piratas Adventures" 
            width={160} 
            height={60} 
            className={styles.logoImage} 
            priority
          />
        </Link>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={styles.link}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className={styles.ctaButton} onClick={() => setIsMobileMenuOpen(false)}>
            RESERVA AHORA
          </Link>
        </div>

        <button 
          className={styles.hamburger} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineTop : ''} ${isScrolled ? styles.darkLine : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineMiddle : ''} ${isScrolled ? styles.darkLine : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineBottom : ''} ${isScrolled ? styles.darkLine : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}
