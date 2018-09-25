class: middle

# ReactJS OC
----

Building Server-rendered React Apps with Next.js

---

class: center, middle

![Next](./images/next.svg)

---

class: middle

> ## Next.js is a minimalistic framework for server-rendered React applications.
>
> ### \- zeit

---

class: center, middle

![Zeit](./images/zeit.png)

---

class: middle

# 🔭 Overview
----

### 1. Setting Up
### 2. Server-Side Rendering
### 3. Routing
### 4. Code Splitting
### 5. Loading Data
### 6. Customizing Webpack
### 7. Evaluating Next.js

---

class: middle, center

# 🍊 Orange County Code School

---

class: middle, center
### ❤️ ❤️ ❤️
# 👩🏻
### 😸 😾

---

class: middle, center

![juniors](./images/juniors.gif)

---

class: middle, center

![go](./images/go.gif)

---

class: middle, center

# 👶 Setting Up

---

class: middle, center

# ⛓ Dependencies

---

class: middle

```bash
# create a package.json
npm init --yes
# install required dependencies
npm install --save next react react-dom
```

---

class: middle

> ## Next.js only supports React 16.
> ### We had to drop React 15 support due to the way React 16 works and how we use it.
> ### \- zeit

---

class: middle, center

# 🤖 Scripts

---

class: middle

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

---

class: middle, center

# 📁 Pages

---

class: middle

```bash
# make a "pages/" directory
mkdir pages/
# make a page component
code pages/index.jsx
```

---

class: middle

```jsx
// pages/index.jsx

export default function Index() {
  return (
    <h1>Hello, ReactJS OC&#33;</h1>
  )
}
```

???

Here's a simplistic Next.js page.

---

class: middle

```jsx
// pages/index.jsx

import { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
      <h1>Hello, ReactJS OC&#33;</h1>
    )
  }
}
```

---

class: middle, center

# 🚀 RUN IT

---

class: middle

```bash
.
├── node_modules/
│   ├── next/
│   ├── react/
│   └── react-dom/
├── pages/
│   └── index.jsx
└── package.json
```

---

class: middle

```jsx
// pages/index.jsx

export default function Index() {
  return (
    <h1>Hello, ReactJS OC&#33;</h1>
  )
}
```

---

class: middle, center

# 🎓 Setting Up

---

class: middle, center

# 👶 Server-Side Rendering

---

class: middle, center

# SPA

```html
<div id="root"></div>
```

---

class: middle, center

# SSR

```html
<div id="__next">
  <h1>Hello, ReactJS OC!</h1>
  <h2>You handsome devils...</h2>
</div>
```

---

class: middle, center

<img style="max-width: 100%" src="./images/ssr-pe.png"/>

---

class: middle

```jsx
import MetaTags from 'react-meta-tags'

export default function App() {
  return (
    <>
      <MetaTags>
        <meta property="og:site_name" content="SSR Demo!"/>
        <meta property="og:title" content="Building Server-Rendered React apps with Next.js"/>
        <meta property="og:type" content="article"/>
        <meta property="og:description" content="Tue, Sep 25, 2018, 6:30 PM: Building Server-Rendered React apps with Next.jsTim Davis – Instructor at Orange County Code SchoolSetting up routing for a React project can get pretty complex. How do you"/>
        <meta property="og:url" content="http://localhost:3000/"/>
        <meta property="og:image" content="https://secure.meetupstatic.com/photos/event/d/6/3/2/600_474714834.jpeg"/>
      </MetaTags>
      <h1>Hello, ReactJS OC!</h1>
      <h2>You handsome devils...</h2>
    </>
  )
}
```
---

class: middle, center

<img style="max-width: 100%" src="./images/spa-og.png"/>

---

class: middle

```jsx
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
```

---

class: middle, center

<img style="max-width: 100%" src="./images/ssr-og.png"/>

---

class: middle

[Full Article](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-4-site-is-progressively-enhanced-b5ad7cf7a447s)

> ## Progressive Web Apps with React.js
> ### - Addy Osmani

---

class: middle, center

# 🎓 Server-Side Rendering

---

class: middle, center

# 👶 Routing

---

class: middle, center

# 🕸 Server

---

class: middle

```bash
.
├── node_modules/
├── pages/
│   ├── users/
│   │   └── index.jsx
│   ├── posts/
│   │   └── index.jsx
│   ├── about.jsx
│   └── index.jsx
└── package.json
```

