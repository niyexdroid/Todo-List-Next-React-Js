const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
    const server = express()
    server.get('./pages/index.js', (req, res) => {
        res.send(this.state = {
            todos: [
                {id: 0, text: "Started taking tutorials on react"},
                {id: 1, text: "plan on taking tutorials on NextJs"},
                {id: 2, text: "Will begin class on expressjs as soon as am do with nextjs"},
                {id: 3, text: "I need to develop problem analyzing skills"}
            ],
            nextId: 4
        })
    })
    server.get('*', (req, res) => {
        return handle(req, res)
      })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})