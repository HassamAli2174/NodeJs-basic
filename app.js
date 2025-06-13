import { createServer } from 'http';
import { handler, someText } from './routes.js';

console.log(someText);

const server = createServer(handler);

server.listen(3000)