---

class: middle, center

# 📱 Client

---

class: middle

```jsx
// pages/index.jsx

import Router from 'next/router'

export default function Index() {
  return (
    <>
      <h1>Hello, ReactJS OC!</h1>
      <h2>You handsome devils...</h2>
      <button className="link" onClick={() => Router.push('/about')}>
        Learn More
      </button>
    </>
  )
}
```

---

class: middle, center

# 👼 Higher-Order Component

---

class: middle

```jsx
// containers/home-container.jsx

import { withRouter } from 'next/router'

export function HomeContainer({ router }) {
  return (
    <>
      <h1>Hello, ReactJS OC!</h1>
      <h2>You handsome devils...</h2>
      <button className="link" onClick={() => router.push('/about')}>
        Learn More
      </button>
    </>
  )
}

export default withRouter(HomeContainer)
```

---

class: middle, center

# ⚡️ Events

---

class: middle

```jsx
// pages/_app.js

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
```

---

class: middle, center

# `<Link/>`

---

class: middle

```jsx
// pages/index.jsx

import Link from 'next/link'

export default function Index() {
  return (
    <>
      <h1>Hello, ReactJS OC!</h1>
      <h2>You handsome devils...</h2>
      <Link href="/about" passHref>
        <a>Learn More</a>
      </Link>
    </>
  )
}
```

---

class: middle

```html
<h1>Hello, ReactJS OC!</h1>
<h2>You handsome devils...</h2>
<a href="/about">Learn More</a>
```

---

class: middle, center

# 👺 Route Masking

---

class: middle

```jsx
// pages/index.jsx

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
```

---

class: middle

```html
<h1>Hello, ReactJS OC!</h1>
<h2>You handsome devils...</h2>
<a href="/about">Learn More</a>
```

---

class: middle, center

# ☁️ Server-Side

---

class: middle

```js
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const pages = next({ dev })

pages
  .prepare()
  .then(() => {
    const app = express()
    const handle = pages.getRequestHandler()
    app.get('/info', (req, res) => {
      pages.render(req, res, '/about')
    })
    app.get('*', (req, res) => {
      handle(req, res)
    })
    app.listen(process.env.PORT)
  })
```

---

class: middle

```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```

---

class: middle, center

# 🎓 Routing

---

class: middle, center

# 👶 Data Fetching

---

class: middle, center

# 🔁 `componentDidMount`

---

class: middle

```jsx
export default class ViewMessages extends Component {
  componentDidMount() {
    fetch('/messages')
      .then(res => res.json())
      .then(messages => this.setState({ messages }))
  }
  render() {
    return this.state.messages.length
      ? <MessageList messages={this.state.messages}/>
      : <div>Loading...</div>
  }
}
```

---

class: middle

```html
<span>Loading...</span>
```

---

class: middle

```html
<div id="root"></div>
```

---

class: middle, center

# 💡 `getInitialProps`

---

class: middle

```bash
npm install --save isomorphic-fetch
```

---

class: middle

```bash
npm install --save isomorphic-unfetch
```

---

class: middle

```bash
npm install --save apollo-boost graphql react-apollo isomorphic-unfetch
```

---

class: middle

```bash
npm install --save axios
```

---

class: middle

```jsx
// pages/users.jsx

import axios from 'axios'
import { Component } from 'react'
import UserList from '../components/user/user-list'

export default class Users extends Component {
  static async getInitialProps() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { data: users } = await axios.get(url)
    return { users }
  }
  render() {
    return <UserList users={this.props.users}/>
  }
}
```

---

class: middle

```jsx
// pages/users.jsx

import axios from 'axios'
import UserList from '../components/user/user-list'

function Users(props) {
  return <UserList users={props.users}/>
}

Users.getInitialProps = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const { data: users } = await axios.get(url)
  return { users }
}

export default Users
```

---

class: middle

```jsx
export default class Users extends Component {
  static async getInitialProps(context) {

  }
  render() {
    return <UserList users={this.props.users}/>
  }
}
```

---

class: middle, center

# 🤦‍

---

class: middle

```js
Object.keys(context)
/**
 * [
 *   "pathname",
 *   "query",
 *   "asPath",
 *   "req", <- SERVER ONLY
 *   "res", <- SERVER ONLY
 *   "jsonPageRes", 🤷‍
 *   "err"
 * ]
 * /
```
