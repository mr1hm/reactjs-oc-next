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
    app.listen(process.env.PORT || 3000)
  })
