import Head from 'next/head';
import Image from 'next/image';
import Trail from '../components/Trail.tsx';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Trail open height={300}>
          <Image
            src="/1.jpg"
            width="500"
            height="500"
            objectFit="contain"
          ></Image>
          <Image
            src="/2.jpg"
            width="500"
            height="500"
            objectFit="contain"
          ></Image>
          <Image
            src="/3.jpg"
            width="500"
            height="500"
            objectFit="contain"
          ></Image>
          <Image
            src="/4.jpg"
            width="500"
            height="500"
            objectFit="contain"
          ></Image>
          <Image
            src="/5.jpg"
            width="500"
            height="500"
            objectFit="contain"
          ></Image>
        </Trail>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
