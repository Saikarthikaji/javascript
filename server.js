// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type' , 'text/plain');
//     res.end('Hello World');
// });
// server.listen(port, hostname,() => {
//     console.log(`server running at http://${hostname}:${port}/`);
// });


const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req,res) => {

    console.log("url : " , req.url);
    const parsed_url = url.parsed(req.uri);
    console.log("parded_url : " , parsed_url)

    if(parsed_url.pathname === '/') {
        res.writeHead(200,{'content-Type' : 'text/html'});
        res.end(fs.readFileSync('../client/index.html'));
    }

    
    // res.writeHead(200,{'content-Type' : 'text/plain'});
    // res.end("success");

});

server.listen(port,() => {
    console.log(`server running at http://localhost:${port}`);
});
