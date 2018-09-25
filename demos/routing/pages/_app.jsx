import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import NextApp, { Container } from 'next/app'

NProgress.configure({ showSpinner: false })

export default class App extends NextApp {
  componentDidMount() {
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeError', () => NProgress.done())
    Router.events.on('routeChangeComplete', () => NProgress.done())
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Container>
          <Head>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
          </Head>
          <Component {...pageProps}/>
        </Container>
      </>
    )
  }
}
