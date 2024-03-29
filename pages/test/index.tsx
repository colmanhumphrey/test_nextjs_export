import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


export default function Test() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Next.js Export</title>
        <meta name="description" content="Edited from create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Test Page
        </h1>

        <div className={styles.grid}>
          <Link href="/test/4">
            <a className={styles.card}>
              <h2>ID 4 &rarr;</h2>
              <p>A direct link to the dynamic page for a particular id</p>
            </a>
          </Link>

          <Link href="/test/4/">
            <a className={styles.card}>
              <h2>ID 4 &rarr;</h2>
              <p>The same link with a slash</p>
            </a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
              <h2>Back Home &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
