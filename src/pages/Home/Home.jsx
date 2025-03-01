import React, { useState, useEffect, useCallback } from 'react';
import styles from './Home.module.css';
import image1 from '../../assets/slider/image1.png';
import image2 from '../../assets/slider/image2.jpg';

import leftarrow from '../../assets/commons/left-arrow.png';
import rightarrow from '../../assets/commons/right-arrow.png';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista de imagens e textos para o slider
  const slides = [
    { image: image1, text: "JESUS TRANSFORMA" },
    { image: image2, text: "ANIVERSÁRIO DE 7 ANOS" }
  ];

  // Função para ir para o próximo slide, estável com useCallback
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Função para ir para o slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Alterna automaticamente os slides a cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [nextSlide]);

  return (
    <div className={styles.home}>
      {/* Slider Section */}
      <section className={styles.slider}>
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className={styles.slide}
        />

        <div className={styles.slideText}>
          {slides[currentSlide].text}
        </div>

        <button className={styles.navButton} onClick={prevSlide}>
          <img src={leftarrow} alt="Previous" className={styles.arrow} />
        </button>
        <button className={styles.navButton} onClick={nextSlide}>
          <img src={rightarrow} alt="Next" className={styles.arrow} />
        </button>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>

      {/* Section 2: Video */}
      <section className={styles.videoSection}>
        <h2 className={styles.videoTitle}>Aniversário 7 Anos da Igreja</h2>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/HCWjR8mi9eM"
            title="Aniversário 7 Anos da Igreja"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className={styles.videoMessage}>
          Agradecemos a todos que fizeram parte dessa linda jornada. Que Deus continue abençoando cada um de vocês!
        </p>
      </section>
    </div>
  );
}

export default Home;
