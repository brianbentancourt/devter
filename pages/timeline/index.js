import Link from 'next/link'

export default function Timeline ({ userName }) {
  return (
        <>
            <Link href="/">
                {'<home'}
            </Link>
            <h1>Timeline of {userName}</h1>
        </>
  )
}

Timeline.getInitialProps = () =>
  fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
