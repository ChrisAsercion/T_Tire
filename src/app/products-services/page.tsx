import Head from 'next/head';
import Image from 'next/image';
import styles from '/styles/ProductsServices.module.css';

export default function ProductsServices() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products and Services</title>
        <meta name="description" content="Our Products and Services" />
      </Head>

      <main className={styles.main}>
        <h1>Our Products and Services</h1>
        <p>● Flat repairs
● Valve stem replacements
● Tire balancing
● Tire rotations
● TPMS service
● Mobile services available</p>
        <div></div>
        <Image
          src="/images/Cooper Tire Logo.png"
          alt="Product_0"
          width={200}
          height={200}
        />
        <Image
          src="/images/Goodyear Logo.png"
          alt="Product_1"
          width={200}
          height={200}
        />
        <Image
          src="/images/Toyo Tire.webp"
          alt="Product_0"
          width={200}
          height={200}
        />
        <Image
          src="/images/Xcellent Logo.png"
          alt="Product_0"
          width={200}
          height={200}
        />
        <p>We sell a wide range of tire brands for commercial and residential vehicles - give us a call to find
        out more!</p>
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
