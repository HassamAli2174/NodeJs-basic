import { createServer } from 'http';
// import { handler, someText } from './routes.js';
import express from 'express';
// const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})
app.use((req,res,next)=>{
    console.log('In the next middleware');
    next();
})

const server = createServer(app);

server.listen(3000)