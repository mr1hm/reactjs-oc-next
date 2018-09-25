import NextApp from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

export default class App extends NextApp {
  componentDidMount() {
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeError', () => NProgress.done())
    Router.events.on('routeChangeComplete', () => NProgress.done())
  }
}
