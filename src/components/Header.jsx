// Header.jsx ------------------------------
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src="/logo.png" alt="Logo Chevrolet Chevette" className={styles.logo} />
        <div className={styles.titleBox}>
          <h1 className={styles.title}>SORTEADOR DE NÚMERO</h1>
          <p className={styles.subtitle}>Faça sorteios de números Aleatórios</p>
        </div>
      </div>
      <hr className={styles.line} />
    </header>
  );
}