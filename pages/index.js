import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>devter</title>
        <meta name="description" content="awesome social network for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">devter!</a>
        </h1>
        <nav className={styles.nav}>
          <Link href="/timeline">
            timeline
          </Link>
        </nav>
      </AppLayout>
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="mailto:brianbentancourt9@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Brian Bentancourt
        </a>
      </footer>
    </div>
  )
}
