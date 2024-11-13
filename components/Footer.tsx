// components/Footer.tsx
import Link from 'next/link';
import styles from '../CSS/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">My Cool Website</Link>
        </h1>
        <nav className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>

        <p className={styles.copyright}>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
