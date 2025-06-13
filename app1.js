import { createServer } from 'http';
import { reqHandler } from './routes.js';

const server = createServer((req, res) => {
    console.log(req.url, req.method);
    
    // Handle user routes
    if (req.url.startsWith('/')) {
        return reqHandler(req, res);
    }
    if (req.url.startsWith('/users')) {
        return reqHandler(req, res);
    }
    if (req.url.startsWith('/create-user')) {
        return reqHandler(req, res);
    }
});

server.listen(8001, () => {
    console.log('Server is running on port 8001');
});