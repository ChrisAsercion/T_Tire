import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '/styles/Home.module.css';
import '/styles/Header.css';
// import React, { createContext } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const Header = () => {
//   return (
//     <header className="header">
//         <img src="/images/TT logo - color.jpg" alt="Company Logo" className="company-logo" />
//     </header>
//   );
// }

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1 className={styles.title}>
          Welcome to Tommy Tire!
        </h1>

        <Image
          src="/images/TT logo - color.jpg"
          alt="Company Logo"
          width={300}
          height={300}
        />
        
          
          <p className={styles.description}>
          A family-owned and operated tire business dedicated to serving both
  commercial and residential clients with unparalleled expertise and a family touch. With over 40
  years of experience in the industry, we pride ourselves on delivering top-quality tires, and
  exceptional customer service. Our team is committed to ensuring your satisfaction with our
  comprehensive range of products and services tailored to meet your specific needs. At Tommy
  Tire, we consider you to be part of the family!
          </p>

        
            
          {/* const MyCarousel = () => (
  <Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
    <SwiperSlide><img src="/images/Goodyear Logo.png" alt="Goodyear" /></SwiperSlide>
    <SwiperSlide><img src="/images/Cooper Tire Logo.png" alt="Cooper Tire" /></SwiperSlide>
    <SwiperSlide><img src="/images/Toyo Tire.webp" alt="Toyo" /></SwiperSlide>
  </Swiper>
); */}


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
