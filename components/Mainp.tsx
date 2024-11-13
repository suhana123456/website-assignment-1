// pages/index.tsx
import Head from 'next/head';
import styles from '../CSS/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cool Website</title>
      </Head>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to Our Cool Website</h1>
          <p className={styles.heroSubtitle}>Dive into a world of creativity, innovation, and inspiration.</p>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <h2>About Us</h2>
          <p>
            Driven by creativity and a commitment to excellence, we strive to deliver work that's not only innovative
            but also meaningful and impactful.
          </p>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <h2>Our Premium Services</h2>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <h3>Design</h3>
              <p>Crafting visually stunning designs that captivate and inspire.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Development</h3>
              <p>Building responsive, high-performance websites tailored to your business.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Consulting</h3>
              <p>Providing expert guidance to help you achieve your digital goals.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
