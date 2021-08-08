const http = require('http')

const server = http.createServer((req, res)=> { //incoming request, respnse what we are sending back
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>can't seem to find the page you are looking for</p>
    <a href="/"> back home</a>
    `)
})

server.listen(5000)