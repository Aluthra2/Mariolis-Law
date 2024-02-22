import React from 'react';
import styles from "../css/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
      <p>© Copyright 2024 | Mariolis Law LLP | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
