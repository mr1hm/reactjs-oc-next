import Link from 'next/link'

export default function Index() {
  return (
    <>
      <h1>Hello, ReactJS OC!</h1>
      <h2>You handsome devils...</h2>
      <Link href="/about" as="/info" passHref>
        <a>Learn More</a>
      </Link>
    </>
  )
}
