import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../../assets/logo.jpeg';
import arrowDown from '../../../assets/commons/down-arrow.png'; // Imagem da seta para baixo
import arrowUp from '../../../assets/commons/top-arrow.png';   // Imagem da seta para cima	

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinistriesOpen, setIsMinistriesOpen] = useState(false);

  const toggleMinistries = () => {
    setIsMinistriesOpen(prevState => !prevState); // Alterna o estado
    setIsOpen(prevState => !prevState); // Alterna o menu do hamburger
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <img className={styles.logo} src={logo} alt="logo" />
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><Link to="/">IBM</Link></li>
          <li><Link to="/quemsomos">QUEM SOMOS</Link></li>
          <li><Link to="/projetos">PROJETOS</Link></li>
          <li 
            className={styles.dropdown} 
            onClick={toggleMinistries}
          >
            <span className={styles.spanMinisterios}>MINISTÉRIOS</span>
            <img
              className={`${styles.arrow} ${isMinistriesOpen ? styles.arrowUp : styles.arrowDown}`}
              src={isMinistriesOpen ? arrowUp : arrowDown} // Alterna entre as setas
              alt="Seta"
            />
            <ul className={`${styles.submenu} ${isMinistriesOpen ? styles.submenuActive : ''}`}>
              <li><Link to="/ministerio/adoracao">Adoração</Link></li>
              <li><Link to="/ministerio/infantil">Infantil</Link></li>
              <li><Link to="/ministerio/jovens">Jovens</Link></li>
              <li><Link to="/ministerio/social">Social</Link></li>
            </ul>
          </li>
          <li><Link to="/contatos">PROGRAMAÇÃO</Link></li>
        </ul>
        <button className={styles.btNcontribua}>Contribua</button>
      </div>
    </nav>
  );
}

export default Navbar;
