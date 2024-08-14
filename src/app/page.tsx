import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Business</title>
        <meta name="description" content="Welcome to our business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        
      <Image
              src="/images/TT logo - color.jpg"
              alt="Company Logo"
              width={300}
              height={300}
            />
        <h1 className={styles.title}>
          Welcome to Tommy Tire!
        </h1>
        
        <p className={styles.description}>
        A family-owned and operated tire business dedicated to serving both
commercial and residential clients with unparalleled expertise and a family touch. With over 40
years of experience in the industry, we pride ourselves on delivering top-quality tires, and
exceptional customer service. Our team is committed to ensuring your satisfaction with our
comprehensive range of products and services tailored to meet your specific needs. At Tommy
Tire, we consider you to be part of the family!
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Link href="/products-services">
                <p>Our Products</p>
            </Link>
          </div>
        
          
            <Image
              src="/images/employees.jpg"
              alt="Shop"
              width={200}
              height={200}
            />
          
          {/* <div className={styles.card}>
          <Link href="/owners">
            <p>Our Owners</p>
          </Link>
          </div> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <p>Tommy Mullen, President</p>
          <p>303-968-6644</p>
          <p>Or</p>
          <p>Joe Norwood, Sales manager</p>
          <p>720-556-4712</p>
        </div>
      </footer>
    </div>
  );
}
