import Head from 'next/head'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>devter</title>
        <meta name="description" content="awesome social network for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 >
          Welcome to <a href="https://nextjs.org">devter!</a>
        </h1>
        <nav >
          <Link href="/timeline">
            timeline
          </Link>
        </nav>
      </AppLayout>

    </>
  )
}
