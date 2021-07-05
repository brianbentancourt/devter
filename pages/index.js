import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'

export default function Home() {
  return (
    <>
      <Head>
        <title>devter</title>
        <meta name="description" content="awesome social network for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src='/logo.png' alt='logo' />
          <h1>Devter</h1>
          <h2>Talk about development <br /> with developers</h2>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 8px;
        }

        h2 {
          font-size: 21px;
        }
      `}
      </style>
    </>
  )
}
