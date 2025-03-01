import React from 'react';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1>404 - Página não encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
      </div>
      <div className={styles.poweredBy}>
        Powered by Your Company Name
      </div>
    </div>
  );
}

export default NotFound;