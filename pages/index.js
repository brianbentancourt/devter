import { useEffect, useState } from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'
import { colors } from '../styles/theme'
import { loginWithGitHub, onAuthStateChanged } from '../firebase/client'


export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(user => setUser(user))
  }, [])

  const handleClick = () =>
    loginWithGitHub()
      .then(user => setUser(user))
      .catch(err => console.error(err))


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

          <div>
            {
              user === null &&
              <Button onClick={handleClick}>
                <GitHub fill={'#fff'} width={24} height={24} />
                Login with GitHub
              </Button>
            }
            {
              user &&
              <div>
                <img src={user.avatar} />
                <strong>{user.userName}</strong>
              </div>
            }

          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
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
