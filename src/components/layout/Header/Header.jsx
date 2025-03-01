import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Define um limite para ativar o efeito
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpa o evento
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <Navbar />
    </header>
  );
}

export default Header;
