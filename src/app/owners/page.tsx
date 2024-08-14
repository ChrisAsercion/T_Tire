import Head from 'next/head';
import Image from 'next/image';
import styles from '/styles/Owners.module.css';

export default function Owners() {
  return (<div className={styles.container}>
    <Head>
      <title>Meet the Owners</title>
      <meta name="description" content="Learn more about the owners of our business." />
    </Head>

    <main className={styles.main}>
      <h1>Meet the Owners</h1>
      <div className={styles.owners}>
        <div className={styles.owner}>
          <Image
            src="/images/employees.jpg"
            alt="Owner 1"
            width={300}
            height={300}
          />
        </div>
        
        {/* Add more owner profiles as needed */}
      </div>
    </main>
  </div>
);

}