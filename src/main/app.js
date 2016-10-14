const express = require('express')
const app = express()
const port = 8080

app.post('/', function (req, res) {
    res.writeHead(200)
    req.pipe(res)
})

app.listen(port, function () {
    console.log(`Echo server listening on port ${port}`)
})
