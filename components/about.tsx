// pages/about.tsx
import Head from 'next/head';
import styles from '../CSS/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSubtitle}>
          Staying relevant has never been more important in these fast changing times.so, I am working on myself according to the advance technology
          so that I can also move in our society confidently. I am making my grip in learning Node js, Next js, react, Javascript and so on. So that
          I can help everyone accordingly. 

          </p>
        </section>

        {/* Company Overview Section */}
        <section className={styles.overview}>
          <h2>My Mission</h2>
          <p>
            My mission is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor,and some style.
             My goal is to provide outstanding products and services that bring value to our clients. 
          </p>
        </section>

      </main>
    </>
  );
}
