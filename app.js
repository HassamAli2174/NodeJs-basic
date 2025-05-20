const http = require('http');
const fs = require('fs'); //filesystem for creating a new file

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    const url = req.url
    const method = req.method
    if ( url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt','Dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from My NODE.js Server!!</body>');
    res.write('</html>')
    res.end();
});

server.listen(3000)