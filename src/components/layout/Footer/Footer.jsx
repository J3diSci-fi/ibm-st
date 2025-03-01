import React from 'react';
import styles from './Footer.module.css';
import phone from '../../../assets/commons/phone.png';
import email from '../../../assets/commons/email.png';
import instagram  from '../../../assets/commons/instagram.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <div className={styles.contacts}>
          <h3>IBM Serra Talhada</h3>
          <p>Igreja Batista Manancial de Serra Talhada</p>
          
          <h3>Endereço</h3>
          <p>R. Antônio Tomé de Souza, 365</p>
          <p>São Cristovao, Serra Talhada - PE</p>
          <p>CEP: 56903-220</p>         

          <div className={styles.divPhone}><img className={styles.imgs} src={phone} alt=''/> <p>+ 55 (87) 99945-0349</p></div>
          <div className={styles.divEmail}><img className={styles.imgs} src={email} alt=''/> <p>ibmanancial@gmail.com</p></div>
        </div>
      </div>
      <div className={styles.centerSection}>
        <div className={styles.socialMedia}>  
          <h3>Redes Sociais</h3>    
          <a href='https://www.instagram.com/_ibmanancial/' target='_blank' rel="noreferrer"><img className={styles.imgSociais} src={instagram} alt="" /></a>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.mapa}>
          <h3>Venha nos Visitar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.9116627498045!2d-38.29229408485851!3d-7.986847994261371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab2ee36f1ae1ed%3A0xf15149cb7635d9af!2sR.%20Ant%C3%B4nio%20Tom%C3%A9%20de%20Souza%2C%20365%20-%20S%C3%A3o%20Crist%C3%B3v%C3%A3o%2C%20Serra%20Talhada%20-%20PE%2C%2056903-220!5e0!3m2!1sen!2sbr!4v1689356858653!5m2!1sen!2sbr"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
