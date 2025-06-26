// Footer.jsx
import styles from './Footer.module.css';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (

    <footer className={styles.footer}>
      <a href="https://www.instagram.com/euflaviio_084" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={30} color="#0cc4e6" />
      </a>
      <a href="https://wa.link/cfqezm" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <FaWhatsapp size={30} color="#0cc4e6" />
      </a>
      <a href="https://github.com/yNotFlaviio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={30} color="#0cc4e6" />
      </a>
      <p>By: Antônio Flávio Rodrigues de Andrade <br /> 4INF-1V | TJA </p>
    </footer>
  );
}