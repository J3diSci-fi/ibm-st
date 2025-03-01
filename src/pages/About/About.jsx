import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre Nós</h1>
      <p>Bem-vindo à página Sobre Nós. Aqui você encontrará informações sobre nossa empresa e nossa missão.</p>
      <section>
        <h2>Nossa História</h2>
        <p>Fundada em 2023, nossa empresa tem se dedicado a fornecer soluções inovadoras para nossos clientes.</p>
      </section>
      <section>
        <h2>Nossa Missão</h2>
        <p>Nossa missão é criar produtos de alta qualidade que melhorem a vida de nossos usuários.</p>
      </section>
    </div>
  );
}

export default About;
