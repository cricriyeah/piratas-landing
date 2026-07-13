'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import WhaleSeasonBanner from '../components/WhaleSeasonBanner/WhaleSeasonBanner';
import Gallery from '../components/Gallery/Gallery';
import WhyUs from '../components/WhyUs/WhyUs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import LangToggle from '../components/LangToggle/LangToggle';
import WhatsAppFab from '../components/WhatsAppFab/WhatsAppFab';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
    });
  }, []);

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <About />
      <div className="section-divider" data-aos="fade-in">
        <div className="divider-line">
          <div className="divider-diamond"></div>
        </div>
      </div>
      <Services />
      <WhaleSeasonBanner />
      <Gallery />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppFab />
      <LangToggle />
    </main>
  );
}
