import { writeFile } from 'fs'; //filesystem for creating a new file

import { url } from "inspector";

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        });
        return req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            console.log(parsedData);
            const message = parsedData.split('=')[1];
            writeFile('message.txt', message, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from My NODE.js Server!!</body>');
    res.write('</html>')
    res.end();
};


//for multiple
// module.exports = { handler: requestHandler, someText: 'Some Hard quoted Text' };
// module.exports =  requestHandler;
// module.exports.handler =requestHandler;
// module.exports.someText ='Some Hard quoted Text';
export { requestHandler as handler };
export const someText = 'Some Hard quoted Text';


// ###########################  Assignment Work   #####################################
// const users = [
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//     { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
//     { id: 4, name: 'Alice Brown', email: 'alice@example.com' }
// ];

// export const reqHandler = (req, res) => {
//     const method = req.method;

//     if (req.url === '/') {
//         res.write('<html>');
//         res.write('<body><h1><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></h1></body>');
//         res.write('</html>');
//         return res.end();
//     }

//     if (req.url.startsWith('/users')) {
//         res.setHeader('Content-Type', 'application/json');
//         res.write(JSON.stringify(users));
//         return res.end();
//     }

//     if (req.url === '/create-user' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });
//         return req.on('end', () => {
//             const parsedData = Buffer.concat(body).toString();
//             console.log(parsedData);
//             const message = parsedData.split('=')[1];
//             writeFile('message1.txt', message, (error) => {
//                                 res.statusCode = 302;
//                                 res.setHeader('Location', '/');
//                                 return res.end();
//                             });
//         });
//     }
// };