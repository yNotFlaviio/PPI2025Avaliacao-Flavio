// Header.jsx ------------------------------
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src="/logo.png" alt="Logo Chevrolet Chevette" className={styles.logo} />
        <div className={styles.titleBox}>
          <h1 className={styles.title}>CHEVROLET CHEVETTE</h1>
          <p className={styles.subtitle}>CUSTOMIZAÇÃO | PEÇAS</p>
        </div>
      </div>
      <hr className={styles.line} />
    </header>
  );
}