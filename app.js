import { createServer } from 'http';
import { writeFileSync } from 'fs'; //filesystem for creating a new file

const server = createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
     url = req.url
     method = req.method
    if ( url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk)});
        req.on('end',()=>{
        const parsedData= Buffer.concat(body).toString();
        console.log(parsedData);
        const message = parsedData.split('=')[1];
        writeFileSync('message.txt',message);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from My NODE.js Server!!</body>');
    res.write('</html>')
    res.end();
});

server.listen(3000)