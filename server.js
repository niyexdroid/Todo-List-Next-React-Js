const express = require('express')
const next = require('next')

app.prepare().then(() => {
    const server = express()
  
    server.put('/pages/index.js', (req, res) => {
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
  
    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})