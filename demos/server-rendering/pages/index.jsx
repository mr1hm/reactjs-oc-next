import NextHead from 'next/head'

export default function Index() {
  return (
    <>
      <NextHead>
        <meta property="og:site_name" content="SSR Demo!"/>
        <meta property="og:title" content="Building Server-Rendered React apps with Next.js"/>
        <meta property="og:type" content="article"/>
        <meta property="og:description" content="Tue, Sep 25, 2018, 6:30 PM: Building Server-Rendered React apps with Next.jsTim Davis – Instructor at Orange County Code SchoolSetting up routing for a React project can get pretty complex. How do you"/>
        <meta property="og:url" content="http://localhost:3000/"/>
        <meta property="og:image" content="https://secure.meetupstatic.com/photos/event/d/6/3/2/600_474714834.jpeg"/>
      </NextHead>
      <h1>Hello, ReactJS OC!</h1>
      <h2>You handsome devils...</h2>
    </>
  )
}
